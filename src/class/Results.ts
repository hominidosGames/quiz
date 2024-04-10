
import { useRoute } from 'vue-router';
import mookJson from '../../quiz.json';
import { Helper } from '@/Helper';
import { Game } from '../class/Game'

export class Results {

    private component: any;
    private questionsDay?: Answer[];

    constructor($: any) {
        this.component = $;

    }


    public sendResults() {
        const route = useRoute();
        const asnwersUser: any = route.query.key;
        this.questionsDay = mookJson.questions[Helper.getDay()];
        if (this.questionsDay && asnwersUser) {
            this.component.resultsTrue = this.sendResultsTrue(this.questionsDay, asnwersUser);
            this.component.totalResults = this.sendTotalQuestions();
        }
    }


    public sendResultsTrue(arrayTotal: Array<any>, arrayUser: Array<any>) {
        let answersTrue: Array<any> = [];
        arrayTotal.map((property) => {
            property.answers.forEach((element) => {
                arrayUser.forEach((answer) => {
                    if (element === answer) {
                        answersTrue.push({ questionUser: property.question, answerUser: element });
                    }
                })
            })
        })
        return answersTrue
    }


    public sendTotalQuestions() {
        this.game = new Game();
        let totalTrueQuestionDay = this.game.sendAnswersAndQuestiontrue();
        return totalTrueQuestionDay
    }



}