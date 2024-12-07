import { Helper } from '@/Helper';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, limit, getDocs } from 'firebase/firestore';

export class Firebase {

    private app: any;
    private database: any;
    private categoryDayFirebase: String;

    constructor() {
        const firebaseConfig = {
            apiKey: "AIzaSyDXpjtGwqSw9XBGKRCeN-3SoE_EwI3w7pk",
            authDomain: "quiz-47d96.firebaseapp.com",
            projectId: "quiz-47d96",
            storageBucket: "quiz-47d96.appspot.com",
            messagingSenderId: "275406640068",
            appId: "1:275406640068:web:ac0a03a1d13556e29f8a91",
            measurementId: "G-QBQ0Z2ZZ8E"
        };
        this.app = initializeApp(firebaseConfig);
        this.database = getFirestore(this.app);
        this.categoryDayFirebase = ""
    }

    async getQuestionsByCategory(category: any[]) {


        try {
            const queryFirebase = query(collection(this.database, 'preguntas'), where('category', '==', category), limit(5));

            const queryCallFirebase = await getDocs(queryFirebase);

            const questions: any[] = [];

            queryCallFirebase.forEach((doc) => {
                questions.push(doc.data());
            });

            return questions;
        } catch (error) {
            console.error("Error al recuperar las preguntas:", error);
            return [];
        }
    }




}

