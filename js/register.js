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

import { getAuth, isSignInWithEmailLink, signInWithEmailLink, deleteUser } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

const actionCodeSettings = {
	url: 'http://localhost:5500/redirect.html',
	handleCodeInApp: true,
	dynamicLinkDomain:'mynewdomfire.page.link',
 };

 const auth = getAuth();
 const logOutBtn = document.querySelector('.logout');
 //isSignInWithEmailLink(auth, window.location.href);

 if (isSignInWithEmailLink(auth, window.location.href)) {
	
	let email = window.localStorage.getItem('emailForSignIn');
	if (!email) {
	 
	  email = window.prompt('Please provide your email for confirmation');
	}
	
	signInWithEmailLink(auth, email, window.location.href)
	  .then((result) => {
		 window.localStorage.removeItem('emailForSignIn');
		 console.log(result.user);
		 console.log('you are signed in');

       //const user = auth.currentUser;
       //console.log(user);
       logOutBtn.addEventListener('click', e => {
	    e.preventDefault();
	    deleteUser(result.user).then(()=>{
			console.log('user deleted');
			document.location.href='index.html';
		 }).catch((error) => {
			console.log('USER NOT DELETED!!!')
			console.log(error.message)
		 })
 })

	  })
	  .catch((error) => {
		 console.log(error.message);
		 console.log('you are not signed in');
		 window.prompt('Invalid email');
		 document.location.href='index.html';
	  });
 }


 