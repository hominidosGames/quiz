<template>
  <div class="p-2 flex justify-center flex-col items-center h-screen bg-green-400">

    <div
      class="w-95vw h-auto min-h-15rem flex justify-center items-center fixed top-15 m-5 p-5 text-white border border-black sm:w-4/5 md:w-1/2 text-sm py-2.5 mb-10 rounded-lg font-mono bg-green-200 shadow-lg hover:shadow-lg">
      <p class="text-center text-black font-mono text-sm">
        {{ questions }}
      </p>
    </div>
    <div class="flex justify-center flex-col items-center w-screen m-5 mt-40">
    <button v-for="(answer, index) in answers" :key="index" @click="handleClick($event)" :disabled="disabled" 
            class="button-answer w-95vw mt-5 p-10 bg-yellow-400 text-black text-sm py-2.5 mb-6 rounded-lg font-mono shadow hover:shadow-md border border-red
                   transition duration-100 hover:border-red-700 hover:border-5 ">
      {{ answer }}
    </button>
  </div>
  <!-- hover:text-white hover:border-yellow-500 focus:outline-none focus:bg-yellow-500 focus:text-white -->
    <figure class="fixed bottom-0 mb-5 mt-2 left-1/2 transform -translate-x-1/2">
      <img src="../../public/logo-literatura.jpg" alt="" class="w-16 h-16 rounded-full">
    </figure>

  </div>
</template>

<script src="./wc-button-answer"></script>