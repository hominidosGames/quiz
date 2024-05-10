<template>
  <div class="p-2 flex justify-center flex-col items-center h-screen bg-green-400">

    <div
    class="w-85 h-auto min-h-10rem flex justify-center items-center fixed top-15 m-5 p-5 text-white border border-black sm:w-4/5 md:w-1/2 text-sm py-2.5 mb-10 rounded-lg font-mono bg-green-200 shadow-lg hover:shadow-lg">
      <p class="text-center text-black font-mono text-sm">
        {{ questions }}
      </p>
    </div>

    <div class="flex justify-center flex-col items-center w-screen m-5 mt-60">
      <button v-for="(answer, index) in answers" :key="index" @click="handleClick($event)"
        class="button-answer w-95vw mt-5 p-10 bg-yellow-400 text-black text-sm py-2.5 mb-6 rounded-lg font-mono shadow hover:shadow-md">
        {{ answer }}
      </button>
    </div>

    <figure class="mb-5 mt-2">
      <img src="../../public/logo-literatura.jpg" alt="" class="w-16 h-16 rounded-full">
    </figure>
  </div>
</template>

<script src="./wc-button-answer"></script>