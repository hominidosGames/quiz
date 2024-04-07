
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
    
    mounted() {
        this.boardQuestions = new BoardQuestions(this);
        this.boardQuestions.onMounted();

    },
    methods: {
     
        captureAnswers(event) {
            console.log(event);
            
        },

        nextQuestion(){
            console.log('entra en next');
            if (this.currentIndex < this.answersQuiz.length - 1) {
                this.currentIndex++;
              }
            
        }
      

    }
});