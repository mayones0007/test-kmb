<template>
  <ul class="nav">
    <li class="nav-item">
      <router-link to="/about" class="nav-link">Обо мне</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/myroles" class="nav-link">Мои роли</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/mypictures" class="nav-link">Мои фото</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
.nav {
  padding: 20px;
  background: linear-gradient(to bottom, rgb(255, 255, 255), rgb(242, 242, 242));
}
</style>