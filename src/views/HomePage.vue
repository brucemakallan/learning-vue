<template>
  <div class="homepage">
    <TodoApp message="hello there"/>
    <VuexTodoApp/>
  </div>
</template>

<script>
import TodoApp from "../components/TodoApp.vue";
import VuexTodoApp from "../components/VuexTodoApp.vue";

export default {
  name: "HomePage",

  components: {
    TodoApp,
    VuexTodoApp
  }
};
</script>

<style>
</style>
