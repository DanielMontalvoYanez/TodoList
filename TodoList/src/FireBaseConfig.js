import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBHEvthvesS3SaYd620LKQ3K1CtYi7FrcE',
  authDomain: 'danielmontalvotodolist.firebaseapp.com',
  databaseURL: 'https://danielmontalvotodolist-default-rtdb.firebaseio.com',
  projectId: 'danielmontalvotodolist',
  storageBucket: 'danielmontalvotodolist.appspot.com',
  messagingSenderId: '118240754216',
  measurementId: 'G-0GFJ4DEYP4',
  appId: '1:118240754216:web:6e9a13ceb77f711ecd131d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
const db = getDatabase(app);

export default db;
