import { defineStore } from 'pinia'

export const useNoteStore = defineStore({
  id: 'Note',
  state: () => ({
    note: [  
    ],
  }),
  persist: true,
  getters: {
    getNote: (state) => state.note
  },
  actions: {
    increment() {
    }
  }
})