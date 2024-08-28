import { defineComponent } from 'vue';
import { User } from '@/class/User';

export default defineComponent({
    name: 'wc-register',

    data() {
        return {
            error: false,
            errorRegister: ''
        };
    },
    props: {},

    mounted() {
        this.userFirebase = new User(this);
    },
    methods: {
        async registerUser() {
            let userEmail = document.querySelector('#userEmail').value;
            let userPassword = document.querySelector('#userPassword').value;
            let repeatPassword = document.querySelector('#userPasswordRepeat').value;

            this.userFirebase.registerUser(userEmail,userPassword,repeatPassword);
 
        }

    }
});