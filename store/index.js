import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      headerTitle: ''
    },
    mutations: {
      setHeaderTitle (state, payload) {
        this.state.headerTitle = payload
      }
    },
    actions: {
      changeHeaderTitle ({commit}, payload) {
        commit('setHeaderTitle', payload)
      }
    },
    getters: {
      getHeaderTitle (state) {
        return state.headerTitle
      }
    }
  })
}

export default createStore
