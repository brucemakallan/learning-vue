<template>
  <div class="todo_app">
    <p>Todo App msg = {{ msg }}</p>
    <p>{{ heart }}</p>
    <span :title="hoverMessage">Hover to see today's date</span>
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
      hoverMessage: new Date().toLocaleString()
    };
  }
};
</script>

<style lang="sass" scoped>

</style>
