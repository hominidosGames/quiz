import { Helper } from '@/Helper';
import routes from '../router/index';
import mookJson from '../../quiz.json';
import { Timer } from './Timer';
import { Result } from '@/types/Result';
import { Answer } from '@/types/Question';
import { SoundMaster } from './SoundMaster';

export class Manager {

    private board: any;
    private questionsDay: Answer[];
    private numActualQuestion: number;
    private timer: Timer;
    private results: Result[];
    private soundMaster: SoundMaster;
    private isFinishRound: boolean;

    constructor(board: any) {
        this.board = board;
        this.questionsDay = mookJson.questions[Helper.getDay()];
        this.numActualQuestion = 0;
        this.timer = new Timer(100);
        this.results = [];
        this.soundMaster = new SoundMaster();
        this.soundMaster.preload(['correct', 'error'])
        this.isFinishRound = false;
    }

    public initGame() {
        this.printQuestion();
        this.printAnswers();

        setTimeout(() => { this.showAnswers(); }, 500);
        setTimeout(() => { this.initTimer(); }, 4000);
    }

    public checkAnswer(indexRes: number, button) {
        let isCorrect = false;

        if (indexRes == this.questionsDay[this.numActualQuestion].correct)
            isCorrect = true;

        this.finishRound(isCorrect, indexRes, button);
    }

    public initTimer() {
        this.timer.init();
    }

    public stopTimer() {
        this.timer.stopTimer();
    }

    public resetTimer() {
        this.timer.resetTimer();
    }

    private finishRound(isCorrect: boolean, indexRes: number, button: any) {
        if (this.isFinishRound) return ;

        this.stopTimer();
        this.isFinishRound = true;
        this.results.push({
            question: this.questionsDay[this.numActualQuestion].question,
            response: this.questionsDay[this.numActualQuestion].answers[indexRes]
        });
        this.numActualQuestion++;

        isCorrect ? this.soundMaster.playDelay('correct', 1500) : this.soundMaster.playDelay('error', 1500);

        button && isCorrect ? button.classList.add("isCorrect") : button.classList.add("isInCorrect");

        // Animacion final y siguiente ronda
        setTimeout(() => {
            this.hiddenAnswer();
            button.classList.remove("isInCorrect");
            button.classList.remove("isCorrect");
            this.shakePanelQuestion();
            this.numActualQuestion < this.questionsDay.length ? this.nextRound() : this.goToFinalResult();
        }, 3500);
    }

    private goToFinalResult() {
        routes.push({
            path: '/tabs/tab2',
            query: {
                key: JSON.stringify(this.results),
                keyTwo: JSON.stringify(this.questionsDay.map(ele => {
                    return { question: ele.question, response: ele.answers[ele.correct] }
                }))
            }
        });
    }

    private nextRound() {
        this.isFinishRound = false;
        this.printQuestion();
        this.printAnswers();
        this.resetTimer();
        setTimeout(() => { this.showAnswers(); }, 500);
        setTimeout(() => { this.initTimer(); }, 4000);
    }

    private printQuestion() {
        this.board.question = this.questionsDay[this.numActualQuestion].question;
    }

    private printAnswers() {
        this.board.answers = this.questionsDay[this.numActualQuestion].answers;
    }

    private showAnswers() {
        document.querySelectorAll(".button-answer-inner").forEach(ele => ele.classList.add("button-flip"));
    }

    private hiddenAnswer() {
        document.querySelectorAll(".button-answer-inner").forEach(ele => ele.classList.remove("button-flip"));
    }

    private shakePanelQuestion() {
        document.getElementsByClassName("board-question")[0].classList.remove("animationShake");
        document.getElementsByClassName("board-question")[0].classList.add("animationShake");
    }
} 