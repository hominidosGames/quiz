<template>
  <div class=" p-4 flex justify-center flex-col items-center ">
    <button class="bg-indigo-100 text-black font-bold py-2 px-4 rounded mx-10 w-100 rounded-full mb-10">
      {{ questions }}
    </button>
  </div>
  <div class=" p-4 flex justify-center flex-col items-center ">
    <button class="bg-indigo-300 text-black font-bold py-2 px-4 rounded mx-10 w-100 rounded-full mb-20"
      v-for="(answer, index) in answers" :key="index">
      {{ answer.respuesta }}

    </button>
  </div>
</template>

<script src="./wc-button-answer"></script>