import Vue from 'vue'
import axios from 'axios'

const API = 'https://jsonplaceholder.typicode.com/todos/'

const showError = (message) => Vue.notify({
  group: 'notifications-group',
  type: 'error',
  duration: 3000,
  title: 'Error',
  text: message
})

export default {
  state: {
    todos: [],
    todo: {}
  },

  getters: {
    allTodos: state => state.todos,
    oneTodo: state => state.todo
  },

  mutations: {
    setAllTodos: (state, payload) => state.todos = payload,
    setOneTodo: (state, payload) => state.todo = payload,
    createTodo: (state, payload) => {
      state.todos.unshift(payload)
      state.todo = payload
    }
  },

  actions: {
    fetchAllTodos: async ({ commit }) => {
      await axios.get(API + '?_limit=10')
        .then((response) => {
          commit('setAllTodos', response.data)
        }).catch((error) => showError(error.message))
    },

    fetchOneTodo: async ({ commit }, id) => {
      await axios.get(API + id.toString())
        .then((response) => {
          commit('setOneTodo', response.data)
        }).catch(error => showError(error.message))
    },

    postTodo: async ({ commit }, data) => {
      await axios.post(API, data)
        .then((response) => {
          commit('createTodo', response.data)
        }).catch((error) => showError(error.message))
    }
  },
}