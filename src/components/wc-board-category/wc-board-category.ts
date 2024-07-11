
import { defineComponent } from 'vue';
import wcTimerBar from '../wc-timer-bar/wc-timer-bar.vue';
import wcCategories from '../wc-categorys/wc-categories.vue';

export default defineComponent({
    name: 'wc-board-questions',
    components: {
        'wc-timer-bar': wcTimerBar,
        'wc-categories': wcCategories,
    },

    data() {
        return {
            category:""
        };
    },
    
    mounted() {
     
    },
    methods: {

      
    }
});