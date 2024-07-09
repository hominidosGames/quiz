import { defineComponent } from 'vue';
import { Manager } from '@/class/Manager';
import routes from '@/router/index';

export default defineComponent({
    name: 'wc-categories',
    components: {
    
    },

    data() {
        return {
           category:""
        };
    },
    
    mounted() {
        this.menuResults = new Manager(this);
        this.menuResults.sendAndImageCategory();
        
    },
    methods: {
        goToGame(){
            setTimeout(() => {
               routes.push({ path: '/tabs/' });
            }, 1500);
        
        },

      
    }
});