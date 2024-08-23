<template>

<div class="bg-purple-800">
<div class="min-h-screen flex items-center justify-center">
    <div class="max-w-md  p-6 bg-purple-100 rounded-lg shadow-lg w-70">
      <div class="flex justify-center mb-8">
        <div class="w-40">
            <img src="../../../assets/images/logoMainMenu.gif"/>
        </div>
       
      </div>
      <h1 class="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Iniciar sesión</h1>
      <form>
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm text-gray-600">Correo electrónico</label>
          <input type="email" id="email" name="email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required>
        </div>
        <div class="mb-6">
          <label for="password" class="block mb-2 text-sm text-gray-600">Contraseña</label>
          <input type="password" id="password" name="password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required>
          <a href="#" class="block text-right text-xs text-cyan-600 mt-2">¿Olvidaste tu contraseña?</a>
        </div>
        <button @click="goToQuestions"  type="submit" class="w-32 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6">Acceso</button>
      </form>
      <div class="text-center">
        <p class="text-sm">¿No tienes una cuenta? <button @click="goToRegister" class="text-cyan-600">Regístrate ahora</button></p>
       
      </div>
      <p class="text-xs text-gray-600 text-center mt-10">&copy; 2024 MANIACOS GAMES</p>
    </div>
  </div>
</div>
</template>
<script src="./wc-login"></script>
<style></style>