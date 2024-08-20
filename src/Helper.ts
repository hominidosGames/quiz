import mookJson from '../../quiz/quiz.json';
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, query, setDoc, collection, where, getDocs } from "firebase/firestore";

export class Helper {
    static cosa = null
    static getDay() {
        const date = new Date();
        const dayYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (24 * 60 * 60 * 1000));
        console.log(dayYear, 'dia');

        return dayYear;
    }

    static async trueAnswersDay(): Array<{ question: string; response: string }> {
        let trueOptions: Array<{ question: string; response: string }> = [];
        let questionsDay: Array<any> = [];
        const dayIndex: number = this.getDay();
        
        // questionsDay = mookJson.questions[dayIndex];
     
        questionsDay = await this.getQuizData()
        console.log(questionsDay,'questionday');
        
        questionsDay?.forEach((element) => {
            trueOptions.push({ question: element.question, response: element.answers[element.correct] })
        })
        console.log(trueOptions,'????');
        
        return trueOptions
    }


    static dispatch(evtName: string, obj: any) {
        document.dispatchEvent(new CustomEvent(evtName, { detail: obj }));
    }

    static listener(evtName: string, callback: Function) {
        document.addEventListener(evtName, (e) => { callback(e.detail) });
    }


    static conectFirebase() {

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
        return getFirestore(app);

    }


    static async getQuizData() {
        const db = this.conectFirebase();
        let id = this.getDay().toString();
        const docRef = doc(db, "quizzes", id);

        try {
            const docSnap = await getDoc(docRef);
            const data = docSnap.data();

            if (data) {
                this.cosa = data.QuestionArray
                return data.QuestionArray
            } else {
                return null
            }

        } catch (error) {
            console.error("Error obteniendo datos del quiz:", error);
            return null;
        }
    }



    static async addQuestionsDocument() {
        const db = Helper.conectFirebase();
        let id = this.getDay().toString();
        let idCortado = id.slice(0, 3);
        try {
            // Datos del documento con todas las preguntas
            const questionsData = {
                QuestionArray: [
                    {
                        "category": "Literatura",
                        "question": "¿Quién escribió 'Don Quijote de la Mancha'?",
                        "answers": [
                            "Miguel de Cervantes",
                            "Federico García Lorca",
                            "Gabriel García Márquez",
                            "Pablo Neruda"
                        ],
                        "correct": 0
                    },
                    {
                        "category": "Literatura",
                        "question": "¿Cuál es la obra más conocida de William Shakespeare?",
                        "answers": [
                            "Hamlet",
                            "Romeo y Julieta",
                            "Macbeth",
                            "Otelo"
                        ],
                        "correct": 0
                    },
                    {
                        "category": "Literatura",
                        "question": "¿Quién escribió 'Cien años de soledad'?",
                        "answers": [
                            "Gabriel García Márquez",
                            "Mario Vargas Llosa",
                            "Julio Cortázar",
                            "Isabel Allende"
                        ],
                        "correct": 0
                    },
                    {
                        "category": "Literatura",
                        "question": "¿Qué escritor es conocido por sus obras de ciencia ficción como '1984'?",
                        "answers": [
                            "Aldous Huxley",
                            "Isaac Asimov",
                            "George Orwell",
                            "Philip K. Dick"
                        ],
                        "correct": 2
                    },
                    {
                        "category": "Literatura",
                        "question": "¿Quién escribió 'El principito'?",
                        "answers": [
                            "Antoine de Saint-Exupéry",
                            "Jorge Luis Borges",
                            "Paulo Coelho",
                            "Franz Kafka"
                        ],
                        "correct": 0
                    }
                    // Añadir más preguntas aquí
                ]
            };

            // Referencia al documento
            const docRef = doc(db, "quizzes", '234');

            // Agregar el documento con todas las preguntas
            await setDoc(docRef, questionsData);
            console.log("Documento 'questions' agregado correctamente.");
        } catch (e) {
            console.error("Error agregando el documento: ", e);
        }
    }



}


