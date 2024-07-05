<template>
    <div class="p-5 flex flex-col items-center bg-gradient-to-r bg-purple-800 h-screen">
        <div class="mt-15">
            <p class="text-white font-mono text-m mb-5 text-center">Respuestas del día</p>
            <table class="min-w-full divide-y divide-gray-200 mt-20 shadow-md">
   
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

        <div class="m-10">
            <button @click="verifyResponse"
                class="py-2 px-4 bg-purple-900 hover:bg-purple-800 text-white rounded-md shadow-md font-mono board-question">Comprobar
                respuestas</button>
        </div>

        <div class="m-40">
            <button @click="goToMenu"
                class="w-20 h-20 bg-purple-900 hover:bg-purple-700 text-white rounded-full shadow-md font-mono">
                Menu
            </button>
        </div>


        <img class="base-main-menu" src="../../../assets/images/baseMainMenu.png" />


    </div>
</template>


<script src="./wc-board-results"></script>
<style>


.board-question {
    box-shadow:
        0 0 3px 1.5px #fff,
        0 0 5px 3px yellow,
        0 0 7px 4.5px yellow;
}

</style>