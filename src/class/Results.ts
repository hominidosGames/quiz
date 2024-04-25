
import { useRoute } from 'vue-router';
import mookJson from '../../quiz.json';
import { Helper } from '@/Helper';
import { Answer } from '@/types/Question';

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
            this.component.totalResults = this.sendAnswersAndQuestiontrue();
        }
    }


    public sendResultsTrue(arrayTotal: Array<any>, arrayUser: Array<string>) {
        let answersTrue: Array<any> = [];
    
        arrayTotal.forEach((question) => {
            if (question.answers[question.correct] === arrayUser[arrayTotal.indexOf(question)]) {
                answersTrue.push({
                    questionUser: question.question,
                    answerUser: arrayUser[arrayTotal.indexOf(question)]
                });
            }
        });
    
        return answersTrue;
    }
    

    public sendAnswersAndQuestiontrue() {
        let trueAndQuestion: Array<any> = []
        this.questionsDay = mookJson.questions[Helper.getDay()];
        this.questionsDay?.forEach((element) => {
            trueAndQuestion.push({ answerTrue: element.answers[element.correct], question: element.question })
        });
        return trueAndQuestion
    }


}