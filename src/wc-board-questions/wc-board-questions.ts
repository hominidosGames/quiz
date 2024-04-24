
import wcButtonAnswer from '../wc-button-answers/wc-button-answer.vue'
import { defineComponent } from 'vue';
import { Manager } from '../class/Manager'

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

        };
    },
    props: {},

    mounted() {

        this.startGame = new Manager(this)
        this.startGame.initGame()
        this.startGame.initTimer();

    },
    methods: {

        captureAnswers(event) {
            this.selectedAnswer = event.target.textContent
            this.counter++
            this.nextQuestion()
        },

        nextQuestion() {
            if (this.currentIndex < this.answersQuiz.length - 1) {
                this.currentIndex++;
            }
            this.counter = 0
            this.startGame.arrayAnswers(this.selectedAnswer)
        },


    }
});