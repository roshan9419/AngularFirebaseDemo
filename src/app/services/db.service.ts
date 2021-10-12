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

  constructor(public afs: AngularFirestore) {
    this.users = this.afs.collection<User>("users").valueChanges();
  }

  getUsers() {
    return this.users;
  }
}