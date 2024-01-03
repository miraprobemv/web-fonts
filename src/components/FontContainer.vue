<template>
  <div class="font-container">
    <slot v-bind:font="font" v-bind:is-expanded="false" v-bind:expand="expand"></slot>
  </div>
  <div v-show="isExpandedBackend" class="font-container--dialog-backend">
    <Transition name="bounce" v-on:after-leave="onAfterLeave">
      <div v-if="isExpanded" class="font-container--dialog">
        <slot v-bind:font="font" v-bind:is-expanded="true" v-bind:expand="expand"></slot>
        <slot name="extended" v-bind:font="font"></slot>
      </div>
    </Transition>
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
      isExpandedBackend: false,
    }
  },
  methods: {
    expand(isExpanded) {
      if (isExpanded) this.isExpandedBackend = true;
      this.isExpanded = isExpanded;
    },
    onAfterLeave() {
      this.isExpandedBackend = false;
    },
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

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-out 0.3s;
}
@keyframes bounce-in {
  0% {
    top: 45%;
    left: 45%;
    right: 45%;
    bottom: 45%;
    overflow: hidden;
  }
  50% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  100% {
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    overflow: auto;
  }
}
@keyframes bounce-out {
  0% {
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    overflow: hidden;
  }
  100% {
    top: 45%;
    left: 45%;
    right: 45%;
    bottom: 45%;
    overflow: hidden;
  }
}
</style>
