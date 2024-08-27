import { defineComponent } from 'vue';
import routes from '@/router/index';
import { Helper } from '@/Helper';

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

        goToRegister() {
            routes.push({ path: '/register' });
        },

        goToQuestions() {
            routes.push({ path: '/tabs' });
        },

        async login() {
            let email = document.querySelector('#userEmail');
            let password = document.querySelector('#password');
            let userLogin = await Helper.login(email, password);
            console.log(userLogin,'userlogin');
            
            if(userLogin){
                this.goToQuestions();
            }

        }

    }
});