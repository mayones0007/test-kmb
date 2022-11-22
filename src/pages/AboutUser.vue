<template>
  <div v-for="field in userFields" :key="field.name" class="card">
      <h4>{{field.fieldName}}</h4>
      <div v-for="(field, index) in userInfo(field.name)" :key="field">
        <div class="field">
          <div>{{index}}</div>
          <div>{{field}}</div>
        </div>
      </div>
   </div>
</template>

<script>
import { userFields } from '@/data/user.fields'

export default {
  name: 'AboutUser',
  data: () => ({
    userFields
  }),
  methods: {
    userInfo(field) {
      return this.$store.state.user[field]
    },
  },
  async mounted() {
    await this.$store.dispatch('getUserIdentity')
    this.$store.dispatch('getUserCompany')
    this.$store.dispatch('getUserInfo')
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