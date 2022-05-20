import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    charactersFilter: []
  },
  getters: {
  },
  mutations: {
    setcharacters(state, payload){
      state.characters = payload
    },
    setcharactersFilter(state, payload){
      state.characters = payload
    }
  },
  actions: {
    async getcharacters({commit}){
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        consoleg.log(data)
      } catch (error) {
        consoleg.error(error)
      }
    }
  },
  modules: {
  }
})
