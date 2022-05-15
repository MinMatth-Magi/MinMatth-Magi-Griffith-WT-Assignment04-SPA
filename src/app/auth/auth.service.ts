import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}

  user = null;
  private userControl = new BehaviorSubject<any>(this.user);
  public userObservable = this.userControl.asObservable();

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(value.email, value.password)
        .then(
          (res) => {
            //this.userControl.next(res.user);
            console.log(res.user);
            resolve(res);
          },
          (err) => reject(err)
        );
    });
  }

  doLoggingIn(value) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(value.email, value.password)
        .then(
          (res) => {
            this.userControl.next(res.user);
            resolve(res);
          },
          (err) => reject(err)
        );
    });
  }

  logOut() {
    return new Promise<any>((resolve, reject) => {
      firebase
        .auth()
        .signOut()
        .then(
          (res) => {
            resolve(res);
          },
          (err) => reject(err)
        );
    });
  }
}
