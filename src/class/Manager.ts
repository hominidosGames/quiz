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

        this.game = new Game();
       this.component.answersQuiz = this.game.searchQuestion();
        this.game.initTimer();
    }


    public arrayAnswers(answer: string) {
        this.arrayAnswersUser.push(answer)
        let arrayTrueOptions = Helper.trueAnswersDay()
        if (this.arrayAnswersUser.length === 5) {
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