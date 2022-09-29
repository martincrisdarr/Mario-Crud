import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApjVFwh44poGOJBXnhsexVMvvl4Zwfw08",
  authDomain: "mario-crud.firebaseapp.com",
  projectId: "mario-crud",
  storageBucket: "mario-crud.appspot.com",
  messagingSenderId: "271815527375",
  appId: "1:271815527375:web:e808b99155c05bb49de0ba"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)