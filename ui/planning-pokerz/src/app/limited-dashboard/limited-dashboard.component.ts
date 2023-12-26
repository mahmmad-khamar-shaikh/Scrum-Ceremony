import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MeetingService } from '../services/meeting.service';
import { SessionInformationService } from '../services/session-information.service';
import { StoryService } from '../services/story.service';
import { UtilService } from '../services/util.service';
import { IEstimation, IStoryPointChoice } from '../types/shared.interface';

@Component({
  selector: 'app-limited-dashboard',
  templateUrl: './limited-dashboard.component.html',
  styleUrls: ['./limited-dashboard.component.scss']
})
export class LimitedDashboardComponent implements OnInit {
  public storyPointCollection: IStoryPointChoice[] = [];
  public userNotSureCollection: IStoryPointChoice[] = [];
  public userStillHaveADoubt: IStoryPointChoice[] = [];
  private estimationCollection: IEstimation[];
  public storyName: Observable<string>;
  constructor(
    private sessionInformationService: SessionInformationService,
    private storyService: StoryService,
    private utilService: UtilService,
    private meetingService: MeetingService



  ) { }
  ngOnInit(): void {
    console.log(`estimation being fetched for current story ${this.sessionInformationService.getSessionInformation.currentStoryId}`);
    this.storyName = this.sessionInformationService.getStoryNameSubject;
    this.fetchLiveEstimations();
  }

  private fetchLiveEstimations(): void {
    this.meetingService.liveMeeting
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(this.utilService.dbToDomanEntity);
        }))
      .subscribe(d => {
        d.map(t => {
          this.storyService.currentStoy(t.id)
            .snapshotChanges()
            .pipe(
              map(actions => {
                return actions.map(this.utilService.dbToDomanEntity);
              }))
            .subscribe(data => {
              let currentStoryFound = false;
              data.map(v => {
                console.log(`stories data arrived ${v.storyName}`);

                if (!v.isEstimationClosed) {
                  currentStoryFound = true;
                  this.sessionInformationService.setStoryNameSubject = v.storyName;
                  this.sessionInformationService.setCurrentStory = v.storyName;
                  this.sessionInformationService.setCurrentStoryId = v.id;
                }
              });
              if (!currentStoryFound) {
                // reset story values

                this.sessionInformationService.setCurrentStory = '';
                this.sessionInformationService.setCurrentStoryId = '';
              } else {
                console.log(`Current story found and fetching all estimations for ${this.sessionInformationService.getSessionInformation.currentStoryId}`);
                this.estimationCollection = [];
                this.storyService.getAllEstimationForCurrentStory(this.sessionInformationService.getSessionInformation.currentStoryId)
                  .snapshotChanges()
                  .pipe(
                    map(finalActions => {
                      return finalActions.map(this.utilService.dbToDomanEntity);
                    }))
                  .subscribe(estimationSnapData => {
                    this.estimationCollection = [];
                    console.log(`final estimation arrirve`);
                    estimationSnapData.map(estimationCollection => {
                      console.log(`iterating final estimation${estimationCollection.estimation}`);

                      this.estimationCollection.push({
                        estimation: estimationCollection.estimation,
                        estimator: estimationCollection.estimator,
                        storyId: estimationCollection.storyId
                      });
                    });
                    this.decorateFinalEstimationCollection(this.estimationCollection);
                  });
              }
            });
        });
      });
  }

  decorateFinalEstimationCollection(rawEstimationCollection: IEstimation[]): void {
    this.userStillHaveADoubt = [];
    this.userNotSureCollection = [];
    this.storyPointCollection = [];
    rawEstimationCollection.map(_ => {
      if (_.estimation === '?') {
        this.userStillHaveADoubt.push({ storyPoint: '', userName: _.estimator });
      } else if (_.estimation === 'all_inclusive') {
        this.userNotSureCollection.push({ storyPoint: '', userName: _.estimator });
      } else {
        this.storyPointCollection.push({ storyPoint: _.estimation, userName: _.estimator });
      }
    });

  }

}
