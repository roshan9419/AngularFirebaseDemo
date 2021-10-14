import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from '@firebase/app-compat';
import { DBService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth, public dbService: DBService) { }

  async googleLoginIn() {
    const response = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    return response.user;
    // await this.onLoginComplete(response.user);
  }

  async onLoginComplete(user: firebase.default.User | null) {
    if (!user) {
      throw new Error("Invalid response on Google Login");
    }
    if (await this.dbService.userExist(user.uid)) {
      // user.
    }
  }

  signOut() {}
}