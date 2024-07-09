import { defineComponent } from 'vue';
import routes from '@/router/index';

export default defineComponent({
    name: 'wc-spinner',
    components: {},
    data() {
        return {};
    },
    props: {},

    mounted() {

        document.addEventListener("DOMContentLoaded", function () {
            const spinner = document.getElementById('spinner');
            setTimeout(() => {
                if(spinner){
                    spinner.style.display = 'none';
                }
          
            }, 3000); 
        });
    },
    methods: {

    }
});