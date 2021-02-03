import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../configs/firebase';

firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.GoogleAuthProvider()

export function signInWithGoogle(){
    return firebase.auth().signInWithPopup(provider)
}

export function signOut(){
    return firebase.auth().signOut()
}