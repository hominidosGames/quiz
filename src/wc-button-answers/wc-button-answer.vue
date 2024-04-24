<template>
  <div class="p-3 flex justify-center flex-col items-center h-screen">
    <figure class="mb-20">
      <img src="../../public/logo-literatura.jpg" alt="" class="w-16 h-16 rounded-full">
    </figure>
    <div class="p-5 w-1/2 mb-10 border-3 border-yellow-400 rounded">
      <p class="text-center text-white font-mono text-sm">
        {{ questions }}
      </p>
    </div>

    <div class="p-3 flex justify-center flex-col items-center w-screen">
      <button v-for="(answer, index) in answers" :key="index" @click="handleClick($event)"
        class="p-3 bg-purple-900 text-white border border-black w-1/2 text-sm text-sm py-2.5 me-2 mb-8 rounded-lg font-mono">
        {{ answer }}
      </button>


    </div>
  </div>
</template>

<script src="./wc-button-answer"></script>