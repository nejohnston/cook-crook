import * as firebase from 'firebase';
import 'firebase/auth';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDAQ1j73LRRLGb2N_M-WSaDmcnvBB_eD7U',
  authDomain: 'cook-crook.firebaseapp.com',
  databaseURL: 'https://cook-crook.firebaseio.com',
  projectId: 'cook-crook',
  storageBucket: 'cook-crook.appspot.com',
  messagingSenderId: '765329682786',
};

const firebaseApp = firebase.initializeApp(config);
const firebaseAuth = firebaseApp.auth();

export { firebaseApp, firebaseAuth };
