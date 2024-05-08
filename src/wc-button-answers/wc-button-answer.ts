import { Helper } from '@/Helper';
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'wc-button-answer',

    props: {
        questions: { type: String, },
        answers: { type: Object, },
        counter: { type: Number, default: 0 },
        showQuestion: { type: Boolean },
        showAnswers: { type: Boolean },
        esCorrecta: { type: Boolean },
    },

    data() {
        return {
            selectedAnswer: null,
        };
    },


    emits: ['answer-selected', 'next-question'],


    methods: {
        handleClick(answer, index) {
            this.selectedAnswer = index

            this.$emit('answer-selected', answer, index);
       

        },

        nextQuestion() {
            this.$emit('next-question', this.selectedAnswer);
        },


    }
});