// firebase-engine.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc, query, where, orderBy, arrayUnion, getDocs } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDYF0A8d5pyS-HpbqAADi-TTu_BeRoG3jw",
    authDomain: "rantiy-y-rantikuy.firebaseapp.com",
    projectId: "rantiy-y-rantikuy",
    storageBucket: "rantiy-y-rantikuy.firebasestorage.app",
    messagingSenderId: "49676513708",
    appId: "1:49676513708:web:943ad781c98cb7bac78a09"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { 
    db, collection, addDoc, onSnapshot, doc, 
    updateDoc, deleteDoc, query, where, orderBy, 
    arrayUnion, getDocs 
};    
