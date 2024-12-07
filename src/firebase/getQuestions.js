import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, limit, getDocs } from 'firebase/firestore';

// Configura tu aplicación de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDXpjtGwqSw9XBGKRCeN-3SoE_EwI3w7pk",
    authDomain: "quiz-47d96.firebaseapp.com",
    projectId: "quiz-47d96",
    storageBucket: "quiz-47d96.appspot.com",
    messagingSenderId: "275406640068",
    appId: "1:275406640068:web:ac0a03a1d13556e29f8a91",
    measurementId: "G-QBQ0Z2ZZ8E"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para recuperar 5 preguntas relacionadas con una categoría específica
export async function getQuestionsByCategory(category) {
    try {
        // Crear una consulta para buscar las preguntas de la categoría especificada
        const q = query(collection(db, 'preguntas'), where('category', '==', category), limit(5));
        
        // Ejecutar la consulta
        const querySnapshot = await getDocs(q);
        
        // Inicializar un array para almacenar las preguntas
        const questions = [];
        
        // Iterar sobre los documentos devueltos por la consulta
        querySnapshot.forEach((doc) => {
            // Agregar los datos de la pregunta al array
            questions.push(doc.data());
        });
        
        // Devolver el array de preguntas
        return questions;
    } catch (error) {
        console.error("Error al recuperar las preguntas:", error);
        // En caso de error, devolver un array vacío o manejar el error de otra manera
        return [];
    }
}

