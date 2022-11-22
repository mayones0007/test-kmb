<template>
  <div class="images">
    <div v-for="image in userImages" :key="image.id">
      <img class="images__item" :src="`${$baseUrl}${image.url}`">
    </div>
    <label for="file" class="images__item">Загрузить фото</label>
    <input class="file" type="file" id="file" ref="file" accept="image/*" @change="uploadUserImage">
  </div>
</template>

<script>
export default {
  name: 'MyPictures',
  computed: {
    userImages() {
      return this.$store.state.user.images
    }
  },
  methods: {
    uploadUserImage() {
      this.$store.dispatch('uploadUserImage',this.$refs.file.files[0])
      
    }
  },
  async mounted() {
    await this.$store.dispatch('getUserIdentity')
    this.$store.dispatch('getUserImages')
  }
}
</script>

<style scoped>
.images {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 40px;
}
.images__item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  background-color: rgb(242, 242, 242);
  height: 200px;
  width: 300px;
  object-fit: contain;
  font-size: 20px;
}
.file {
  display: none;
}
</style>
