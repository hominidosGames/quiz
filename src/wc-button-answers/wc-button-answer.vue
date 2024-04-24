<template>
  <div class="p-3 flex justify-center flex-col items-center h-screen">
    <img src="../../public/logo-literatura.jpg" alt="" class="w-16 h-16 rounded-full">
    <div class="p-3 m-15 border-2 border-yellow-400 rounded-lg">
      <p class="text-center text-white font-mono text-mg">
        {{ questions }}
      </p>
    </div>

    <div class="p-2 flex justify-center flex-col items-center w-screen">
      <button v-for="(answer, index) in answers" :key="index" @click="handleClick($event)"
        class="p-3 bg-purple-900 text-white border border-white hover:bg-purple-800 w-1/2 text-sm py-2.5 me-2 mb-8 skew-x-6 rounded-lg font-mono">
        {{ answer }}
      </button>
    </div>
  </div>
</template>

<script src="./wc-button-answer"></script>