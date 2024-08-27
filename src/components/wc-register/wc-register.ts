import { defineComponent } from 'vue';
import routes from '@/router/index';
import { Helper } from '@/Helper';

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

    },
    methods: {
        async registerUser() {
            let userEmail = document.querySelector('#userEmail').value;
            let userPassword = document.querySelector('#userPassword').value;
            let repeatPassword = document.querySelector('#userPasswordRepeat').value;
            if(userPassword != repeatPassword){
                this.error = true;
                this.errorRegister = 'La contraseña no coincide con la confirmada'
                return
            }

            if (userEmail && userPassword) {
                let userCredential = await Helper.register(userEmail, userPassword);

                if (userCredential.email) {
                    routes.push({ path: '/tabs' });
                } else {
                    this.error = true
                    this.errorRegister = userCredential
                }

            }
        }

    }
});