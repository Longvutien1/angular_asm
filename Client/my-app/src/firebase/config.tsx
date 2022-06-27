// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/analytics';
import  'firebase/auth';
import 'firebase/firestore';
import { FacebookAuthProvider, fetchSignInMethodsForEmail, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signInWithPopup, signOut } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR4elGDvLgEYmMbosrClOmeKTDgxHPGAA",
  authDomain: "fir-auth-9969f.firebaseapp.com",
  projectId: "fir-auth-9969f",
  storageBucket: "fir-auth-9969f.appspot.com",
  messagingSenderId: "765124148508",
  appId: "1:765124148508:web:6ee0ab25d585423b0c4ed9",
  measurementId: "G-YJ4JC8W7JH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();


export const logOut= () => {
  const confirm = window.confirm("You want to Logout ?");

  const authCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
          console.log("auth is empty");
          
      }else{
        console.log("unauthorized");
        
      }
    
  })
  if (confirm) {
    signOut(auth);
    localStorage.removeItem("user");
  }
};

export const signInWithGoogle =  () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user);
        
    }else{
      console.log("unauthorized");
      
    }
  
})
   signInWithPopup(auth, googleProvider).then((result) => {
    // console.log(result);
    const id = result.user.uid;
    const name = result.user.displayName;
    const email = result.user.email;
    const image = result.user.photoURL;
    console.log(result.user);
    
      localStorage.setItem("user", JSON.stringify({id,name, email, image}));
   
    
  }).then(() => {

      location.href = "/"
  })
  .catch((error) => {
    console.log(error);
    
  });
}


export const signInWithFacebook =  () => {
  // logOut();
   onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user);
        
    }else{
      console.log("unauthorized");
      
    }
  
})

  signInWithPopup( auth, facebookProvider).then((result) => {
  
    // const id = result.user.uid;
    // const name = result.user.displayName;
    // const email = result.user.email;
    // const image = result.user.photoURL;
    console.log(result);

    //   localStorage.setItem("user", JSON.stringify({id,name, email, image}));
   
    
  })
  .catch((err) => {
    console.log(err);
  
})
}




