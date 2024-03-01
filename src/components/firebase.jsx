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

export async function saveInFirebase(data) {
  await setDoc(doc(db, "mainList", "mainlist"), data);
  // console.log("🔥 Firebase Updated 🔥");
}

export function getData() {
  return function (dispatch) {
    onSnapshot(doc(db, "mainList", "mainlist"), (doc) => {
      dispatch(getStateFromFireBase(doc.data()));
    });
  };
}

// export function getData() {
// return async function (dispatch) {
// const docRef = doc(db, "mainList", "mainlist");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   dispatch(getStateFromFireBase(docSnap.data()));
// }
// };
// }

saveInFirebase(data);

// getting data
const querySnapshot = await getDocs(mainListRef);

querySnapshot.forEach((doc) => {
  // console.log(doc.id, "=>", doc.data());
});

// //single doc
