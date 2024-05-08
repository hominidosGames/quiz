import { Game } from '@/class/Game';
import { Helper } from '@/Helper';
import routes from '../router/index';
import { Answer } from '@/types/Question';

export class Manager {

    private component: any;
    private game: Game | null;
    private arrayAnswersUser: any[];

    constructor($: any) {
        this.component = $
        this.game = null;
        this.arrayAnswersUser = [];
    }

    public initGame() {
        this.game = new Game(this);
        this.component.answersQuiz = this.game.searchQuestion();
        this.game.initTimer();
    }


    public arrayAnswers(answer: string) {
        this.arrayAnswersUser.push(answer)
        let arrayTrueOptions = Helper.trueAnswersDay()

        if (this.arrayAnswersUser.length === 5) {
            let arrayCompared = this.compareArrays(this.arrayAnswersUser, arrayTrueOptions);
            const arrayComparedString = JSON.stringify(arrayCompared);
            const arrayTrueOptionsString = JSON.stringify(arrayTrueOptions);
            routes.push({
                path: '/tabs/tab2',
                query: {
                    key: arrayComparedString,
                    keyTwo: arrayTrueOptionsString
                }
            });
        }
    }


    public compareArrays(arrayUser: Array<string>, arrayTrueOptions: Array<any>): Array<string> {
        let arraySuccesses: Array<string> = []
        arrayUser.forEach((element) => {
            arrayTrueOptions.forEach((elemenTrue) => {
                if (element == elemenTrue.response) {
                    arraySuccesses.push(elemenTrue)
                }
            })
        })
        return arraySuccesses
    }



    public paintColor(answer: any) {
        const buttons = document.querySelectorAll('.button-answer');
        let foundCorrectAnswer = false;
        let questionDay = Helper.trueAnswersDay();
        questionDay.forEach((element) => {
            const trimmedResponse = element.response.trim();
            if (trimmedResponse === answer.target.textContent.trim()) {
                foundCorrectAnswer = true;
                buttons.forEach(button => {
                    if (button.textContent === answer.target.textContent.trim()) {
                        button.classList.add('bg-green-200');
                        setTimeout(() => {
                            button.classList.remove('bg-green-200');
                        }, 1000);
                    } else {
                        button.classList.add('bg-red-400');
                        setTimeout(() => {
                            button.classList.remove('bg-red-400');
                        }, 1000);
                    }
                });
            }
        });
    
        if (!foundCorrectAnswer) {
            buttons.forEach(button => {
                button.classList.add('bg-red-400');
                setTimeout(() => {
                    button.classList.remove('bg-red-400');
                }, 1000);
            });
        }
    }
    
    
    

}