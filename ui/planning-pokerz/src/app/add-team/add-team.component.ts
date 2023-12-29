import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { TeamService } from '../services/team.service';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {
  teamForm!: UntypedFormGroup;
  constructor(
    private fb: UntypedFormBuilder,
    private teamService: TeamService,
    private router: Router,
    private snacBar: MatSnackBar,
    private utilService: UtilService
  ) { }

  ngOnInit(): void {
    this.teamForm = this.fb.group({
      teamName: ['']
    });
  }

  isFieldInvalid(field: string): boolean | undefined {
    return (
      (!this?.teamForm?.get(field)?.valid && this.teamForm?.get(field)?.touched) ||
      (this.teamForm?.get(field)?.untouched)
    );
  }

  save(): void {
    const teamName = this.teamForm?.get('teamName')?.value;

    this.teamService.checkTeamExists(teamName)
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(this.utilService.dbToDomanEntity);
        }))
      .subscribe(teamData => {
        if (teamData.length == 0) {
          this.teamService.addTeam(teamName).then((data) => {
            this.router.navigate(['/home/team']);
          }).catch(err => this.snacBar.open(`Error occured while adding team to system ${err}`));
        } else {
          this.snacBar.open('Team with Same an already exists', 'Re-Check', { duration: 2000 });
        }
      });




  }
  cancel(): void {
    this.router.navigate(['/home/team']);
  }
}
