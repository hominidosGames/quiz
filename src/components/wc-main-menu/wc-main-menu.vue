<template>
    <div class="main-menu font-mono ">
        <img class="back-main-menu" src="../../../assets/images/backMainMenu/backMainMenu.gif" />
        <img class="logo-main-me  <wc-login></wc-login>nu" src="../../../assets/images/logoMainMenu.gif" />
        <img class="base-main-menu" src="../../../assets/images/baseMainMenu.png" />
        <img class="foco" ref="foco1" src="../../../assets/images/foco1.png" />
        <img class="foco2" ref="foco2" src="../../../assets/images/foco2.png" />
      
        <button @click="goToGame"  type="submit" class="w-40 h-10 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6">Acceso</button>
    </div>

</template>

<script src="./wc-main-menu"></script>
<style scoped>
.back-main-menu {
    background-color: #a463dfff;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.main-menu {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
    /*background-color: #9333ea;*/
}

.button-main-menu {
    z-index: 2;
    box-shadow:
        0 0 3px 1.5px #fff,
        0 0 5px 3px yellow,
        0 0 7px 4.5px yellow;
}

.logo-main-menu {
    width: 100%;
}

.base-main-menu {
    width: 100%;
    position: absolute;
    bottom: -200px;
    animation-name: showBase;
    animation-duration: 1s;
    pointer-events: none;
    animation-fill-mode: both;
}

.foco {
    position: absolute;
    top: -100px;
    height: 1200px;
    min-width: 400px;
    animation-duration: 2s;
    animation-name: showL1;
    pointer-events: none;
    animation-fill-mode: both;
    transform-origin: top right;
}

.foco2 {
    position: absolute;
    top: -100px;
    height: 1200px;
    min-width: 400px;
    animation-duration: 2s;
    animation-name: showL2;
    pointer-events: none;
    animation-fill-mode: both;
    transform-origin: top left;
}

.hiddenLight1 {
    animation-name: hiddenL1;
    animation-duration: 1s;
}

.hiddenLight2 {
    animation-name: hiddenL2;
    animation-duration: 1s;
}

@keyframes hiddenL1 {
    0% {
        opacity: .8;
        rotate: 10deg;
    }

    100% {
        opacity: 0;
        rotate: -10deg;
    }
}

@keyframes hiddenL2 {
    0% {
        opacity: .8;
        rotate: -10deg;
    }

    100% {
        opacity: 0;
        rotate: 10deg;
    }
}

@keyframes showL1 {
    0% {
        opacity: 0;
        rotate: 0deg;
    }

    100% {
        opacity: .8;
        rotate: 10deg;
    }
}

@keyframes showL2 {
    0% {
        opacity: 0;
        rotate: 0deg;
    }

    100% {
        opacity: .8;
        rotate: -10deg;
    }
}

@keyframes showBase {
    0% {}

    100% {
        bottom: 0
    }
}
</style>