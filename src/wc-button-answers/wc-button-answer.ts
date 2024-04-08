import { defineComponent } from 'vue';


export default defineComponent({
    name: 'wc-button-answer',

    props: {
        questions: { type: String, },
        answers: { type: Object, },
    },
    

    emits: ['answer-selected', 'next-question'],
    

    methods: {
        handleClick(answer) {
            this.$emit('answer-selected', answer);
        },

        nextQuestion() {
            this.$emit('next-question');
        },


    }
});