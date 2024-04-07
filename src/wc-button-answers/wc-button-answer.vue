<template>
  <div class="p-3 flex justify-center flex-col items-center h-screen">
    <div class="p-3 mt-10 w-1/2">
      <p class="text-center text-red-400 font-mono">
        {{ questions }}
      </p>
    </div>

    <div class="p-3 flex justify-center flex-col items-center h-screen w-screen">
      <button v-for="(answer, index) in answers" :key="index" @click="handleClick(answer)"
        class="bg-indigo-300 text-black font-bold py-2 px-4 rounded mx-10 w-1/2 rounded-full mb-20 hover:bg-green-400">
        {{ answer }}
      </button>

      <button @click="nextQuestion" class="bg-red-400 text-color-black rounded w-1/3 py-2 px-4">Siguiente</button>

    </div>
  </div>
</template>

<script src="./wc-button-answer"></script>