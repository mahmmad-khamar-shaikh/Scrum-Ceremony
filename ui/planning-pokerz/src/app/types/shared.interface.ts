export interface ICardValue {
  type: string;
  value: string;
}
export interface IStoryPointChoice {
  userName: string | undefined;
  storyPoint: string | undefined;
}

export interface ITeams {
  teamId: string;
  teamName: string;
}

export interface ICeremony {
  ceremonyId: string;
  ceremonyName: string;
}

export interface IMeeting {
  ceremonyId: string;
  teamId: string;
  meetingStartedDateTime: Date;
  meetingEndedDateTime?: Date;
  startedBy?: string;
  endedBy?: string;
  isMeetingLive: boolean;
}

export interface IStory {
  meetingId: string;
  isEstimationClosed: boolean;
  storyName: string;
}

export interface IEstimation {
  estimation: string;
  estimator: string | undefined;
  storyId: string;

}
