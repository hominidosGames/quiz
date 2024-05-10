import wcButtonAnswer from '../wc-button-answers/wc-button-answer.vue';
import { defineComponent } from 'vue';
import { Manager } from '../../class/Manager';
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
            disabled: false
        };
    },
    props: {
        respuestaCorrecta: String,
    },

    mounted() {

        this.startGame = new Manager(this);
        this.startGame.initGame();
        this.startTimeout();
        
    },
    methods: {

        captureAnswers(event) {
            if(event){
                this.disabled  = true
            }
            this.selectedAnswer = event.target.textContent
            this.paintColorQuestions(event);
            setTimeout(() => {
                this.nextQuestion(event);
            }, 1000);
            this.counter++;
        },

        nextQuestion(event) {
            if (this.currentIndex < this.answersQuiz.length - 1) {
                this.disabled  = false
                this.currentIndex++;
                this.showQuestion = true;
                this.showAnswers = false;
                this.startTimeout();
                this.counter = 0;
            }
            this.startGame.arrayAnswers(this.selectedAnswer);

        },

        startTimeout() {
            setTimeout(() => {
                this.showQuestion = false;
                this.showAnswers = true;
            }, 3000);
        },

        paintColorQuestions(answer){
            this.startGame.paintColorQuestions(answer);
        }


    }
});