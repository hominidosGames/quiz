<template>
    <div class="p-5 flex flex-col items-center bg-gradient-to-r bg-purple-800 h-screen">
        <div class="mt-16">
            <p class="text-white font-mono text-m mb-2 text-center font-medium text-xl">Respuestas del día</p>
            <table class="min-w-full divide-y divide-gray-200 mt-10 shadow-md">

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

        <div v-if="flag" class="mt-20 mb-20 flex flex-col items-center text-white font-medium">
            <p class="text-xl">Hoy has ganado:</p>
            <div class="flex justify-around w-15">
                <p class="p-2">{{ numTrue }}</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>star-outline</title>
                    <path
                        d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
                </svg>
            </div>
            <div class="mt-20">
            <button @click="goToMenu"
                class="w-17 h-17 bg-fuchsia-700 hover:bg-purple-900 rounded-full text-white shadow-md font-mono text-xl border-2 border-white ">
                Menú
            </button>
        </div>
        </div>

        <div class="m-20" v-if="flag == false">
            <button @click="verifyResponse"
                class="py-2 px-4 bg-fuchsia-700 hover:bg-purple-900 text-white rounded-md shadow-md font-mono text-xl">Mi
                puntuación</button>
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