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
      state.charactersFilter = payload
    }
  },
  actions: {
    async getcharacters({commit}){
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        commit('setcharacters', data.results)
        commit('setcharactersFilter', data.results)
      } catch (error) { 
        console.error(error)
      }
    }, 
    filterByStatus({commit,state},status){
      const results = state.characters.filter((character) =>{
        return character.status.includes(status)
      })
      commit('setcharactersFilter', results)
    },
    filterByName({commit, state}, name){
      const formatName = name.toLowerCase()
      const results = state.characters.filter((character) => {
        const characterName = character.name.toLowerCase()

        if(characterName.includes(formatName)){
          return character 
        }
      })
      commit('setcharactersFilter', results)
    } 
  },
  modules: {
  }
})
