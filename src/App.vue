<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-view class="main-content"></router-view>
    </div>
    <notifications group="notifications-group"/>
  </div>
</template>

<script>
export default {
  name: "app"
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

.grey {
  color: grey;
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
    margin-top: 50px;
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
