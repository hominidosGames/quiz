<template>
    <div class="credits">
        <div>
            <h1>- Créditos - </h1>
            <p>Sergio Ovejero Pascual</p>
            <p>José Moreno Casero</p>
            <br>
            <p>Un maniaco a cazar a otro.</p>
        </div>

        <button @click="goToOptions()"
            class="focus:outline-none text-white bg-red-700 hover:bg-green-800 focus:ring-4 w-1/3 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 font-mono">Volver</button>
    </div>

</template>

<script src="./wc-credits"></script>

<style scoped>
.credits {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: white;
}
</style>