import { defineComponent } from 'vue';
import routes from '@/router/index';
import wcLogin from '../wc-login/wc-login.vue';
import { Helper } from '@/Helper';
import { LocalStorage } from '@/class/LocalStore';


export default defineComponent({
    name: 'wc-main-menu',
    components: {
        'wc-login': wcLogin,
    },
    data() {
        return {};
    },
    props: {},

    async mounted() {
        await await LocalStorage.init();
    },
    methods: {
        goToGame() {
          
            console.log('el dia es:', Helper.getDay());

            this.$refs.foco1.classList.add("hiddenLight1");
            this.$refs.foco2.classList.add("hiddenLight2");
            // setTimeout(() => {
            //    routes.push({ path: '/tabs/' });
            // }, 1000);
            setTimeout(() => {
                routes.push({ path: '/login' });
            }, 1000);
        },

        goToOptions() {
            routes.push({ path: '/options' });
        },
    }
});