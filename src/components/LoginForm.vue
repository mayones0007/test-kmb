<template>
  <div class="page">
    <div class="form">
      <h2>Вход</h2>
      <div class="mb-3">
        <input type="text" class="form-control" placeholder="Логин" v-model="user.login">
      </div>
      <div class="mb-3">
        <input type="password" class="form-control" placeholder="Пароль" v-model="user.password">
      </div>
      <button class="btn btn-primary" @click="logIn">Войти</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data: () => ({
    user: {},
  }),
  methods: {
    async logIn() {
      await this.$store.dispatch('logIn', this.user)
      await this.$store.dispatch('getUser')
    }
  }
}
</script>

<style scoped>
.page {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.form {
  width: 300px;
  display: grid;
}
</style>
