import './vue.js'


const template = `<div>
  {{ value }}
  <input type="text" v-model="value">
  <counter/>
</div>`


const Counter = Vue.component('counter', {
  data() {
    return {
      counter: 0,
    }
  },
  template: `<div>{{ counter }} <button @click="counter++">+1</button></div>`
})

const vm = new Vue({
  el: '#app',
  data() {
    return {
      value: '',
    }
  },
  template,
  components: {
    Counter,
  }
}).$mount()

console.log(vm)

// with(this) {
//   return _c(
//     'input',
//     {
//       directives: [{
//         name:"model",
//         rawName:"v-model",
//         value: (value),
//         expression:"value"
//       }],
//       attrs: { "type": "text" },
//       domProps:{ "value": (value) },
//       on: {
//         "input": function($event) {
//           if ($event.target.composing) return;
//           value=$event.target.value
//         }
//       }
//     }
//   )
// }
