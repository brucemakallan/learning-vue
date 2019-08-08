<template>
  <div class="todo_app">
    <h1>{{ intro }}</h1>
    <!-- Reading Props -->
    <p>Todo App msg = {{ msg }}</p>

    <!-- Reading data -->
    <p>{{ heart }}</p>

    <!-- using v-bind -->
    <span :title="hoverMessage">Hover to see today's date</span>

    <!-- v-if -->
    <div v-if="visible">Visible</div>

    <!-- v-for -->
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <span>{{ todo.title }}</span>
        <span v-if="todo.completed">✅</span>
      </li>
    </ul>

    <!-- Handling events, v-on OR @ -->
    <button type="button" v-on:click="reverseMessage">Reverse Heading</button>

    <!-- 2-way binding with v-model -->
    <input type="text" name="age" id="age" v-model="age">

    <!-- Binding an object to a Component -->
    <TodoElement
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
      @delete-element="deleteElement"
    />
  </div>
</template>

<script>
import TodoElement from "./TodoElement.vue";

export default {
  name: "TodoApp",
  props: {
    msg: String
  },
  data() {
    return {
      intro: "Welcome to the app",
      heart: "💖",
      hoverMessage: new Date().toLocaleString(),
      visible: true,
      todos: [
        {
          id: 1,
          title: "Getting started",
          completed: false
        },
        {
          id: 2,
          title: "Buy Milk",
          completed: true
        },
        {
          id: 3,
          title: "Kill Hitler",
          completed: false
        }
      ],
      age: 12
    };
  },
  methods: {
    reverseMessage() {
      this.intro = this.intro
        .split("")
        .reverse()
        .join("");
    },
    deleteElement(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  },
  components: {
    TodoElement
  }
};
</script>

<style lang="scss" scoped>
</style>
