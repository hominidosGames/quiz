import { Helper } from "@/Helper";


export class Timer {

    private totalTime: number;
    private actualTime: number;
    private isInit: boolean;

    constructor(totalTime: number) {
        this.totalTime = totalTime;
        this.actualTime = this.totalTime;
        this.isInit = false;
    }

    public init() {
        this.isInit = true;
        this.countdown();
    }

    public stopTimer() {
        this.isInit = false;
    }

    public resetTimer() {
        this.actualTime = this.totalTime;
        Helper.dispatch("timer-reset", {});
    }

    private countdown() {
        if (this.isInit && this.actualTime > 0) {
            setTimeout(() => {
                this.actualTime -= 0.1;
                Helper.dispatch("timer-update", {actualTime: this.actualTime});
                this.countdown();
            }, 10);
        } else {
            this.isInit = false;
            Helper.dispatch("timer-finish", {});
        }
    }
    
}