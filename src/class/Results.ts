import { Helper } from '@/Helper';


export class Results {

    private component: any;
    private arrayAnswersUser: any[];
    private arrayTrueOptions = Helper.trueAnswersDay()

    constructor($: any) {
        this.component = $;
        this.arrayAnswersUser = [];

    }


    public verifyResponse(arrayResponsesUser: Array<any>) {
        let arrayVerificado: Array<any> = [];
        arrayResponsesUser.forEach((element: any) => {
            this.arrayTrueOptions.forEach((trueResponse) => {
                if (element.response == trueResponse.response) {
                    arrayVerificado.push(trueResponse.response)
                }
                this.paintTrueResponses(arrayVerificado)
             

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