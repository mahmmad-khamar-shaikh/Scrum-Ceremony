import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/compat/firestore';
import { promise } from 'protractor';
import { map } from 'rxjs/operators';
import { IEstimation, IStory } from '../types/shared.interface';
import { MeetingService } from './meeting.service';
import { SessionInformationService } from './session-information.service';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private estimationsCollection: IEstimation[] = [];

  constructor(
    private angularFirestoreService: AngularFirestore,

  ) { }

  public currentStoy(meetingId: string): AngularFirestoreCollection<any> {
    console.log('meeting id requested', meetingId);
    return this.angularFirestoreService.collection('Stories', ref => {
      return ref
        .where('meetingId', '==', meetingId);
    });
  }

  public currentStoryByStoryName(storyId: string): AngularFirestoreDocument<any> {
    return this.angularFirestoreService.collection('Stories').doc(storyId);
  }

  public openSessionForStory(storyInfo: IStory): Promise<DocumentReference> {
    return this.angularFirestoreService.collection<any>('Stories').add({ ...storyInfo });
  }
  public closeSessionForStory(storyId: string): Promise<void> {

    return this.angularFirestoreService.doc(`Stories/${storyId}`).update({ isEstimationClosed: true });
  }

  public addEstimationForStory(estimation: IEstimation): Promise<DocumentReference> {
    return this.angularFirestoreService.collection<any>('Estimations').add({ ...estimation });
  }
  public updateEstimationForStory(estimationId: string, estimation: string): Promise<void> {
    return this.angularFirestoreService.doc(`Estimations/${estimationId}`).update({ estimation });
  }

  public getEstimationForCurrentStoryAndUser(storyId: string, user: string | undefined): AngularFirestoreCollection<any> {
    return this.angularFirestoreService.collection('Estimations', ref => {
      return ref
        .where('estimator', '==', user)
        .where('storyId', '==', storyId);
    });
  }

  public getAllEstimationForCurrentStory(storyId: string): AngularFirestoreCollection<any> {
    return this.angularFirestoreService.collection('Estimations', ref => {
      return ref
        .where('storyId', '==', storyId);
    });
  }

}
