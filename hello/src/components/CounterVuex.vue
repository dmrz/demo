<template>
  <div>
    <h3>CounterVuex: {{ counter }} ({{ counterSquared }} squared)</h3>
    <div>
      <input type="button" @click="incrementCounter" value="Increment" :disabled="inputDisabled">
      <input type="button" @click="decrementCounter" value="Decrement" :disabled="inputDisabled">
    </div>
    <div>
      <input type="button" @click="incrementCounterByVueStarsCount" value="Increment by Vue stars number" :disabled="inputDisabled">
      <input type="button" @click="decrementCounterByVueStarsCount" value="Decrement by Vue stars number" :disabled="inputDisabled">
    </div>
    <!--
    <h3>CounterVuex: {{ $store.state.counter }}</h3>
    <input type="button" @click="$store.commit('incrementCounter')" value="Increment">
    <input type="button" @click="$store.commit('decrementCounter')" value="Decrement">
    -->
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'CounterVuex',
  computed: {
    ...mapState({
      counter: state => state.counter,
      inputDisabled: state => state.vueStarsCountLoadInProgress
    }),
    ...mapGetters(["counterSquared"]),
  },
  methods: {
    ...mapMutations(["incrementCounter", "decrementCounter"]),
    ...mapActions(["incrementCounterByVueStarsCount", "decrementCounterByVueStarsCount"]),
  }
}
</script>
