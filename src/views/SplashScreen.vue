<template>
    <ion-page class="splash-page fadeIn">
        <img class="splash" src="../../assets/images/splash.png" />
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage } from '@ionic/vue';
import routes from '../router/index';

setTimeout(() => {
    routes.push({ path: '/mainMenu' });
}, 3000);

</script>

<style scoped>
.splash-page {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: white;
}

.splash {
    width: 70%;
    margin-top: -100px;
}

.fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

@-webkit-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

@keyframes fadeIn {
    0% { opacity: 0; } 
    100% {  opacity: 1; }
}
</style>