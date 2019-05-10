<template>
  <div>
    <h3>Counter: {{ counter }} {{ text }}</h3>
    <input type="button" @click="increment" value="Increment">
    <input type="button" @click="decrement" value="Decrement">
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    text: String
  },
  data: () => ({
    counter: 0,
  }),
  methods: {
    increment() {
      this.counter += 1;
    },
    decrement() {
      this.counter -= 1;
    },
  }
}
</script>
