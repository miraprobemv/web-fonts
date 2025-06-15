<template>
  <div class="font-header">
    <h2 class="font-header--title">
      <span class="font-name">{{ fontName }}</span>
      <span v-if="!!langName" v-bind:class="font">{{ langName }}</span>
      <span v-if="!!systemName" v-bind:class="font">{{ systemName }}</span>
      <button type="button" class="action-button" v-on:click="expandContainer">
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
.font-header--title {
  display: flex;
  justify-content: space-between;
}
.font-name {
  margin-right: 1ex;
}
.action-button {
  margin-left: auto;
  margin-right: 1ex;
}
</style>
  