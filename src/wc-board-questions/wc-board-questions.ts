import wcButtonQuestion from '@/wc-button-question/wc-button-question.vue';
import wcButtonAnswer from '@/wc-button-answer/wc-button-answer.vue';
import { defineComponent } from 'vue';
import { BoardQuestions } from './BoardQuestions'



export default defineComponent({
    name: 'wc-board-questions',
    components: {
        'wc-button-question': wcButtonQuestion,
        'wc-button-answer': wcButtonAnswer
    },

    data() {
        return {
            answers: [

                { text: 'Respuesta 1' },
                { text: 'Respuesta 2' },
                { text: 'Respuesta 3' },
                { text: 'Respuesta 4' }
            ]

        };
    },
    props: {},

    created() {

    },
    mounted() {
        this.boardQuestions = new BoardQuestions(this)

    },
    methods: {


    }
});