import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class DALService<T> {

  constructor(private firestoreRef: AngularFirestore) {
  }

  getCollection(path: string): AngularFirestoreCollection<T> {
    return this.firestoreRef.collection<T>(path);
  }
}
