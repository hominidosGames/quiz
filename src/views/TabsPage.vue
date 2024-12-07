<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
  
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
</script>
