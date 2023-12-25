import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ICeremony } from '../types/shared.interface';
import { DALService } from './dal.service';

@Injectable({
  providedIn: 'root'
})
export class CeremonyService {
  constructor(private dalServiceRef: DALService<ICeremony>) {
  }

  get getCeremonyCollection(): AngularFirestoreCollection<ICeremony> {
    const ceremonyPath = 'Ceremonies';
    return this.dalServiceRef.getCollection(ceremonyPath);
  }

}
