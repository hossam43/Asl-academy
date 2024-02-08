import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCneS2eJYBRYy-lD4rTKw4VKqtWGoVnfto",
  authDomain: "asl-academy.firebaseapp.com",
  projectId: "asl-academy",
  storageBucket: "asl-academy.appspot.com",
  messagingSenderId: "814578248642",
  appId: "1:814578248642:web:debc7e17bfb4fd5a60045b",
  measurementId: "G-X7077R1T8G",
};

// init firebase app
initializeApp(firebaseConfig);

//  init services
const db = getFirestore();

// collection ref
const colRef = collection(db, "users");

//  get collection data
getDocs(colRef)
  .then((snapshot) => {
    let users = [];
    snapshot.docs.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id });
    });
    console.log(users);
  })
  .catch((err) => {
    console.log(err.message);
  });

const loginForm = document.querySelector(".login");
loginForm.addEventListener("click", () => {});
