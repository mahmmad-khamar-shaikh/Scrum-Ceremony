import { Component, OnInit } from '@angular/core';
import { DocumentReference } from '@angular/fire/firestore';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionInformationService } from '../../services/session-information.service';
import { StoryService } from '../../services/story.service';
import { IStory } from '../../types/shared.interface';

@Component({
  selector: 'app-story-selection',
  templateUrl: './story-selection.component.html',
  styleUrls: ['./story-selection.component.scss']
})
export class StorySelectionComponent implements OnInit {
  storyForm: UntypedFormGroup;
  private currentMeetingId: string;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private sessionInformationService: SessionInformationService,
    private storyService: StoryService

  ) { }

  ngOnInit(): void {
    this.storyForm = this.fb.group({
      storyName: [this.sessionInformationService.getSessionInformation.currentStory || '', Validators.required]
    });
    console.log(`current storytid ${this.sessionInformationService.getSessionInformation.currentStoryId}`);
    this.storyService.currentStoy(this.sessionInformationService.getSessionInformation.currentStoryId)
      .valueChanges().subscribe(data => {
        console.log(`data ${data}`);
      });

    this.currentMeetingId = this.sessionInformationService.getSessionInformation.meetingId;
  }
  isFieldInvalid(field: string): boolean | undefined {
    return (
      (!this.storyForm?.get(field)?.valid && this.storyForm?.get(field)?.touched) ||
      (this.storyForm?.get(field)?.untouched)
    );
  }

  goBackToBoard = () => {
    this.router.navigate(['/home/dashboard-admin']);
  }
  startEstimation = () => {
    const storyIdToBeEstimated = this.storyForm?.get('storyName')?.value;
    if (!storyIdToBeEstimated) {
      return;
    }
    const story: IStory = {
      storyName: storyIdToBeEstimated,
      meetingId: this.currentMeetingId,
      isEstimationClosed: false
    };
    console.log(`opening session for meetingId ${this.currentMeetingId}`);
    // this.storyService.openSessionForStory(story).then((data: DocumentReference): void | PromiseLike<void>() => {
    //   console.log(`session opened for story : ${data.id}`);
    //   this.goBackToBoard();
    // }).catch(err => console.log(`error occurred while opening session ${err}`));
  }
  closeEstimation = () => {
    this.storyService
      .closeSessionForStory(this.sessionInformationService.getSessionInformation.currentStoryId)
      .then(() => {
        console.log(`closing session for sotry ${this.sessionInformationService.getSessionInformation.currentStoryId} successful `);
        this.sessionInformationService.setCurrentStory = '';
        this.sessionInformationService.setCurrentStoryId = '';
        this.storyForm.patchValue({ storyName: '' });
      })
      .catch(err => console.log(`error occured while closeing story estimation ${err}`));
  }
}
