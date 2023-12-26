import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SessionInformationService } from '../services/session-information.service';

@Component({
  selector: 'app-po-dashboard',
  templateUrl: './po-dashboard.component.html',
  styleUrls: ['./po-dashboard.component.scss']
})
export class PoDashboardComponent implements OnInit {
  public storyName: Observable<string>;

  constructor(private sessionServiceInformation: SessionInformationService) { }

  ngOnInit(): void {
    this.storyName = this.sessionServiceInformation.getStoryNameSubject;
  }

}
