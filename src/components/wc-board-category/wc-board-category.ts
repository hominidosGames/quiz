
import { defineComponent } from 'vue';
import wcTimerBar from '../wc-timer-bar/wc-timer-bar.vue';
import { Manager } from '@/class/Manager';
import routes from '@/router/index';

export default defineComponent({
    name: 'wc-board-questions',
    components: {
        'wc-timer-bar': wcTimerBar
    },

    data() {
        return {
            category:""
        };
    },
    
    mounted() {
        this.menuResults = new Manager(this)
        this.menuResults.sendCategory()
    },
    methods: {
        goToGame(){
            setTimeout(() => {
               routes.push({ path: '/tabs/' });
            }, 1000);
        
        },
      
    }
});