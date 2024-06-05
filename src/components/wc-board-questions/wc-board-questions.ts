import wcButtonAnswer from '../wc-button-answers/wc-button-answer.vue';
import wcTimerBar from '../wc-timer-bar/wc-timer-bar.vue';
import { defineComponent } from 'vue';
import { Manager } from '../../class/Manager';

export default defineComponent({
    name: 'wc-board-questions',
    components: {
        'wc-timer-bar': wcTimerBar
    },

    data() {
        return {
            answersQuiz: [],
            currentIndex: 0,
            counter: 0,
            selectedAnswer: null,
            manager: null,
            question: "--",
        };
    },
    
    mounted() {
        this.manager = new Manager(this);
        this.manager.initGame();
    },
    methods: {
        handleClickButtonAnswer(evt, indexRes) {
            this.manager.checkAnswer(indexRes, evt.target);
        },
    }
});