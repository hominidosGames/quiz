<template>
    <div class="p-3 flex justify-center flex-col items-center h-screen items-center bg-indigo-800 overflow-scroll">
        <h1 class="text-green-400 font-mono text-4xl">FIN DE PARTIDA</h1>
        <h1 v-if="numSuccesses" class="text-red-400">Has acertado {{ numSuccesses.length }} pregunta/s</h1>
        <h1 v-for="(answer, index) in numSuccesses" :key="index" class="text-red-400">{{ answer }}</h1>
  
    </div>
</template>
<script src="./wc-board-results"></script>