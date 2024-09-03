import { defineComponent } from 'vue';
import { IonCheckbox } from '@ionic/vue';
import { LocalStorage } from '@/class/LocalStore';


export default defineComponent({
    name: 'wc-modal-rules',
    components: { IonCheckbox },
    data() {
        return {
            showModal: false
        }
    },
    async mounted() {
        await this.loadData();
        
    },
    methods: {
        async closeModal() {
            this.showModal = false;
            LocalStorage.save("hiddenModalRules", "false")
        },

        async loadData() {
            const data = await LocalStorage.load("hiddenModalRules");

            if (!data) this.showModal = true;
        }
    }
});