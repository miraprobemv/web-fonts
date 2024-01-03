<template>
  <div class="font-container">
    <slot v-bind:font="font" v-bind:is-expanded="false" v-bind:expand="expand"></slot>
  </div>
  <div v-if="isExpanded" class="font-container--dialog-backend">
    <div class="font-container--dialog">
      <slot v-bind:font="font" v-bind:is-expanded="true" v-bind:expand="expand"></slot>
      <slot name="extended" v-bind:font="font"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FontContainer',
  props: {
    font: String,
  },
  data() {
    return {
      isExpanded: false,
    }
  },
  methods: {
    expand(isExpanded) {
      this.isExpanded = isExpanded;
    }
  }
}
</script>

<style>
.font-container {
  width: 100%;
  height: max-content;
  border: solid 1px #bdc0c2;
  transition: all 1000ms 0s ease;
}
.font-container--dialog-backend {
  position: fixed;
  background-color: #44454667;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}
.font-container--dialog {
  position: fixed;
  border: solid 1px #2e9ee9;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
}
</style>
