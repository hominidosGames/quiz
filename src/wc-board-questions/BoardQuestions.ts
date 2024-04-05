import quizJson from '../../quiz.json'
export class BoardQuestions {

    public static instancia: null | BoardQuestions = null;
    private component: any;
    public arrayAnswers:any;

    constructor($: any) {
        BoardQuestions.instancia = this;
        this.component = $;
        this.arrayAnswers = []
    }


    public onMounted() {
        this.sendAnswers()

    }


    public sendAnswers() {
        const arrayAnswersAndQuestions = quizJson.preguntas;
        this.component.answersQuiz = arrayAnswersAndQuestions;
    }

    public captureAnswers(responseUser: string){
        console.log('entra en la clase y llega', responseUser);
        this.arrayAnswers.push(responseUser)
        console.log(this.arrayAnswers,'el array');
        
    }

}
