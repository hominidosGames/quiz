import mookJson from '../../quiz.json';
import { Answer } from '@/types/Question';
import { Helper } from '@/Helper';
import routes from '../router/index';
import { Timer } from './Timer';



export class Game {

    private component: any;
    private questionsDay?: Answer[];

    private arrayAnswersUser: any[];
    private numSuccesses: any;
    private timer: Timer;

    constructor($: any) {
        this.component = $;
        this.arrayAnswersUser = [];
        this.numSuccesses = null;
        this.timer = new Timer(100);

        //Helper.listener("timer-finish", this.nextQuestion());
    }

    public searchQuestion() {
        this.questionsDay = mookJson.questions[Helper.getDay()];
        return this.questionsDay
    }


    public arrayAnswers(answer: string) {
        this.arrayAnswersUser.push(answer)
        let arrayTrueOptions = Helper.trueAnswersDay()
        if (this.arrayAnswersUser.length == 5) {
            let arrayCompared = this.compareArrays(this.arrayAnswersUser, arrayTrueOptions);
            routes.push({
                path: '/tabs/tab2',
                query: {
                    key: arrayCompared,
                }
            });
        }
    }


    public compareArrays(arrayUser: Array<string>, arrayTrueOptions: Array<string>): Array<string> {
        let arraySuccesses: Array<string> = []
        arrayUser.map((element) => {
            arrayTrueOptions.map((elemenTrue) => {
                if (element == elemenTrue) {
                    arraySuccesses.push(elemenTrue)
                }
            })
        })
        return arraySuccesses
    }

    public initTimer() {
        this.timer.init();
    }


}