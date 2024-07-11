import { Helper } from '@/Helper';

export class Results {

    private component: any;
    private arrayTrueOptions = Helper.trueAnswersDay();
    // private flag: boolean = false;
    // private numTrue: Array<any> = [];


    constructor($: any) {
        this.component = $;
    }


    public verifyResponse(arrayResponsesUser: Array<any>) {
        let arrayVerificado: Array<any> = [];
        arrayResponsesUser.forEach((element: any) => {
            this.arrayTrueOptions.forEach((trueResponse) => {
                if (element.response == trueResponse.response) {
                    arrayVerificado.push(trueResponse.response)
                }
                this.paintTrueResponses(arrayVerificado)
                this.component.flag = true;
                this.component.numTrue = arrayVerificado.length * 25
            })

        })

    }

    public paintTrueResponses(arrayVerified: Array<any>) {
        let prueba = document.querySelectorAll('#prueba');

        prueba.forEach((nodo) => {
            arrayVerified.forEach((elementTrue: any) => {
                if (nodo.innerHTML == elementTrue) {
                    nodo.style.backgroundColor = 'green';
                }
            })
        })
    }





}