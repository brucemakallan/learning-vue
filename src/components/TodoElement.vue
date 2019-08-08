<template>
  <div class="todo-element">
    <div>{{ todo.title }}</div>
    <div>
      <span v-if="todo.completed">✅</span>
      <span v-else>☑️</span>
      <button type="button" title="Delete" @click="$emit('delete-element', todo.id)">🗑</button>
    </div>
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
