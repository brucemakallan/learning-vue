<template>
  <div class="todo-element">
    <span>{{ todo.title }}</span>
    <span v-if="todo.completed">✅</span>
    <span v-else>☑️</span>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object
  }
};
</script>

<style scoped>
.todo-element {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  margin: 2px;
  background-color: #eaeaea;
}
</style>
