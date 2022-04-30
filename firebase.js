
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"



const firebaseConfig = {
    apiKey: "AIzaSyDOQuM9pMUGLVOTkPqo14jOuk20zcHJ7P0",
    authDomain: "twitter-clone-js.firebaseapp.com",
    projectId: "twitter-clone-js",
    storageBucket: "twitter-clone-js.appspot.com",
    messagingSenderId: "206475579997",
    appId: "1:206475579997:web:3e8714356ed42659afb3b4"
  };

  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore();
  const storage = getStorage();

  export default app;
  export {db, storage}