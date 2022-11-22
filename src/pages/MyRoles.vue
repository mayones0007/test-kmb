<template>
  <div v-for="role in userRoles" :key="role.id" class="card">
    <div v-for="(field, index) in role" :key="field">
      <div class="field">
        <div>{{index}}</div>
        <div>{{field}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyRoles',
  computed: {
    userRoles() {
      return this.$store.state.user.roles
    },
  },
  mounted() {
    this.$store.dispatch('getUserRoles')
  }
}
</script>

<style scoped>
.card {
  padding: 10px;
  margin-bottom: 20px;
  background-color: rgb(242, 242, 242);
  width: 700px;
}
.field {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 5px;
  border-bottom: solid rgb(206, 206, 206) 1px;
}
</style>
