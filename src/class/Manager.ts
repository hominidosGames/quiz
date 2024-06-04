import { Game } from '@/class/Game';
import { Helper } from '@/Helper';
import routes from '../router/index';
import { Firebase } from '../class/Firebase'

export class Manager {

    private component: any;
    private game: Game | null;
    private arrayAnswersUser: any[];

    constructor(component: any) {
        this.component = component
        this.game = null;
        this.arrayAnswersUser = [];

    }

    public initGame() {
        this.game = new Game(this);
        this.questionDayCategory();
        this.game.initTimer();
    }

    public questionDayCategory() {

        Helper.questionsDayFirebase()
        .then((questions) => {
            this.component.answersQuiz = questions
        })
        .catch((error) => {
            console.error(error);
        });

    }


    public arrayAnswers(answer: string) {
        this.arrayAnswersUser.push(answer)
        let arrayTrueOptions = Helper.trueAnswersDay()
        console.log(arrayTrueOptions,'true');
        

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



    public paintColorQuestions(answer: any) {
        const buttons = document.querySelectorAll('.button-answer');
        let foundCorrectAnswer = false;
        let questionDay = Helper.trueAnswersDay();

        questionDay.forEach((element) => {
            const trimmedResponse = element.response.trim();
            if (trimmedResponse === answer.target.textContent.trim()) {
                foundCorrectAnswer = true;
                buttons.forEach(button => {
                    if (button.textContent === answer.target.textContent.trim()) {
                        button.classList.remove('bg-yellow-400');
                        button.classList.add('bg-green-600');
                    }
                });
            }
        });

        if (!foundCorrectAnswer) {
            buttons.forEach((element) => {
                if (element.textContent === answer.target.textContent.trim()) {
                    element.classList.remove('bg-yellow-400');
                    element.classList.add('bg-red-500')
                }
            })
        }
    }





}