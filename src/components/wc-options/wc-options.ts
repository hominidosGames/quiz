import { defineComponent } from 'vue';
import routes from '@/router/index';

export default defineComponent({
    name: 'wc-options',
    components: {},
    data() {
        return {};
    },
    props: {},

    mounted() {
    },
    methods: {
        goToMainMenu(){
            routes.push({ path: '/mainMenu' });
        },

        goToCredits(){
            routes.push({ path: '/credits' });
        }
    }
});