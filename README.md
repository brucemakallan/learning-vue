# Learning Vue JS

Cheat Sheet: https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf

Official Guild: https://vuejs.org/v2/guide/

#### Installation

**Recommended:** Use Vue CLI: https://cli.vuejs.org/

Alternative:

```
npm install vue
```

OR
1. Development version, includes helpful console warnings
```
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```
2. Production version, optimized for size and speed
```
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

#### Getting Started
*HTML*
The "Mustache" Syntax
```
{{ message }}
```
NB: Mustaches cannot be used inside HTML attributes (e.g. id, class, title, ... ). Use a v-bind directive instead
```
<div v-bind:id="dynamicId"></div>
```

*JS*
```
var app = new Vue({
  el: '#app',
  data: {
    message: 'The date is ' + new Date().toLocaleString()
  },
  methods: {
    reverseMessage: function () { ... }
  }
})
```

#### Directives (v-dir)
```
<span v-bind:title="message">
```
i.e. "keep this element’s title attribute up-to-date with the message property on the Vue instance (app)."

*Others include*
- v-bind
- v-show - toggle visibility off/on (the value provided should eval to boolean)
- v-if
- v-else-if
- v-else
- v-for
- v-on - event handling
- v-once - ignore state changes. Render once
- v-html - print raw HTML (NB: Only use HTML interpolation on trusted content and never on user-provided content.)

###### NB: Using `v-if` and `v-for` together (in the same element/line) is not recommended

#### Directive Attributes (v-dir:attr)
e.g.
```
v-bind:title|id|class="valuehere"
v-on:click="eventhandlername"
```

#### Directive Modifiers
e.g. for `event.preventDefault()`
```
<form v-on:submit.prevent="onSubmit"> ... </form>
```
Others include:
- @keyup.enter
- @keyup.up
- @keyup.down
- @keyup.left
- @keyup.right
- @keyup.esc
- @keyup.delete
- @keyup.tab
- v-model.number
*See cheat sheet for more*

#### Conditionals and Loops
```
<ol>
  <li v-for="student in students" v-bind:key="student.id">
    {{ student.name }}
  </li>
</ol>
```

```
// You can also use 'of' instead of 'in'
<div v-for="item of items" v-bind:key="item.id"></div>
```

When used on an `object`, you can provide arguments for name (a.k.a key) and index as well.

```
<div v-for="(value, name, index) in object" v-bind:key="index">
  {{ index }}. {{ name }}: {{ value }}
</div>
```

###### NB: It is recommended to provide a `key` attribute with `v-for`. Don’t use non-primitive values like objects and arrays as keys. Use string or numeric values instead.

#### Shorthands for directives
```
v-bind:href - :href
v-on:click - @click
```

#### Handling User Input
- v-on
```
<p>{{ message }}</p>
<button v-on:click="reverseMessage">Reverse Message</button>
```
- v-model (for two-way binding between form input and app state)
```
<input v-model="message">
```

#### Composing with Components
```
Vue.component('todo-item', {
  props: ['studentProp'],
  template: '<li>{{ studentProp.name }}</li>'
});
```
```
<ol>
  <todo-item
    v-for="student in students"
    v-bind:studentProp="student"
    v-bind:key="student.id"
  ></todo-item>
</ol>
```

Note the `is="todo-item"` attribute below. This is necessary in DOM templates, because only an `<li>` element is valid inside a `<ul>`. It does the same thing as the Component, `<todo-item>`, but works around a potential browser parsing error.
```
<ul>
  <li
    is="todo-item"
    v-for="(todo, index) in todos"
    v-bind:key="todo.id"
    v-bind:title="todo.title"
    v-on:remove="todos.splice(index, 1)"
  ></li>
</ul>
```

#### Instance Lifecycle Hooks
- created
- mounted
- updated
- destroyed
```
new Vue({
  data: {
    name: 'Jack'
  },
  created: function () {
    // `this` points to the vm instance
    console.log('Hello ' + this.name)
  }
})
```
###### NB: Don't use arrow functions on an options property or callback. e.g.
```
created: () => console.log(this.a)
```
But you can use the following ES6 shorthand
```
created() {
  console.log(this.a);
}
```

#### Computed Properties (alt = methods)
```
var vm = new Vue({
  el: '#app',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})
```
```
<div id="app">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```
Computed properties are cached based on their reactive dependencies. This means as long as `message` has not changed, multiple access to the `reversedMessage` computed property will immediately return the previously computed result.

This also means a computed property will never update if its reference is not a reactive dependency.

#### Watchers
When you have some data that needs to change based on some other data.
*NB: It is tempting to overuse watch.*
```
data: {
  question: '',
  answer: 'I cannot give you an answer until you ask a question!'
},
watch: {
  // whenever question changes, this function will run
  question: function (newQuestion, oldQuestion) {
    this.answer = 'Waiting for you to stop typing ...'
    this.getAnswerFromAPI()
  }
},
```

#### Class and Style Bindings
Vue provides special enhancements when `v-bind` is used with `class` and `style`. In addition to strings, the expressions can also evaluate to `objects` or `arrays`.

1. As Objects
```
<div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
></div>
```

Using a computed property:
```
<div v-bind:class="classObject"></div>
```
```
data: {
  isActive: true,
  error: null
},
computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```

2. As Arrays and Objects

```
<div v-bind:class="[{ active: isActive }, errorClass]"></div>
```

3. As a prop on a Component
```
<my-component class="baz boo"></my-component>
<my-component v-bind:class="{ active: isActive }"></my-component>
```
These classes are passed on to the root element of the Component without overriding the existing ones.

You can use `<template></template>` as "React.Fragment"

#### 

#### 

#### 

#### 
