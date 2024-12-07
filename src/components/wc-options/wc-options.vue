<template>
    <div class="options">
        <div class="options-list">
            <label>Mutear <input type="checkbox" id="cbox1" value="" checked/></label>
            <label>Efectos de sonido <input type="checkbox" id="cbox1" value="" checked/></label>

            - Volumen general -
            <input type="range" min="1" max="100" value="100" class="slider" id="myRange">
        </div>

        <div class="options-buttons">
            <button @click="goToCredits()"
                class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 w-1/2  rounded-lg text-sm  py-2.5 mb-5 ">Créditos</button>
            <button @click="goToMainMenu()"
                class="text-white bg-red-700 hover:bg-green-800 focus:ring-4 w-1/3  rounded-lg text-sm  py-2.5 mb-5">Volver</button>
        </div>
    </div>

</template>

<script src="./wc-options"></script>

<style scoped>
.options {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: white;
}

.options-list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 800px;
}

.options-buttons{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}
</style>