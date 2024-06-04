import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, setDoc } from 'firebase/firestore';

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

// Obtén una referencia a la base de datos Firestore
const db = getFirestore(app);

// Define el objeto con la clave "134" y tu array de preguntas como valor
const questionData = {
    category: "Cine",
    question: "¿Quién interpretó a James Bond en la película 'Skyfall'?",
    answers: ["Daniel Craig", "Pierce Brosnan", "Sean Connery", "Roger Moore"],
    correct: 0
};



const questionsArray = [
    {
        "category": "Geografía",
        "question": "¿Cuál es el río más largo del mundo?",
        "answers": ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
        "correct": 1
    },
    {
        "category": "Geografía",
        "question": "¿En qué país se encuentra el monte Everest?",
        "answers": ["India", "China", "Tíbet","Nepal"],
        "correct": 3
    },
    {
        "category": "Geografía",
        "question": "¿Cuál es el país más grande del mundo por área terrestre?",
        "answers": ["Rusia", "Canadá", "Estados Unidos", "China"],
        "correct": 0
    },
    {
        "category": "Geografía",
        "question": "¿Cuál es el punto más bajo de la Tierra?",
        "answers": ["Fosa de las Marianas","Mar Muerto", "Valle de la Muerte", "Lago Assal"],
        "correct": 1
    },
    {
        "category": "Geografía",
        "question": "¿Cuál es el lago más grande de América del Norte?",
        "answers": [ "Lago Hurón","Lago Superior", "Lago Míchigan", "Lago Titicaca"],
        "correct": 1
    }
]








const docRef = collection(db, 'preguntas');

questionsArray.forEach((questionData) => {
    addDoc(docRef, questionData)
        .then((doc) => {
            console.log('Documento agregado correctamente con ID:', doc.id);
        })
        .catch((error) => {
            console.error('Error al agregar documento:', error);
        });
});
