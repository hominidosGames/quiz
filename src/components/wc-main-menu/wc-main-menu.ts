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
            this.$refs.foco1.classList.add("hiddenLight1");
            this.$refs.foco2.classList.add("hiddenLight2");
            setTimeout(() => {
               routes.push({ path: '/tabs/' });
            }, 1000);
        },

        goToOptions(){
            routes.push({ path: '/options' });
        }
    }
});