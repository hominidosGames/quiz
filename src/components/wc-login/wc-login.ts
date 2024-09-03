import { defineComponent } from 'vue';
import routes from '@/router/index';
import { User } from '@/class/User';

export default defineComponent({
    name: 'wc-login',

    data() {
        return {
            error: false,
            errorLogin: ''
        };
    },
    props: {},

    mounted() {

        this.loginUser = new User(this);
    },
    methods: {

        goToRegister() {
            routes.push({ path: '/register' });
        },

        goToQuestions() {
            routes.push({ path: '/category' });
        },

        async login() {
            let email = document.querySelector('#userEmail').value;
            let password = document.querySelector('#password').value;
            let responseLogin = await this.loginUser.login(email, password);
         
            if (responseLogin == true) {
                this.goToQuestions();
            }

        },


        async loginGoogle(){
            this.loginUser.loginGoogle();
        }

    }
});