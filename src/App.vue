<template>
  <div v-if="user">
    <NavBar/>
    <div class="page">
    <router-view></router-view>
    </div>
  </div>
  <LoginForm v-else/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import LoginForm from './components/LoginForm.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    LoginForm,
  },
  computed: {
    user() {
      return this.$store.state.user.identityId
    }
  },
  async created() {
    await this.$store.dispatch('getUser')
  }
}
</script>

<style scoped>
.page {
  padding: 20px;
}
</style>
