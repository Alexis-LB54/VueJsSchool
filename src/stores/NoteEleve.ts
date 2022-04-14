import { defineStore } from 'pinia'

export const useNoteStore = defineStore({
  id: 'Note',
  state: () => ({
    note: [  
    ],
  }),
  persist: true,
  getters: {
    getNote: (state) => state.note,
    getMoyenne: (state) => {
      let moyenne = 0;
      state.note.map( (item : {notation: number}) => {
        moyenne
      })
    },
  },
  actions: {
    increment() {
    }
  }
})