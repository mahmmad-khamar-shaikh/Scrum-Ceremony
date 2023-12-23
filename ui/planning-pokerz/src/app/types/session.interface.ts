import { IUser } from './user.interface';

export interface ISession {
  userInfo: IUser;
  teamId: string;
  ceremonyId: string;
  meetingId: string;
  currentStory: string;
  currentStoryId: string;
}
