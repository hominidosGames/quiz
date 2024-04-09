
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { Helper } from '../Helper'
import mookJson from '../../quiz.json'

export default defineComponent({
    name: 'wc-board-results',

    data() {
        return {
            numSuccesses: [],
            cosa: ""


        };
    },
    props: {},

    mounted() {
        const route = useRoute();
        this.numSuccesses = route.query.key
        console.log(route.query);

        this.cosa = mookJson.questions[Helper.getDay()]
        console.log(this.cosa,'la cosaaaa');
        
    },
    methods: {


    }
});