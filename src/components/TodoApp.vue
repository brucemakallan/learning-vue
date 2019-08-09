<template>
  <div class="todo_app">
    <h1>{{ intro }}</h1>

    <div class="heading">Reading Props</div>
    <p>Todo App message = {{ message }}</p>

    <div class="heading">Reading Data values</div>
    <p>{{ heart }}</p>

    <div class="heading">Using v-bind</div>
    <span :title="hoverMessage">Hover to see today's date</span>

    <div class="heading">Using v-if</div>
    <div v-if="visible">Visible</div>

    <div class="heading">Using v-for with v-if</div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <span>{{ todo.title }}</span>
        <span v-if="todo.completed">✅</span>
      </li>
    </ul>

    <div class="heading">Handling events</div>
    <button type="button" class="btn btn-primary btn-sm" v-on:click="reverseMessage">Reverse Heading</button>

    <div class="heading">2-way binding with v-model</div>
    <div class="form-group">
      <input type="text" name="age" id="age" class="form-control" v-model="age">
    </div>

    <div class="heading">Binding an object to a Component: The Todo-List App</div>
    <form @submit.prevent>
      <div class="form-group">
        <input
          type="text"
          name="details"
          id="details"
          class="form-control"
          placeholder="Add Todo ..."
          v-model="todoTitle"
          @keyup.enter="addTodo($event)"
        >
      </div>
    </form>
    <TodoAppElement
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
      @delete-element="deleteElement"
      @mark-as-done="todo.completed = !$event"
    />
  </div>
</template>

<script>
import TodoAppElement from "./TodoAppElement.vue";
import uuid from "uuid";

export default {
  name: "TodoApp",

  props: {
    message: {
      type: String,
      required: true,
      validator: value => value.length > 3
    }
  },

  data() {
    return {
      intro: "Welcome!",
      heart: "💖",
      hoverMessage: new Date().toLocaleString(),
      visible: true,
      age: 12,
      todoTitle: "",
      todos: [
        {
          id: 1,
          title: "Getting started",
          completed: false
        },
        {
          id: 2,
          title: "Buy Milk",
          completed: true
        },
        {
          id: 3,
          title: "Kill Hitler",
          completed: false
        }
      ]
    };
  },

  methods: {
    reverseMessage() {
      this.intro = this.intro
        .split("")
        .reverse()
        .join("");
    },

    deleteElement(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },

    addTodo(e) {
      const { value } = e.target;
      this.todoTitle = value;
      this.todos = [
        ...this.todos,
        {
          id: uuid.v4(),
          title: value,
          completed: false
        }
      ];
      this.todoTitle = "";
    }
  },

  components: {
    TodoAppElement
  }
};
</script>

<style lang="scss">
</style>
