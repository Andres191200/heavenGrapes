import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';


export function firebaseConfig(){
	const config={
		apiKey: "AIzaSyB2yELl7GtZpThrxYKwTUVan9LXB-AuTtM",
  		authDomain: "heaven-grapes.firebaseapp.com",
  		projectId: "heaven-grapes",
  		storageBucket: "heaven-grapes.appspot.com",
  		messagingSenderId: "206800464765",
  		appId: "1:206800464765:web:d5552d5b4168b13babfa14",
  		measurementId: "G-RNSBFPXHJ3"
	}
	const app = initializeApp(config);
	const analytics = getAnalytics(app);
}

export function userRegistration(email,password){
	createUserWithEmailAndPassword(getAuth(),email,password)
	.then(userCredentials =>{
		let username = userCredentials.user;
	})
	.catch(err =>{
		document.querySelector(`.firebase-error`).innerText = err.code;
	})
}