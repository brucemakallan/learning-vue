<template>
  <div class="todos">
    <div class="heading">Read Todos from JSONPlaceholder (Using Vuex and axios)</div>
    <VuexTodoAppElement v-for="(todo, index) in allTodos" :key="index" :todo="todo"/>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import VuexTodoAppElement from "./VuexTodoAppElement.vue";

export default {
  name: "VuexTodoApp",
  computed: {
    ...mapGetters(["allTodos"])
  },

  components: {
    VuexTodoAppElement
  },

  methods: {
    ...mapActions(["fetchAllTodos"])
  },

  created() {
    this.fetchAllTodos();
  }
};
</script>

<style>
</style>
