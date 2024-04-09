import { defineComponent } from 'vue';


export default defineComponent({
    name: 'wc-button-answer',

    props: {
        questions: { type: String, },
        answers: { type: Object, },
        counter: { type: Number, default: 0 }
    },

    data() {
        return {
            selectedAnswer: null // Inicialmente no hay respuesta seleccionada
        };
    },


    emits: ['answer-selected', 'next-question'],


    methods: {
        handleClick(answer) {
            this.$emit('answer-selected', answer);
        },

        nextQuestion() {
            this.$emit('next-question',this.selectedAnswer);
        },


    }
});