import { defineComponent } from 'vue';
import { IonCheckbox } from '@ionic/vue';
import { LocalStorage } from '@/class/LocalStore';


export default defineComponent({
    name: 'wc-modal-rules',
    components: { IonCheckbox },
    data() {
        return {
            showModal: true,
            checkedShow: false
        }
    },
    async mounted() {
        await this.loadData();
        
    },
    methods: {
        async closeModal() {
            this.showModal = false;
            if (this.checkedShow) 
                LocalStorage.save("showModalRules", "false")
        },

        async loadData() {
            const data = await LocalStorage.load("showModalRules");

           // if (!data || data == "true") this.showModal = true;
        }
    }
});