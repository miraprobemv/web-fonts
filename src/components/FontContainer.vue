<template>
  <section class="font-container">
      <FontHeader
        v-bind:font="font"
        v-bind:font-name="fontName"
        v-bind:lang-name="langName" v-bind:system-name="systemName"
        v-bind:is-expanded="false"
        v-bind:expand="expand" />
      <FontSampleInput v-bind:font="font" v-bind:default-font-size="fontSize"
        v-model:font-size="fontSizeValue" v-model:text="textValue" />
  </section>
  <div v-show="isExpandedBackend" class="font-container--dialog-backend">
    <Transition name="bounce" v-on:after-leave="onAfterLeave">
      <section v-if="isExpanded" class="font-container--dialog">
        <FontHeader
          v-bind:font="font"
          v-bind:font-name="fontName"
          v-bind:lang-name="langName" v-bind:system-name="systemName"
          v-bind:is-expanded="true"
          v-bind:expand="expand" />
        <FontSampleInput v-bind:font="font" v-bind:default-font-size="fontSize"
          v-model:font-size="fontSizeValue" v-model:text="textValue" />
        <slot></slot>
      </section>
    </Transition>
  </div>
</template>

<script>
import FontSampleInput from '@/components/FontSampleInput.vue'
import FontHeader from '@/components/FontHeader.vue'
export default {
  name: 'FontContainer',
  components: {
      FontHeader,
      FontSampleInput,
  },
  props: {
    font: String,
    fontName: String,
    langName: String,
    systemName: String,
    defaultText: String,
    fontSize: {
        type: Number,
        default: 36,
    }
  },
  data() {
    return {
      isExpanded: false,
      isExpandedBackend: false,
      textValue: this.$props.defaultText,
      fontSizeValue: this.$props.fontSize,
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
