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


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Nunito+Sans:300,900&display=swap");

$Nunito: "Nunito Sans", sans-serif;

@mixin icon-styles {
  margin: 5px;
  padding: 0;
  background: transparent;
  cursor: pointer;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
span,
div {
  font-family: $Nunito;
  font-weight: 300;
}

.green {
  color: green;
}
.red {
  color: rgb(209, 10, 10);
}

#app {
  width: 90%;
  margin: 50px auto;

  .heading {
    padding: 5px;
    margin-top: 40px;
    background-color: rgb(195, 226, 236);
  }
  .icon {
    @include icon-styles;
  }
  .icon-button {
    @include icon-styles;
    border: none;
  }
}
</style>
