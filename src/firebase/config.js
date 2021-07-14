import firebase from 'firebase/app';
import 'firebase/analytics';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDMuUV1nDCNuB7JKfGM1vGrxVQqQpbd7Ac",
    authDomain: "helloitsamith.firebaseapp.com",
    projectId: "helloitsamith",
    storageBucket: "helloitsamith.appspot.com",
    messagingSenderId: "231014416276",
    appId: "1:231014416276:web:6b46a5e702b50a372b9981",
    measurementId: "G-XBXRDTGE0Y"
  };

firebase.initializeApp(firebaseConfig)
firebase.analytics()
console.log('Analytics active');