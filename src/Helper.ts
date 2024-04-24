import mookJson from '../../quiz/quiz.json'
export class Helper {
    static getDay() {
        const date = new Date();
        const dayYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (24 * 60 * 60 * 1000));

        return dayYear;
    }

    static trueAnswersDay(): Array<string> {
        let trueOptions: Array<string> = []
        let questionsDay: Array<string> = []
        questionsDay = mookJson.questions[Helper.getDay()];
        questionsDay?.forEach((element) => {
            trueOptions.push(element.answers[element.correct])
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
