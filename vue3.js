import { createApp } from './vue.esm-browser.js'

const app = createApp({
  data() {
    return {
      counter: 0,
    }
  },
  template: `<div>{{ counter }} <button @click="counter++">+1</button></div>`,
})

// app.component('counter', {
//   data() {
//     return {
//       counter: 0,
//     }
//   },
//   template: `<div>{{ counter }} <button @click="counter++">+1</button></div>`,
// })

app.mount('#app')
