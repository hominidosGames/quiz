import mookJson from '../../quiz.json';
import { Answer } from '@/types/Question';
import { Helper } from '@/Helper';
import routes from '../router/index';


export class Game {

    private component: any;
    private questionsDay?: Answer[];
    private arrayAnswersUser: any[];
    private numSuccesses: any;

    constructor($: any) {
        this.component = $;
        this.arrayAnswersUser = [];
        this.numSuccesses = null;
    }

    public searchQuestion() {
        this.questionsDay = mookJson.questions[Helper.getDay()];
        if (this.component) {
            this.component.answersQuiz = this.questionsDay
        }
    }

    public sendSuccesses() {
        this.component.numSuccesses;
    }


    public trueAnswersDay(): Array<string> {
        let trueOptions: Array<string> = []
        this.questionsDay = mookJson.questions[Helper.getDay()];
        this.questionsDay?.forEach((element) => {
            trueOptions.push(element.answers[element.correct])
        });
        return trueOptions
    }


    public arrayAnswers(answer: string) {
        this.arrayAnswersUser.push(answer)
        let arrayTrueOptions = this.trueAnswersDay()
        if (this.arrayAnswersUser.length == 5) {
            let arrayCompared = this.compareArrays(this.arrayAnswersUser, arrayTrueOptions)
            this.component.numSuccesses = arrayCompared.length
            // routes.push('/tabs/tab2')
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

}