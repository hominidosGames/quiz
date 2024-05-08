
import { useRoute } from 'vue-router';
import mookJson from '../../quiz.json';
import { Helper } from '@/Helper';
import { Answer } from '@/types/Question';
import routes from '../router/index';

export class Results {

    private component: any;
    private arrayAnswersUser: any[];
    private arrayTrueOptions = Helper.trueAnswersDay()

    constructor($: any) {
        this.component = $;
        this.arrayAnswersUser = [];
    }






}