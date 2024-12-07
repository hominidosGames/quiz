import wcTimerBar from '../wc-timer-bar/wc-timer-bar.vue';
import { defineComponent } from 'vue';
import { Manager } from '../../class/Manager';
import WcSpinner from '../wc-spinner/wc-spinner.vue';

export default defineComponent({
    name: 'wc-board-questions',
    components: {
        'wc-timer-bar': wcTimerBar,
        'wc-spinner': WcSpinner
    },

    data() {
        return {
            answersQuiz: [],
            currentIndex: 0,
            counter: 0,
            selectedAnswer: null,
            manager: null,
            question: "--",
            flagTrue: false,
            spinner: false
        };
    },

    mounted() {
        this.manager = new Manager(this);
    },
    methods: {
        handleClickButtonAnswer(evt, indexRes) {
            this.manager.checkAnswer(indexRes, evt.target);

        },
    }
});