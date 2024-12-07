<template>
    <div class="bg-purple-800 ani-modal" v-if="showModal">
        <div class="modal-rules bg-purple-100">
            <h1 class="text-sm font-semibold text-center text-gray-1000 mt-10">Bienvenido un día más a</h1>

            <div class="flex justify-center">
                <img class="max-w-40"src="../../../assets/images/logoMainMenu.gif" />
            </div>

            <h1 class="text-sm font-semibold text-center text-gray-800 mt-5">Las reglas del concurso son las siguientes:</h1>

            <ul class="text-sm font-semibold text-gray-500 mt-5 pr-4 pl-4">
                <li><span class="font-bold">1º</span> Cada día te plantearemos 5 preguntas de un tema en concreto.</li> <br>
                <li><span class="font-bold">2º</span> ¡Solo podrás intentarlo una vez por día! Ten cuidado al responder (pero no te demores mucho que hay un temporizador tic-tac).</li> <br>
                <li><span class="font-bold">3º</span> Cada respuesta correcta son 5 puntos y una estrellita bien molona.</li> <br>
                <li><span class="font-bold">4º</span> Al final podrás compartir los resultados con tus amigos.</li> <br>
            </ul>

            <button @click="closeModal"  type="submit" class="w-40 h-10 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-6 mb-6">Entendido</button>
            <div class="flex justify-center ">
                <ion-checkbox v-model="checkedShow" label-placement="end">No volver a mostrar</ion-checkbox>
            </div>
        </div>
    </div>
</template>

<script src="./wc-modal-rules"></script>

<style>
.modal-rules {
    position: absolute;
    top: 20px;
    left: 20px;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    border-radius: 15px;
    opacity: 0.95;
    overflow-y: auto;
}

.ani-modal {
    animation-duration: .5s;
    animation-name: aniShow;
    animation-fill-mode: both;
}

@keyframes aniShow {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>