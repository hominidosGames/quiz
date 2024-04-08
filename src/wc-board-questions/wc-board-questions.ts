
import wcButtonAnswer from '../wc-button-answers/wc-button-answer.vue'
import { defineComponent } from 'vue';
import { Game } from '../class/Game'



export default defineComponent({
    name: 'wc-board-questions',
    components: {
        'wc-button-answer': wcButtonAnswer
    },

    data() {
        return {
            answersQuiz: [],
            currentIndex: 0

        };
    },
    props: {},

    mounted() {
        this.startGame = new Game(this)
        this.startGame.searchQuestion()
    },
    methods: {

        captureAnswers(event) {
            this.startGame.captureAnswers()
         
        },

        nextQuestion() {
            console.log('entra en next');
            if (this.currentIndex < this.answersQuiz.length - 1) {
                this.currentIndex++;
            }
         
        },


    }
});