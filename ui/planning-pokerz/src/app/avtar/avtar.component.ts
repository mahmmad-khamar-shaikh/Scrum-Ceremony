import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Avtar } from '../types/custom.types';
import { IUser } from '../types/user.interface';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { SessionInformationService } from '../services/session-information.service';
@Component({
  selector: 'app-avtar',
  templateUrl: './avtar.component.html',
  styleUrls: ['./avtar.component.scss']
})
export class AvtarComponent implements OnInit {

  faArrowLeft = faBackward;
  avtarForm!: UntypedFormGroup;
  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private sessionInformationService: SessionInformationService) { }

  ngOnInit(): void {
    this.avtarForm = this.fb.group({
      displayName: ['', Validators.required],
      avtarRole: ['']
    });
  }
  isFieldInvalid(field: string): boolean | undefined{
    return (
      (!this.avtarForm?.get(field)?.valid && this.avtarForm?.get(field)?.touched) ||
      (this.avtarForm?.get(field)?.untouched)
    );
  }

  public toDashboard(): void {

    const selctedAvtar = this.avtarForm?.get('avtarRole')?.value as Avtar;

    const userObject: IUser = {
      role: selctedAvtar,
      name: this.avtarForm?.get('displayName')?.value
    };
    this.sessionInformationService.setUserInformation = userObject;
    switch (selctedAvtar.toString()) {
      case 'SL':
        this.router.navigate(['/home/dashboard-admin']);
        break;
      case 'PO':
        this.router.navigate(['/home/dashboard-po']);
        break;
      default:
        this.router.navigate(['/home/dashboard']);
        break;
    }
  }

}
