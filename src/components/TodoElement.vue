<template>
  <div :class="['todo-element', todo.completed ? 'completed' : '']">
    <div>{{ todo.title }}</div>
    <div>
      <button
        type="button"
        title="Toggle check"
        class="icon-button green"
        @click="$emit('mark-as-done', todo.completed)"
      >
        <font-awesome-icon icon="check" :class="todo.completed ? 'grey' : 'green'"/>
      </button>
      <button
        type="button"
        title="Delete"
        class="icon-button red"
        @click="$emit('delete-element', todo.id)"
      >
        <font-awesome-icon icon="trash"/>
      </button>
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
  background-color: #b6d8f3;
}
.completed {
  text-decoration: line-through;
  background-color: #eeeeee;
}
</style>
