<template>
    <div class="p-5 flex flex-col items-center bg-gradient-to-r bg-purple-800 h-screen">
        <div class="mt-5">
            <p class="text-white font-mono text-m mb-2 text-center font-medium text-xl">Respuestas del día</p>
            <table class="min-w-full divide-y divide-gray-200 mt-5 shadow-md">

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

        <div v-if="flag" class="mt-8 mb-10 flex flex-col items-center text-white font-medium">
            <p class="text-medium">Hoy has ganado:</p>
            <div class="flex flex-col justify-around w-15 items-center justify-center mt-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-12 h-12 mx-auto">
                    <title>star</title>
                    <path fill="green" stroke="white" stroke-width="2"
                        d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                </svg>
                <p class="p-2">{{ numTrue }}</p>
            </div>
            <div class="mt-10">
                <button @click="goToMenu"
                    class="w-23 h-23 bg-fuchsia-700 hover:bg-purple-900 rounded-full text-white shadow-lg font-mono text-xs border-2 border-white py-3 ">
                    Menú
                </button>
            </div>
        </div>

        <div class="m-20" v-if="flag == false">
            <button @click="verifyResponse"
                class="w-23 h-23 bg-fuchsia-700 rounded-full text-white shadow-md font-mono text-xs border-2 border border-black py-3 me-2">Puntuación</button>
        </div>

        <img class="base-main-menu fixed bottom-0" src="../../../assets/images/baseMainMenu.png" />


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
</style>