import mookJson from '../../quiz/quiz.json';
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, query, setDoc, collection, where, getDocs } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export class Helper {
    static cosa = null
    static getDay() {
        const date = new Date();
        const dayYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (24 * 60 * 60 * 1000));

        return dayYear;
    }

    static async trueAnswersDay(): Array<{ question: string; response: string }> {
        let trueOptions: Array<{ question: string; response: string }> = [];
        let questionsDay: Array<any> = [];
        questionsDay = await this.getQuizData()
        questionsDay?.forEach((element) => {
            trueOptions.push({ question: element.question, response: element.answers[element.correct] })
        })
        console.log(trueOptions, '????');

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

    //traer preguntas del día.
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


    //añadir preguntas a la base de datos
    static async addQuestionsDocument() {
        const db = Helper.conectFirebase();
        let id = this.getDay().toString();
        let idCortado = id.slice(0, 3);
        let jsonQuestionsDay = mookJson.questions
        try {

            const questionsData = {
                QuestionArray: jsonQuestionsDay
            };

            // Referencia al documento
            const docRef = doc(db, "quizzes", '247');

            // Agregar el documento con todas las preguntas
            await setDoc(docRef, questionsData);
            console.log("Documento 'questiosns' agregado correctamente.");
        } catch (e) {
            console.error("Error agregando el documento: ", e);
        }
    }




    //Registro de usuarios
    static async register(email: any, password: any) {
        let typeError;
        try {
            Helper.conectFirebase();
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            return userCredential.user

        } catch (error) {

            const errorMessage = error.code;
            console.log(errorMessage, 'el error');
            switch (errorMessage) {
                case 'auth/email-already-in-use':
                    typeError = 'El usuario/email ya está registrado.'
                    break;
                case 'auth/weak-password':
                    typeError = 'La contraseña es demasiado débil.'
                    break;
                case 'auth/invalid-email':
                    typeError = 'El formato del correo electrónico no es válido.'
                    break;
            }


            return typeError

        }

    }



    //logueo de usuarios
    static async login(email: any, password: any) {
        let responseLogin;

        try {
            Helper.conectFirebase();
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, email, password)
            responseLogin = {
                error: false,
                message: 'Logueado correctamente'
            }

            return responseLogin

        } catch (error) {
            responseLogin = {
                error: true,
                message: 'Los datos introducidos no son correctos'
            }

            return responseLogin
        }

    }


    static async loginGoogle() {
        try {
            Helper.conectFirebase();
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            console.log(provider, 'el provider');
        } catch (error) {
            console.log(error, 'el error en login con google');

        }


    }


}

