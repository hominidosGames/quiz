import { defineComponent } from 'vue';
import routes from '@/router/index';

export default defineComponent({
    name: 'wc-credits',
    components: {},
    data() {
        return {};
    },
    props: {},

    mounted() {
    },
    methods: {
        goToOptions(){
            routes.push({ path: '/options' });
        },
    }
});