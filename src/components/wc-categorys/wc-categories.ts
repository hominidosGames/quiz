import { defineComponent } from 'vue';
import { Manager } from '@/class/Manager';
import routes from '@/router/index';
import { Helper } from '@/Helper';

export default defineComponent({
    name: 'wc-categories',
    components: {

    },

    data() {
        return {
            category: "",
        };
    },

    mounted() {
        this.menuResults = new Manager(this);
        this.$refs.redCard.addEventListener("click", this.sendImageCategory());
    },

    methods: {

        flipCard(){
            setTimeout(() => {
                routes.push({ path: '/tabs/' });
            }, 3000);
        },
     
        sendImageCategory() {
            this.menuResults.sendImageCategory();
        },

    }
});