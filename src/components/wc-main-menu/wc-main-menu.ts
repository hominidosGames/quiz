import { defineComponent } from 'vue';
import routes from '@/router/index';

export default defineComponent({
    name: 'wc-main-menu',
    components: {},
    data() {
        return {};
    },
    props: {},

    mounted() {
    },
    methods: {
        goToGame(){
            routes.push({ path: '/tabs/' });
        },

        goToOptions(){
            routes.push({ path: '/options' });
        }
    }
});