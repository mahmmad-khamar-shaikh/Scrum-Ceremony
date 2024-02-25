import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CeremonyService } from '../services/ceremony.service';
import { SessionInformationService } from '../services/session-information.service';
import { UtilService } from '../services/util.service';
import { CeremonyOptions } from '../types/custom.types';
import { ICeremony } from '../types/shared.interface';

@Component({
  selector: 'app-ceremony',
  templateUrl: './ceremony.component.html',
  styleUrls: ['./ceremony.component.scss']
})
export class CeremonyComponent implements OnInit {
  ceremonies$!: ICeremony[];

  constructor(
    private ceremonyService: CeremonyService,
    private router: Router,
    private sessionInformationService: SessionInformationService,
    private utilService: UtilService
  ) { }
  ngOnInit(): void {
    this.sessionInformationService.showLoader = true;
    this.ceremonyService.getCeremonyCollection.snapshotChanges().pipe(
      map(changes =>
        changes.map(this.utilService.dbToDomanEntity)
      )
    ).subscribe(data => {
      this.ceremonies$ = data;
      this.sessionInformationService.showLoader = false;
    });

  }

  navigateToCermony(ceremonyType: string, ceremonyId: string): void {
    switch (ceremonyType.toString()) {
      case 'Estimation':
        this.sessionInformationService.setSessionCeremony = ceremonyId;
        this.router.navigate(['/home/avtar']);
        break;
      case 'Retrospective':
        this.router.navigate(['/home/retro-dashboard']);
        break;
      case 'Scrum':
        this.router.navigate(['/home/scrum-dashboard']);
        break;
      default:
        break;
    }

  }

}
