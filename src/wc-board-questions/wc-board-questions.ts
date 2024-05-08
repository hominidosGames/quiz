
import wcButtonAnswer from '../wc-button-answers/wc-button-answer.vue'
import { defineComponent } from 'vue';
import { Manager } from '../class/Manager'
import { Helper } from '@/Helper';

export default defineComponent({
    name: 'wc-board-questions',
    components: {
        'wc-button-answer': wcButtonAnswer
    },


    data() {
        return {
            answersQuiz: [],
            currentIndex: 0,
            counter: 0,
            selectedAnswer: null,
            showQuestion: true,
            showAnswers: false,
            timeoutId: null,
            esCorrecta: false

        };
    },
    props: {
        respuestaCorrecta: String,
    },

    mounted() {

        this.startGame = new Manager(this)
        this.startGame.initGame()
        this.startTimeout();

    },
    methods: {

        captureAnswers(event) {
            this.selectedAnswer = event.target.textContent
            console.log(this.selectedAnswer, 'la que seleccion');

            this.counter++
            clearTimeout(this.timeoutId);
            this.daColores(this.selectedAnswer)
            this.nextQuestion();
        },

        nextQuestion() {
            if (this.currentIndex < this.answersQuiz.length - 1) {
                // this.currentIndex++;
                // this.showQuestion = true;
                // this.showAnswers = false;
                // this.startTimeout();
                // this.counter = 0

            }

            this.startGame.arrayAnswers(this.selectedAnswer)

        },

        startTimeout() {
            this.timeoutId = setTimeout(() => {
                this.showQuestion = false;
                this.showAnswers = true;
            }, 1000);
        },

        daColores(respuestaUsuario) {
            let arrayQuestions = Helper.trueAnswersDay();
        
            for (let i = 0; i < arrayQuestions.length; i++) {
                const pregunta = arrayQuestions[i];
        
             
                if (pregunta.response === respuestaUsuario) {
                    console.log('es correcta');
                    this.esCorrecta = true;
                    break;
                }
            }
        
            if (!this.esCorrecta) {
                console.log('es incorrecta');
            }
        }
        
    
    }
});