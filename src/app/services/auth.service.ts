
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


import 'rxjs-compat';
import { Observable } from 'rxjs-compat';
import { Router } from '@angular/router';

@Injectable()

export class AuthService {
    provider: firebase.auth.GoogleAuthProvider;
    private user: Observable<firebase.User>;
    private userDetails: firebase.User = null;

    // constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    //     this.user = _firebaseAuth.authState;

    //     this.user.subscribe(
    //         (user) => {
    //         if (user) {
    //             this.userDetails = user;
    //             console.log(this.userDetails);
    //         } else {
    //             this.userDetails = null;
    //         }
    //         }
    //     );
    // }

    constructor(
        private afAuth: AngularFireAuth, 
        private router: Router,
        private _firebaseAuth: AngularFireAuth
    ) { 
        this.provider = new firebase.auth.GoogleAuthProvider();
        this.user = _firebaseAuth.authState;

        this.user.subscribe(
            (user) => {
            if (user) {
                this.userDetails = user;
                // console.log(this.userDetails);
            } else {
                this.userDetails = null;
            }
            }
        );

     }

    // loginGoogle() {
    //     return this.afAuth.auth.signInWithPopup( this.provider );
    //     const provider = new firebase.auth.GoogleAuthProvider();
    //     return this.oAuthLogin(provider);
    //     this.afAuth.auth.signInWithPopup(provider).then((result) => {
    //         console.log(result);
    //         return provider;
    //     })
    // }

    // getAuth() {
    //     return this.afAuth.authState.map(auth => auth);
    // }

    // logout() {
    //     return this.afAuth.auth.signOut();
    // }

    signInRegular(email, password) {
        const credential = firebase.auth.EmailAuthProvider.credential( email, password );
        return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
     }

     isLoggedIn() {
        if (this.userDetails == null ) {
            return false;
        } else {
            return true;
        }
    }

    logout() {
        this._firebaseAuth.auth.signOut()
        .then((res) => this.router.navigate(['/']));
    }

}