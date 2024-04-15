<template>
   <ion-page>
      <wcTimerBar></wcTimerBar>
      <wcBoardQuestions />
   </ion-page>

</template>

<script setup lang="ts">


import wcBoardQuestions from '@/wc-board-questions/wc-board-questions.vue';
import wcTimerBar from '@/components/wc-timer-bar/wc-timer-bar.vue';
import { IonPage } from '@ionic/vue';

</script>
