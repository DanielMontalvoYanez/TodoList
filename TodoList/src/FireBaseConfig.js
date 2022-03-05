// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBHEvthvesS3SaYd620LKQ3K1CtYi7FrcE',
  authDomain: 'danielmontalvotodolist.firebaseapp.com',
  projectId: 'danielmontalvotodolist',
  storageBucket: 'danielmontalvotodolist.appspot.com',
  messagingSenderId: '118240754216',
  appId: '1:118240754216:web:6e9a13ceb77f711ecd131d',
  measurementId: 'G-0GFJ4DEYP4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
