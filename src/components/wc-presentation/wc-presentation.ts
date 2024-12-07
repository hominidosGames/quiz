import { defineComponent } from 'vue';
import routes from '@/router/index';

export default defineComponent({
    name: 'wc-presentation',
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
        }
    }
});