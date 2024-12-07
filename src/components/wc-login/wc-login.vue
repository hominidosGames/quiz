<template>

  <div class="bg-purple-800">
    <div class="min-h-screen flex items-center justify-center flex flex-col font-mono">
      <div class="p-6 bg-purple-100 rounded-lg shadow-lg w-[90%]">
        <div class="flex justify-center mb-5">
          <div class="w-40">
            <img src="../../../assets/images/logoMainMenu.gif" />
          </div>

        </div>
        <h1 class="text-2xl font-semibold text-center text-gray-500 mt-10 mb-10">Iniciar sesión</h1>
        <form @submit.prevent="login" class="w-full">
          <div class="mb-6">
            <input type="email" id="userEmail" name="email"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required
              placeholder="Email">
          </div>
          <div class="mb-6">
            <input type="password" id="password" name="password"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required
              placeholder="Contraseña">
            <a href="#" class="block text-right text-xs text-cyan-600 mt-2">¿Olvidaste tu contraseña?</a>
          </div>
          <button type="submit"
            class="w-50 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-10 mb-2">Acceso</button>
   
        </form>
        <button @click="loginGoogle"
            class="w-50 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-5 mb-2">Acceso
            con Google</button>
        <div class="text-center mt-10">
          <p class="text-sm">¿No tienes una cuenta? <button @click="goToRegister" class="text-cyan-600">Regístrate
              ahora</button></p>

        </div>
        <p class="text-xs text-gray-600 text-center mt-10">&copy; 2024 MANIACOS GAMES</p>
      </div>
      <div v-if="error" class="bg-purple-100 mt-10 p-2 rounded border-3 border-red-500 w-[90%]">
        <div class="bg-white p-2">
          <p class="text-sm text-center">{{ errorLogin }}</p>
        </div>
      </div>
    </div>

  </div>
</template>
<script src="./wc-login"></script>
<style></style>