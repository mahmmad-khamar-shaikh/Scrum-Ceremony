import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

import { IUser } from '../types/user.interface';
import { Observable, of } from 'rxjs'
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { GoogleAuthProvider } from 'firebase/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {

    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user && typeof user === "object"
          && "uid" in user) {
          return this.afs.doc<IUser>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );

  }

  async googleSignin(): Promise<firebase.auth.UserCredential> {
    const provider = new GoogleAuthProvider()
    return await this.afAuth.signInWithPopup(provider);

    // return this.updateUserData(credentials.user);
  }

  async githubSignin(): Promise<firebase.auth.UserCredential> {
    const provider = new firebase.auth.GithubAuthProvider();
    return await this.afAuth.signInWithPopup(provider);

    // return this.updateUserData(credentials.user);
  }

  async microsoftSignin(): Promise<firebase.auth.UserCredential> {
    const provider = new firebase.auth.OAuthProvider('microsoft.com');
    return await this.afAuth.signInWithPopup(provider);

    // return this.updateUserData(credentials.user);
  }

  async signOut(): Promise<boolean> {
    await this.afAuth.signOut();
    return this.router.navigate(['/home/signin']);
  }

  updateUserData(user: any): Promise<void> {
    // TODO

    const userRef: AngularFirestoreDocument<IUser> = this.afs.doc(`users/${user.id}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
    return userRef.set(data, { merge: true });
  }

}
