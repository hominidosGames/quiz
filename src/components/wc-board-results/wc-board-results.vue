<template>
    <div class="p-4 flex flex-col items-center bg-gradient-to-r bg-purple-800 h-screen">
        <div class="mt-2">
            <p class="text-white font-mono text-m text-center font-base">Respuestas del día</p>
            <table class="min-w-full divide-y divide-gray-200 mt-3 shadow-md">
                <tbody class="divide-y divide-gray-200">
                    <tr v-for="(preguntaRespuesta, index) in totalResults" :key="index" class="hover:bg-gray-100">

                        <td class="px-3 py-2 text-start text-xs text-white font-medium bg-purple-900 font-mono border-solid border-2 border-fuchsia-700"
                            id="prueba">{{ preguntaRespuesta.question }}</td>
                        <td class="px-3 py-2 text-start text-xs text-white font-medium bg-purple-900 font-mono border-solid border-2 border-fuchsia-700"
                            id="prueba">{{ preguntaRespuesta.response }}</td>
                    </tr>
                </tbody>

            </table>

        </div>

        <div v-if="flag" class="mt-6 mb-10 flex flex-col items-center text-white">
            <div class="flex flex-col items-center p-3 rounded-xl">
                <p class="text-sm">Hoy has ganado:</p>
                <div class="flex flex-col justify-around w-15 items-center justify-center mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-10 h-10 mx-auto">
                        <title>star</title>
                        <path fill="green" stroke="white" stroke-width="2"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                    </svg>

                    <p class="p-2 text-sm">{{ numTrue }}</p>
                </div>
            </div>
            <div class="mt-20 flex flex-col items-center">

                <button @click="goToMenu"
                    class="button-main-menu p-3 text-white border border-black w-1/2 text-sm w-27 h-27 text-sm py-2.5 me-2 mb-8 rounded-full font-mono hover:bg-purple-600">Menú
                </button>
            </div>
        </div>

        <div class="m-20 flex flex-col items-center" v-if="flag == false">
            <button @click="verifyResponse"
                class="button-main-menu p-3 text-white border border-black w-1/2 text-sm w-27 h-27 text-sm py-2.5 me-2 mb-8 rounded-full font-mono hover:bg-purple-600">Puntuación
            </button>
        </div>


    </div>
</template>


<script src="./wc-board-results"></script>
<style>
/* .board-question {
    box-shadow:
        0 0 3px 1.5px #fff,
        0 0 5px 3px yellow,
        0 0 7px 4.5px yellow;
} */

.button-main-menu {
    z-index: 2;
    box-shadow:
        0 0 3px 1.5px #fff,
        0 0 5px 3px yellow,
        0 0 7px 4.5px yellow;
}
</style>