
import { defineComponent } from 'vue';
import routes from '../../router/index';
import { Results } from '../../class/Results'

export default defineComponent({
    name: 'wc-board-results',

    data() {
        return {
            resultsTrue: [],
            totalResults: []


        };
    },
    props: {},

    mounted() {
        this.menuResults = new Results(this)
        const key = this.$route.query.key;
        const keyTwo = this.$route.query.keyTwo;
        this.resultsTrue = JSON.parse(key)
        this.totalResults = JSON.parse(keyTwo)
    },
    methods: {
        goToMenu() {
            //esto llevará a la pagina principal
            routes.push('/mainMenu');
        },
        shareResults() {
            // Compartir resultados utilizando la API de Intents de Android o la API de Web Share
            const textToShare = `Mis resultados: ${this.resultsTrue.length} acertadas de 5`;
            const shareUrl = 'https://as.com'; // Reemplaza esto con la URL que deseas compartir
            if (navigator.share) {
                // API de Web Share
                navigator.share({
                    title: 'Mis resultados',
                    text: textToShare,
                    url: shareUrl,
                }).then(() => {
                    console.log('Contenido compartido con éxito');
                }).catch((error) => {
                    console.error('Error al compartir:', error);
                });
            } else {
                // Fallback para dispositivos que no admiten la API de Web Share
                const shareMessage = `${textToShare} - ${shareUrl}`;
                const shareIntent = `intent: # Intent.ACTION_SEND\n text: ${shareMessage}\n`;
                window.location.href = shareIntent;
            }
        }
    }
});