import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    username: '',
    token: '',
  }),
  getters: {
    getUsername: (state) => {
      return state.username
    },
    getToken: (state) => {
      return state.token
    },
  },
  actions: {
    setUsername(usernameValue) {
      this.username = usernameValue
    },
    setToken(tokenValue) {
      this.token = tokenValue
    },
  }
})
