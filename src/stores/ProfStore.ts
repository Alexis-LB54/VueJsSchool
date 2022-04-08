import { defineStore } from 'pinia'

export const useProfStore = defineStore({
  id: 'counter',
  state: () => ({
    list: [  
    ],
  }),
  getters: {
    getList: (state) => state.list
  },
  actions: {
    increment() {
    }
  }
})