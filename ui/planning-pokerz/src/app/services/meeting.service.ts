import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  DocumentReference
} from '@angular/fire/compat/firestore';
import { IMeeting } from '../types/shared.interface';
import { SessionInformationService } from './session-information.service';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(
    private angularFirestoreService: AngularFirestore,
    private sessionInformationService: SessionInformationService
  ) { }

  get liveMeeting(): AngularFirestoreCollection<IMeeting> {
    return this.angularFirestoreService.collection('Meetings', ref => {
      return ref
        .where('ceremonyId', '==', this.sessionInformationService.getSessionInformation.ceremonyId)
        .where('teamId', '==', this.sessionInformationService.getSessionInformation.teamId)
        .where('isMeetingLive', '==', true);
    });
  }
  endMeeting(meetingId: string, endedBy: string | undefined): Promise<void> {
    return this.angularFirestoreService.doc(`Meetings/${meetingId}`).update({ isMeetingLive: false, endedBy });
  }
  startMeeting(meetingData: IMeeting): Promise<DocumentReference> {
    return this.angularFirestoreService.collection<any>('Meetings').add({ ...meetingData });
  }
}
