import { Avtar } from './custom.types';

export interface IUser {
  uid?: string;
  name?: string;
  email?: string;
  role?: Avtar;
  photoURL?: string;
  displayName?: string;
}
