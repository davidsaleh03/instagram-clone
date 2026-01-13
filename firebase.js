
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5Y4ZNdWy1gytcHvgd4Vh7cRaaHU2yaR8",
  authDomain: "instagram-clone-2f3ba.firebaseapp.com",
  projectId: "instagram-clone-2f3ba",
  storageBucket: "instagram-clone-2f3ba.firebasestorage.app",
  messagingSenderId: "367674603856",
  appId: "1:367674603856:web:cb35e77ecc330731db9455"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username, name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = res.user;

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name,
      username,
      email,
      authProvider: "local",
      createdAt: new Date(),
    });

  } catch (error) {
    console.log(error);
  }
};

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
    }
}

const logout = () => {
    signOut(auth);
}

export {auth, db, login, signup, logout}