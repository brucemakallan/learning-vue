<template>
  <div class="todo_app">
    <h1>{{ intro }}</h1>
    <p>Todo App msg = {{ msg }}</p>
    <p>{{ heart }}</p>
    <span :title="hoverMessage">Hover to see today's date</span>
    <div v-if="visible">Visible</div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <span>{{ todo.title }}</span>
        <span v-if="todo.completed">✅</span>
      </li>
    </ul>
    <button type="button" v-on:click="reverseMessage">Reverse Heading</button>
  </div>
</template>

<script>
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
          title: "Getting started",
          completed: false
        },
        {
          title: "Buy Milk",
          completed: true
        },
        {
          title: "Kill Hitler",
          completed: false
        }
      ]
    };
  },
  methods: {
    reverseMessage() {
      this.intro = this.intro
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style lang="sass" scoped>

</style>
