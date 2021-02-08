import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../configs/firebase';

firebase.initializeApp(firebaseConfig);

var providerGoogle = new firebase.auth.GoogleAuthProvider()
var providerGithub = new firebase.auth.GithubAuthProvider()

export function signInWithGoogle(){
    return firebase.auth().signInWithPopup(providerGoogle)
}

export function signInWithGithub(){
    return firebase.auth().signInWithPopup(providerGithub)
}

export function signOut(){
    return firebase.auth().signOut()
}