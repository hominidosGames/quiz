import quizJson from '../../quiz.json'
import { Helper } from '../Helper'
export class BoardQuestions {

    private component: any;
    public arrayAnswers: any;

    constructor($: any) {
        this.component = $;
        this.arrayAnswers = []
    }


    public onMounted() {
        this.sendAnswers()
    }


    public sendAnswers() {
        interface QuizData {
            questions: { [key: string]: any };
        }
        const arrayAnswersAndQuestions: QuizData = quizJson;
        let currentDay = Helper.getDay().toString();
        let jsonDay = arrayAnswersAndQuestions.questions[currentDay]
        console.log(jsonDay,'jsonday');
        
        this.component.answersQuiz = jsonDay;
    }

    public captureAnswers(responseUser: string) {
        this.arrayAnswers.push(responseUser)

    }

}
