import mookJson from '../../quiz/quiz.json';

export class Helper {
    static getDay() {
        const date = new Date();
        const dayYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (24 * 60 * 60 * 1000));
        console.log(dayYear, 'dia');

        return dayYear;
    }

    // static trueAnswersDay(): Array<{ question: string; response: string }> {
    //     let trueOptions: Array<{ question: string; response: string }> = [];
    //     let questionsDay: Array<any> = [];
    //     const dayIndex: number = this.getDay();
    //     questionsDay = mookJson.questions[dayIndex];

    //     questionsDay?.forEach((element) => {
    //         trueOptions.push({ question: element.question, response: element.answers[element.correct] })
    //     })

    //     return trueOptions
    // }

    static trueAnswersDay(): Array<{ question: string; response: string }> {
        const firebaseService = new Firebase();
        let trueOptions: Array<{ question: string; response: string }> = [];
        let questionsDay: Array<any> = [];
        let categoryDayFirebase: String;

        const dayIndex: number = this.triggerDay()
        // questionsDay = mookJson.questions[dayIndex];
  

  

        return trueOptions
    }


    static dispatch(evtName: string, obj: any) {
        document.dispatchEvent(new CustomEvent(evtName, { detail: obj }));
    }

    static listener(evtName: string, callback: Function) {
        document.addEventListener(evtName, (e) => { callback(e.detail) });
    }

    static triggerDay() {
        const date = new Date();
        const day = date.getDay();
        return day
    }


    static async questionsDayFirebase() {

        let categoryDayFirebase: any;
        const firebaseService = new Firebase();
        const dayForCategory = this.triggerDay()
        let questionsDay

        const categorys = [{ "numberCategory": 0, "category": 'Deportes' }, { "numberCategory": 1, "category": 'Geografía' }, { "numberCategory": 2, "category": 'Historia' },]

        categorys.forEach((element) => {
            if (element.numberCategory === dayForCategory) {
                categoryDayFirebase = element.category
            }
        })

        try {
            questionsDay = await firebaseService.getQuestionsByCategory(categoryDayFirebase);
            console.log(questionsDay, 'las preguntas de firebase');
        } catch (error) {
            console.error(error, "Error al recuperar las preguntas:");
        }

        return questionsDay


    }





}
