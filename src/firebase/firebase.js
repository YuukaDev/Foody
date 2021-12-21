import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJw0Rty_sIQZM3nKFAZ3YJGaHL2OVka7Y",
  authDomain: "typing-game-ab6f4.firebaseapp.com",
  projectId: "typing-game-ab6f4",
  storageBucket: "typing-game-ab6f4.appspot.com",
  messagingSenderId: "615255527491",
  appId: "1:615255527491:web:2b1732322bf407f86d84f6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
