<template>
  <div class="font-header">
    <h2>
      <span>{{ fontName }}</span>
      <span v-if="!!langName" v-bind:data-font="font">{{ langName }}</span>
      <span v-if="!!systemName" v-bind:data-font="font">{{ systemName }}</span>
      <button type="button" v-on:click="expandContainer">
        <span v-if="isExpanded">Close</span>
        <span v-else>Show details</span>
      </button>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'FontHeader',
  props: {
    fontName: String,
    font: String,
    langName: String,
    systemName: String,
    isExpanded: Boolean,
    expand: Function,
  },
  methods: {
    expandContainer() {
      this.expand(!this.isExpanded);
    }
  }
}
</script>

<style scoped>
.font-header {
  width: 100%;
}
</style>
  