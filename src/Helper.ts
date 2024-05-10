import mookJson from '../../quiz/quiz.json'

export class Helper {
    static getDay() {
        const date = new Date();
        const dayYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (24 * 60 * 60 * 1000));
        console.log(dayYear,'dia');
        
        return dayYear;
    }

    static trueAnswersDay(): Array<{ question: string; response: string }> {
        let trueOptions: Array<{ question: string; response: string }> = [];
        let questionsDay: Array<any> = [];
        const dayIndex: number = this.getDay();
        questionsDay = mookJson.questions[dayIndex];

        questionsDay?.forEach((element) => {
            trueOptions.push({ question: element.question, response: element.answers[element.correct] })
        })

        return trueOptions
    }


    static dispatch(evtName: string, obj: any) {
        document.dispatchEvent(new CustomEvent(evtName, { detail: obj }));
    }

    static listener(evtName: string, callback: Function) {
        document.addEventListener(evtName, (e) => { callback(e.detail) });
    }

}
