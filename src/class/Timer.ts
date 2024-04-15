import { Helper } from "@/Helper";


export class Timer {

    private totalTime: number;
    private actualTime: number;
    private component?: any;
    private isInit: boolean;

    constructor(totalTime: number, component?: any) {
        this.totalTime = totalTime;
        this.component = component;
        this.actualTime = this.totalTime;
        this.isInit = false;
    }

    public init() {
        this.isInit = true;
        this.countdown();
    }

    private countdown() {
        if (this.isInit && this.actualTime > 0) {
            setTimeout(() => {
                this.actualTime -= 0.1;
                Helper.dispatch("timer-update", {actualTime: this.actualTime});
                //this.$refs.timer.style.width = `${this.value}%`;
                if (this.actualTime <= 30) {
                    //this.$refs.timer.style.backgroundColor = "#D50000";
                    //this.$refs.timerMsg.classList.add("ani-timer-msg");
                } else {
                    //this.$refs.timer.style.backgroundColor = "#00C853";
                }

                this.countdown();
            }, 10);
        } else {
            this.isInit = false;
            Helper.dispatch("timer-finish", {});
        }
    }
}