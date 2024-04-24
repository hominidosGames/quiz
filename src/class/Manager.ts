import { Game } from '@/class/Game';
import mookJson from '../../quiz.json';
import { Helper } from '@/Helper';
import routes from '../router/index';
import { Answer } from '@/types/Question';

export class Manager {

    private component: any;
    private game: Game | null;
    private questionsDay?: Answer[];
    private arrayAnswersUser: any[];

    constructor($: any) {
        this.component = $
        this.game = null;
        this.arrayAnswersUser = [];
    }

    public initGame() {
        this.game = new Game(this);
        this.component.answersQuiz = this.game.searchQuestion();
    }


    public sendAnswersAndQuestiontrue() {
        let trueAndQuestion: Array<any> = []
        this.questionsDay = mookJson.questions[Helper.getDay()];
        this.questionsDay?.forEach((element) => {
            trueAndQuestion.push({ answerTrue: element.answers[element.correct], question: element.question })
        });
        return trueAndQuestion
    }


    // public trueAnswersDay(): Array<string> {
    //     let trueOptions: Array<string> = []
    //     this.questionsDay = mookJson.questions[Helper.getDay()];
    //     this.questionsDay?.forEach((element) => {
    //         trueOptions.push(element.answers[element.correct])
    //     });
    //     return trueOptions
    // }


    public arrayAnswers(answer: string) {
        this.arrayAnswersUser.push(answer)
        // let arrayTrueOptions = this.trueAnswersDay()
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





}