import { initializeApp } from 'firebase/app';
import { getAuth, getFirestore } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "IzaSyAaNAbkcx57H_nxmrWGU6njzNX_uM_meeU",
  authDomain: "Mox-App.firebaseapp.com",
  projectId: "mox-app-f1440",
  storageBucket: "mox-app.appspot.com",
  messagingSenderId: "634780035410",
  appId: "mox-app-f1440"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);