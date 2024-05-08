<template>
  <div class="p-2 flex justify-center flex-col items-center h-screen">

    <div
      class="fixed top-40 m-5 p-5 text-white border border-black sm:w-4/5 md:w-1/2 text-sm py-2.5 mb-15 rounded-lg font-mono bg-purple-400 shadow hover:shadow-md">
      <p class="text-center text-black font-mono text-sm">
        {{ questions }}
      </p>
    </div>

    <div class="flex justify-center flex-col items-center w-screen m-15 mt-40">
      <button v-for="(answer, index) in answers" :key="index" @click="handleClick($event)"
        :class="{ 'bg-green-500': esCorrecta, 'bg-purple-900 ': !esCorrecta }"
        class="min-w-50 m-5 p-10 text-white sm:w-4/5 text-sm py-2.5 mb-6 rounded-lg font-mono shadow hover:shadow-md">
        {{ answer }}
      </button>
    </div>

    <figure class="mb-5">
      <img src="../../public/logo-literatura.jpg" alt="" class="w-18 h-18 rounded-full">
    </figure>
  </div>
</template>

<script src="./wc-button-answer"></script>