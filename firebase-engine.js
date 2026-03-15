// firebase-engine.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    onSnapshot, 
    query, 
    orderBy, 
    where, 
    serverTimestamp 
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

// Configuración Única
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

// --- EXPORTACIÓN DE FUNCIONES MOTORAS ---

// 1. Motor de Mensajería Grupal
export function escucharChatGrupal(provincia, callback) {
    const q = query(
        collection(db, "chats_v6"), 
        where("provincia", "==", provincia), 
        orderBy("time", "asc")
    );
    return onSnapshot(q, (snapshot) => {
        const mensajes = [];
        snapshot.forEach(doc => mensajes.push({ id: doc.id, ...doc.data() }));
        callback(mensajes);
    });
}

// 2. Motor de Envío de Mensajes
export async function enviarMensaje(user, texto, provincia) {
    if (!texto.trim()) return;
    await addDoc(collection(db, "chats_v6"), {
        uid: user.uid,
        name: user.name,
        text: texto,
        provincia: provincia,
        time: serverTimestamp()
    });
}

// 3. Motor de Vitrina (Productos)
export function escucharVitrina(provincia, callback) {
    const q = query(
        collection(db, "products_v6"), 
        where("provincia", "==", provincia), 
        orderBy("time", "desc")
    );
    return onSnapshot(q, (snapshot) => {
        const productos = [];
        snapshot.forEach(doc => productos.push({ id: doc.id, ...doc.data() }));
        callback(productos);
    });
}

// 4. Motor de Publicación
export async function publicarProducto(user, data, provincia) {
    await addDoc(collection(db, "products_v6"), {
        uid: user.uid,
        sellerName: user.name,
        title: data.title,
        price: data.price,
        img: data.img,
        provincia: provincia,
        time: serverTimestamp()
    });
}

export { db };
