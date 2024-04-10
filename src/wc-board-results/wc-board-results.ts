
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { Helper } from '../Helper'
import mookJson from '../../quiz.json'
import { Results } from '../class/Results'

export default defineComponent({
    name: 'wc-board-results',

    data() {
        return {
            resultsTrue: [],
            totalResults: ""


        };
    },
    props: {},

    mounted() {
        this.menuResults = new Results(this)
        this.menuResults.sendResults()

    },
    methods: {


    }
});