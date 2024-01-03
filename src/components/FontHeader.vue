<template>
  <div class="font-header">
    <h2>
      <span>{{ fontName }}</span>
      <span v-if="!!langName" v-bind:data-font="font">{{ langName }}</span>
      <span v-else>{{ altLangName }}</span>
      <button type="button" v-on:click="expandContainer">
        <span v-if="isExpanded">Close</span>
        <span v-else>Expand</span>
      </button>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'FontHeader',
  props: {
    fontName: String,
    langName: String,
    altLangName: String,
    font: String,
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

<style>
.font-header {
  width: 100%;
}
</style>
  