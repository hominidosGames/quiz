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
        let dayIndex = this.getDay();
        questionsDay = mookJson.questions[dayIndex];
        
        questionsDay?.forEach((element) => {
            trueOptions.push(element.answers[element.correct])
        })

        console.log(trueOptions,'las correctas');
        
        return trueOptions
    }


    static dispatch(evtName: string, obj: any) {
        document.dispatchEvent(new CustomEvent(evtName, { detail: obj }));
    }

    static listener(evtName: string, callback: Function) {
        document.addEventListener(evtName, (e) => { callback(e.detail) });
    }

}
