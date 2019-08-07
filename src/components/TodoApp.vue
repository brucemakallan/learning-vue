<template>
  <div class="todo_app">
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
  }
};
</script>

<style lang="sass" scoped>

</style>
