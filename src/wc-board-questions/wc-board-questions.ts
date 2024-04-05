
import wcButtonAnswer from '../wc-button-answers/wc-button-answer.vue'
import { defineComponent } from 'vue';
import { BoardQuestions } from './BoardQuestions'



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
    computed: {
        currentQuestion() {
          return this.answersQuiz[this.currentIndex];
        }
      },

    mounted() {
        this.boardQuestions = new BoardQuestions(this);
        this.boardQuestions.onMounted();

    },
    methods: {
        captureAnswers(event) {
            let responseUser = event.text;
            this.boardQuestions.captureAnswers(responseUser);

        },
        nextQuestion() {
            this.currentIndex++;
          }

    }
});