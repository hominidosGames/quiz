<template>

    <div class="bg-purple-800">
        <div class="min-h-screen flex items-center justify-center">
            <div class="max-w-md  p-6 bg-purple-100 rounded-lg shadow-lg w-70">
                <div class="flex justify-center mb-8">
                    <div class="w-40">
                        <img src="../../../assets/images/logoMainMenu.gif" />
                    </div>

                </div>
                <form>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm text-gray-600">Nombre</label>
                        <input type="email" id="email" name="email"
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            required>
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm text-gray-600">Correo electrónico</label>
                        <input type="email" id="email" name="email"
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            required>
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm text-gray-600">Contraseña</label>
                        <input type="password" id="password" name="password"
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            required>
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm text-gray-600">Confirmar Contraseña</label>
                        <input type="password" id="password" name="password"
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            required>
                    </div>
                    <button type="submit"
                        class="w-32 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6">Registrarse</button>
                </form>

                <p class="text-xs text-gray-600 text-center mt-10">&copy; 2024 MANIACOS GAMES</p>
            </div>
        </div>
    </div>
</template>
<script src="./wc-register"></script>
<style></style>