<template>
  <div id="app">
    <TodoApp msg="hello there"/>
  </div>
</template>

<script>
import TodoApp from "./components/TodoApp.vue";

export default {
  name: "app",
  components: {
    TodoApp
  }
};
</script>


<style>
</style>
