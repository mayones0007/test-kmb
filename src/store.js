import { createStore } from 'vuex'
import { axiosInstance } from '@/httpClient'
import { router } from './router'


export const store = createStore({
  state() {
    return {
      user: {
        identityId: null,
        identity: {},
        company: {},
        info: {},
        roles: [],
        images: [],
      },
    }
  },
  actions: {
    async logIn(_context, inputs) {
      try {
        const response = await axiosInstance.post('auth/personal/', inputs)
        localStorage.setItem('userData', JSON.stringify({ key: response.data.data.key, refresh_token: response.data.data.refresh_key }))
        router.push({ name: 'about' })
      } catch (e) {
        console.log("Ошибка HTTP: " + e)
      }
    },
    async getUser({commit}) {
      try {
        if (localStorage.getItem('userData')) {
          const response = await axiosInstance.get('account/authinfo/')
          commit('setUserIdentityId', response.data.data.identity)
        }
      } catch (e) {
        console.log("Ошибка HTTP: " + e)
      }
    },
    async getUserCompany({commit}) {
      try {
        const response = await axiosInstance.get(`account/company/${this.state.user.identity.company}/`)
        commit('setUserCompany', response.data.data)
      } catch (e) {
        console.log("Ошибка HTTP: " + e)
      }
    },
    async getUserInfo({ commit }) {
      try {
        const response = await axiosInstance.get(`account/user/${this.state.user.identity.user}/`)
        commit('setUserInfo', response.data.data)
      } catch (e) {
        console.log("Ошибка HTTP: " + e)
      }
    },
    async getUserIdentity({ commit }) {
      try {
        const response = await axiosInstance.get(`account/identity/${this.state.user.identityId}/`)
        commit('setUserIdentity', response.data.data)
      } catch (e) {
        console.log("Ошибка HTTP: " + e)
      }
    },
    async getUserRoles({ commit }) {
      try {
        const response = await axiosInstance.get('account/myroles/?limit=100')
        commit('setUserRoles', response.data.data.results)
      } catch (e) {
        console.log("Ошибка HTTP: " + e)
      }
    },
    async getUserImages({ commit }) {
      try {
        const response = await axiosInstance.get(`media/image/account__user/${this.state.user.identity.user}/`)
        commit('setUserImages', response.data.data)
      } catch (e) {
        console.log("Ошибка HTTP: " + e)
      }
    },
    async uploadUserImage({ dispatch }, image) {
      const formData = new FormData()
      formData.append('object_type', 'account__user')
      formData.append('object_id', this.state.user.identity.user)
      formData.append('file', image)
      formData.append('title', image.name)
      try {
        await axiosInstance.post('media/image/upload/', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        dispatch('getUserImages')
      } catch (e) {
        console.log("Ошибка HTTP: " + e)
      }
    },
  },
  mutations: {
    setUserIdentityId(state, id) {
      state.user.identityId = id
    },
    setUserIdentity(state, identity) {
      state.user.identity = identity
    },
    setUserCompany(state, company) {
      state.user.company = company
    },
    setUserInfo(state, info) {
      state.user.info = info
    },
    setUserRoles(state, roles) {
      state.user.roles = roles
    },
    setUserImages(state, images) {
      state.user.images = images
    },
  }
})