
import { defineComponent } from 'vue';
import routes from '../../router/index';
import { Results } from '../../class/Results'

export default defineComponent({
    name: 'wc-board-results',

    data() {
        return {
            resultsTrue: [],
            totalResults: [],
            localKey: [],
            flag:false,
            numTrue:[]

        };
    },
    props: {},

    mounted() {
        this.menuResults = new Results(this)
        const key = this.$route.query.key;
        const keyTwo = this.$route.query.keyTwo;
        this.resultsTrue = JSON.parse(key)
        this.totalResults = JSON.parse(keyTwo)
    },
    methods: {
        goToMenu() {
            //esto llevará a la pagina principal
            routes.push('/mainMenu');
        }

    }
});