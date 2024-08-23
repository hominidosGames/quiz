import { defineComponent } from 'vue';
import routes from '@/router/index';

export default defineComponent({
    name: 'wc-login',

    data() {
        return {
          
        };
    },
    props: {},

    mounted() {
 
    },
    methods: {
   
        goToRegister(){
            routes.push({ path: '/register' });
        }

    }
});