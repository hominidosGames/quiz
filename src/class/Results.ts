import { Helper } from '@/Helper';

export class Results {

    private component: any;

    constructor($: any) {
        this.component = $;
    }

    public async getDatesFirebase() {
        let arrayTrueOptions = Helper.trueAnswersDay();
        return arrayTrueOptions
    }


    public async verifyResponse(arrayResponsesUser: Array<any>) {
        let trueArray = await this.getDatesFirebase();
        let arrayVerified: Array<any> = [];
        arrayResponsesUser.forEach((element: any) => {
            trueArray.forEach((trueResponse) => {
                if (element.response == trueResponse.response) {
                    arrayVerified.push(trueResponse.response);
                }
                this.paintTrueResponses(arrayVerified)
                this.component.flag = true;
                this.component.numTrue = arrayVerified.length * 25
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