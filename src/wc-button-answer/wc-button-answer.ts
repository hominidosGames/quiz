import { defineComponent } from 'vue';


export default defineComponent({
    name: 'wc-button-answer',
    data() {
      
    },
    props: {
        answer: String
    },

    created() {

    },
    mounted() {

    },
    methods: {
        captureAnswer() {
            console.log(this.answer);
        }

    }
});