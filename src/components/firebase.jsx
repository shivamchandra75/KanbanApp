import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { data } from "./data";
import { getStateFromFireBase } from "./redux/MainListSlice";

const firebaseConfig = {
  apiKey: "AIzaSyAVeEr5Nsl3moZ9HKwkH_yABn8xjK7I9wQ",
  authDomain: "kanri-manage-board.firebaseapp.com",
  projectId: "kanri-manage-board",
  storageBucket: "kanri-manage-board.appspot.com",
  messagingSenderId: "13101156986",
  appId: "1:13101156986:web:9ce1945ffc26d4821749c3",
};

//Initialize firebase
initializeApp(firebaseConfig);

// Get Database
const db = getFirestore();

// collection reference
const mainListRef = collection(db, "mainList");

// Set Document
export async function setInitialState(data) {
  //check if 'mainlist' document already exists if yes we don't set data if no then we do set data
  const docRef = doc(db, "mainList", "mainlist");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) return;

  await setDoc(doc(db, "mainList", "mainlist"), data);
  console.log("🔥 Firebase State Initialised 🔥");
}

setInitialState(data);

export async function setFirebaseState(state) {
  try {
    console.log("popup");
    await setDoc(doc(db, "mainList", "mainlist"), state);
    const savedPopup = document.getElementById("save-popup");
    savedPopup.classList.toggle("show-popup");
    // savedPopup.style.opacity = "1";
  } catch (err) {
    console.error("💥", err.message);
  }
}

export function getData() {
  return function (dispatch) {
    onSnapshot(doc(db, "mainList", "mainlist"), (doc) => {
      dispatch(getStateFromFireBase(doc.data()));
    });
  };
}
