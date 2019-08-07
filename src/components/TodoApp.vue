<template>
  <div class="todo_app">
    <p>Todo App msg = {{ msg }}</p>
    <p>{{ heart }}</p>
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
      heart: "💖"
    };
  }
};
</script>

<style lang="sass" scoped>

</style>
