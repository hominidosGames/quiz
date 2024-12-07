<template>

    <div class="bg-purple-800">

        <div class="min-h-screen items-center justify-center flex flex-col font-mono ">

            <div
                class="w-[90%] p-6 bg-purple-100 rounded-lg shadow-lg flex items-center justify-center flex flex-col h-full">
                <div class="w-40">
                    <img src="../../../assets/images/logoMainMenu.gif" />
                </div>

                <h1 class="text-2xl font-semibold text-center text-gray-500 mt-10 mb-10">Registro</h1>


                <form @submit.prevent="registerUser" class="w-full">
                    <div class="mb-6">

                        <input type="text" ref="UserName"
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            required placeholder="Nombre">
                    </div>
                    <div class="mb-6">

                        <input type="email" id="userEmail" name="email"
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            required placeholder="Email">
                    </div>
                    <div class="mb-6">

                        <input type="password" id="userPassword" name="password"
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            required placeholder="Contraseña">
                    </div>
                    <div class="mb-6">

                        <input type="password" id="userPasswordRepeat"
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            required placeholder="Confirmar contraseña">
                    </div>
                    <button type="submit"
                        class="w-32 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-10 mb-6">Registrarse</button>
                </form>

                <p class="text-xs text-gray-600 text-center mt-7">&copy; 2024 MANIACOS GAMES</p>
            </div>

            <div v-if="error" class="bg-purple-100 mt-10 p-2 rounded border-3 border-red-500 w-[90%]">
                <div class="bg-white p-2">
                    <p class="text-sm text-center">{{ errorRegister }}</p>
                </div>
            </div>

        </div>

    </div>


</template>
<script src="./wc-register"></script>
<style></style>