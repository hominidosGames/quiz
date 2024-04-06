import mookJson from '../../quiz.json';
import {Answer }from '@/types/Question';
import { Helper } from '@/Helper';

export class Game {

    private questionsDay?: Answer[];

    constructor() {}

    public searchQuestion() {
       this.questionsDay = mookJson.questions[Helper.getDay()];
       console.log(this.questionsDay);
    }
}