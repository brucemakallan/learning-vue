<template>
  <div class="single-todo">> {{ todo.title }}</div>
</template>

<script>
export default {
  name: "VuexTodoAppElement",
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>
