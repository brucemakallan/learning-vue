<template>
  <div class="todo-element">
    <div>{{ todo.title }}</div>
    <div>
      <span v-if="todo.completed">
        <button
          type="button"
          title="Complete"
          class="icon-button green"
          @click="$emit('complete-element', todo.id)"
        >
          <font-awesome-icon icon="check"/>
        </button>
      </span>
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
  background-color: #eeeeee;
}
</style>
