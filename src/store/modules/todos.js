import axios from 'axios'

const API = 'https://jsonplaceholder.typicode.com/todos?_limit=5'

export default {
  state: {
    todos: []
  },

  getters: {
    allTodos: state => state.todos
  },

  mutations: {
    setAllTodos: (state, payload) => state.todos = payload
  },

  actions: {
    fetchAllTodos: async ({ commit }) => {
      await axios.get(API).then((response) => {
        commit('setAllTodos', response.data)
      }).catch((error) => {
        console.log(error);
      })
    }
  },

}