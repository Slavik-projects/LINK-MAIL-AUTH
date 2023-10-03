import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";

const firebaseConfig = {
   apiKey: "AIzaSyCVf2UZHhS2X821_XMhBOQqKmIWf4cvcpM",
  authDomain: "newlogapp.firebaseapp.com",
  projectId: "newlogapp",
  storageBucket: "newlogapp.appspot.com",
  messagingSenderId: "1031667173773",
  appId: "1:1031667173773:web:1adac9cb478c7cc8fc95c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getAuth, sendSignInLinkToEmail } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

const actionCodeSettings = {
	url: 'http://localhost:5500/redirect.html',
	handleCodeInApp: true,
	dynamicLinkDomain:'mynewdomfire.page.link',
 };

 const inField = document.querySelector('.enter');
const btn = document.querySelector('.submit');


const loginHandle = (email) => {
const auth = getAuth();

sendSignInLinkToEmail(auth, email, actionCodeSettings)
.then(() => {
 // The link was successfully sent. Inform the user.
 // Save the email locally so you don't need to ask the user for it again
 // if they open the link on the same device.
 window.localStorage.setItem('emailForSignIn', email);
 // ...
})
.catch((error) => {
 const errorCode = error.code;
 const errorMessage = error.message;
 console.log(errorCode);
 console.log(errorMessage)
 console.log('ERROR 400')
});
}

btn.addEventListener("click", ()=>{
	var val = inField.value;///email
		console.log(val);
      
		loginHandle(val);
		
 });