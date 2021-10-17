import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestoreCollectionGroup } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class DBService {

  usersCollection?: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(public db: AngularFirestore) {
    this.users = this.db.collection<User>("users").valueChanges();
  }

  async userExist(uid: string) {
    const userDoc = await this.db.collection('users').doc(uid).get();
    if (userDoc) {
      return true;
    }
    return false;
  }

  getUsers() {
    return this.users;
  }

  async saveUser(user: User) {
    const userDocRef = this.db.collection('users').ref.doc();
    user.userId = userDocRef.id;
    await userDocRef.set(user);
  }

  async deleteUser(userId: string) {
    await this.db.collection('users').doc(userId).delete();
  }
}