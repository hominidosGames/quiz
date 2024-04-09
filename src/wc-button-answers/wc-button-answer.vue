<template>
  <div class="p-3 flex justify-center flex-col items-center h-screen">
    <div class="p-3 w-1/2 mb-10">
      <p class="text-center text-red-400 font-mono text-2xl">
        {{ questions }}
      </p>
    </div>

    <div class="p-3 flex justify-center flex-col items-center  w-screen">
      <button v-for="(answer, index) in answers" :key="index" @click="handleClick($event)"
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 w-1/2 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-20 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        {{ answer }}
      </button>

      <button @click="nextQuestion" v-if="counter > 0"
        class="bg-red-400 text-color-black rounded w-1/3 py-2 px-4">Siguiente</button>
      <button @click="nextQuestion" v-else
        class="bg-gray-300 text-gray-600 font-semibold py-2 px-4 rounded inline-flex items-center cursor-not-allowed opacity-50 pointer-events-none">Siguiente</button>
    </div>
  </div>
</template>

<script src="./wc-button-answer"></script>