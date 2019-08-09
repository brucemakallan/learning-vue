<template>
  <div class="todos">
    <div class="heading">Read Todos from JSONPlaceholder (Using Vuex and axios)</div>
    <VuexTodoAppElement v-for="(todo, index) in allTodos" :key="index" :todo="todo"/>

    <div class="heading">Fetch one todo</div>
    <VuexTodoAppElement :todo="oneTodo"/>

    <div class="heading">Create todo</div>
    <form @submit.prevent>
      <div class="form-group">
        <input
          type="text"
          name="title"
          id="title"
          class="form-control"
          placeholder="Add Todo ..."
          v-model="title"
          @keyup.enter="addTodo($event.target.value)"
        >
      </div>
    </form>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import VuexTodoAppElement from "./VuexTodoAppElement.vue";
import uuid from "uuid";

export default {
  name: "VuexTodoApp",
  data() {
    return {
      title: ""
    };
  },
  computed: {
    ...mapGetters(["allTodos", "oneTodo"])
  },

  components: {
    VuexTodoAppElement
  },

  methods: {
    ...mapActions(["fetchAllTodos", "fetchOneTodo", "postTodo"]),
    addTodo(value) {
      this.title = value;
      this.postTodo({
        id: uuid.v4(),
        title: this.title,
        completed: false
      });
    }
  },

  created() {
    this.fetchAllTodos();
    this.fetchOneTodo(1);
  }
};
</script>

<style>
</style>
