
import { Helper } from '@/Helper';
import routes from '../router/index';

export class User {


    public component: any;

    constructor(component: any) {

        this.component = component

    }


    public async registerUser(email: any, password: any, repeatPassword: any) {

        if (password != repeatPassword) {
            console.log('entra falso');

            this.component.error = true;
            this.component.errorRegister = 'La contraseña no coincide con la confirmada';
            return
        }

        if (email && password) {
            console.log('entra bien');
            this.component.error = false;
            let userCredential = await Helper.register(email, password);

            if (userCredential && userCredential.email) {
                this.component.error = false;
                routes.push({ path: '/tabs' });
            } else {
                this.component.error = true,
                    this.component.errorRegister = userCredential;
            }

        }
    }


    public async login(email: any, password: any) {

        let loginFirebase = await Helper.login(email, password);

        if (loginFirebase.error === false) {
            this.component.error = false;
            return true
        } else {
            this.component.error = true;
            this.component.errorLogin = loginFirebase.message
        }

    }


    public async loginGoogle() {
        await Helper.loginGoogle()
    }
}