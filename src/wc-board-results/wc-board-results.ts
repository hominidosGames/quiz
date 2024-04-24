
import { defineComponent } from 'vue';
import routes from '../router/index';
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
        goToMenu(){
            //esto llevará a la pagina principal
            routes.push('/tabs/tab1');
        }

    }
});