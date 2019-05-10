<template>
  <div>
    <h3>Nested property X:
      <span v-if="properties.x === undefined">missing</span>
      <span v-else>{{ properties.x }}</span>
    </h3>
    <input type="button" @click="addNewProperty" value="Add new property X">
    <input type="button" @click="deleteNewProperty" value="Delete new property X">
  </div>
</template>

<script>
export default {
  name: 'NestedProperty',
  data: () => ({
    properties: {},
  }),
  methods: {
    addNewProperty() {
      // this.properties.x = 100;
      this.$set(this.properties, "x", 100)
    },
    deleteNewProperty() {
      this.$delete(this.properties, "x")
    },
  }
}
</script>
