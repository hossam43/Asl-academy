import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

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
const auth = getAuth();
// collection ref
const colRef = collection(db, "users");

//  realtime collection data
onSnapshot(colRef, (snapshot) => {
  let users = [];
  snapshot.docs.forEach((doc) => {
    users.push({ ...doc.data(), id: doc.id });
  });
  console.log(users);
});

const registerForm = document.querySelector(".register");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fullName = registerForm.full_name.value;
    const email = registerForm.email.value;
    const password = registerForm.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // Add user data to Firestore
        return addDoc(collection(db, "users"), {
          uid: user.uid,
          email: user.email,
          fullName: fullName,
        });
      })
      .then(() => {
        registerForm.reset();
        // Redirect the user to index.html
        window.location.href = "index.html";
        console.log("User created successfully 🟢");
      })
      .catch((err) => console.log(err.message));
  });
}

const logOutBtn = document.querySelector(".logout");
if (logOutBtn) {
  logOutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        // Redirect the user to register.html after logout
        window.location.href = "register.html";
        console.log("User logged out");
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
}

// login.html
const loginForm = document.querySelector(".login");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        loginForm.reset();
        // Redirect the user to index.html
        window.location.href = "index.html";
        console.log("User logged in successfully 🟢");
      })
      .catch((err) => console.log(err.message));
  });
}
