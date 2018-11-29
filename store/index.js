import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      leftSidebar: true,
      rightSidebar: false,
      selected: {
          navDepth: 1,
          currentSubject: "",
          currentTopic: ""
        }
    },
    mutations: {
      setHeaderTitle (state, payload) {
        state.headerTitle = payload
      },
      setLeftSidebar (state) {
        state.leftSidebar = !state.leftSidebar
      },
      setRightSidebar (state) {
        state.rightSidebar = !state.rightSidebar
      },
      setSelected (state, payload) {
        state.selected = payload
      }
    },
    actions: {
      changeHeaderTitle ({commit}, payload) {
        commit('setHeaderTitle', payload)
      },
      toggleLeftSidebar ({commit}) {
        commit('setLeftSidebar')
      },
      toggleRightSidebar ({commit}) {
        commit('setRightSidebar')
      },
      selectedState ({commit}, payload) {
        commit('setSelected', payload)
      }
    },
    getters: {
      getHeaderTitle (state) {
        return state.headerTitle
      },
      getLeftSidebar (state) {
        return state.leftSidebar
      },
      getRightSidebar (state) {
        return state.rightSidebar
      }
    }
  })
}

export default createStore
