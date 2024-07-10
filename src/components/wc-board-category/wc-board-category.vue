<template>
    <div class="p-5 flex flex-col items-center bg-gradient-to-r bg-purple-800 h-screen">

        <wc-timer-bar></wc-timer-bar>

        <wc-categories>
            
        </wc-categories>

    </div>
</template>


<script src="./wc-board-category.ts"></script>
<style>

.light-on {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 30px !important;
    position: absolute;
}

.divImagen{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
}


</style>