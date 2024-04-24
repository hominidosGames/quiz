import mookJson from '../../quiz.json';
import { Answer } from '@/types/Question';
import { Helper } from '@/Helper';



export class Game {

    private component: any;
    private questionsDay?: Answer[];

    constructor($: any) {
        this.component = $;
      
    }

    public searchQuestion() {
        this.questionsDay = mookJson.questions[Helper.getDay()];
        return this.questionsDay
    }


}