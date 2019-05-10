<template>
  <div class="hello">
    <h1>{{ text }}</h1>
    <input type="text" v-model="text">

    <!-- <p v-for="number in numbers" :key="number" v-text="number"></p> -->

    <!-- <nested-property /> -->

    <counter :text="text" />

    <counter-vuex />

    <footer>
      <slot>This is default footer text.</slot>
    </footer>
  </div>
</template>

<script>
import Counter from '@/components/Counter';
import CounterVuex from '@/components/CounterVuex';
import NestedProperty from '@/components/NestedProperty';

export default {
  name: 'HelloWorld',
  components: {
    Counter,
    CounterVuex,
    NestedProperty,
  },
  data: () => ({
    text: "Hello, Launchmetrics!",
    numbers: Array(10).keys(),
  }),
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

footer {
  margin-top: 100px;
  color: #555555;
}
</style>
