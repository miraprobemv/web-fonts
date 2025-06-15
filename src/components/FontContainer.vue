<template>
  <section class="font-container">
      <FontHeader
        v-bind:font="font"
        v-bind:font-name="fontName"
        v-bind:lang-name="langName" v-bind:system-name="systemName"
        v-bind:is-expanded="false"
        v-bind:expand="expand" />
      <FontSampleInput v-bind:font="font"
        font-size="36" v-model:text="textValue" />
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
        <div class="font-container--dialog--spec"><slot></slot></div>
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
  padding: 8px 16px;
  width: 100%;
  height: max-content;
  /* border: solid 1px #bdc0c2; */
}

.input {
  margin: 0 8px;
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
  display: flex;
  flex-direction: column;
  position: fixed;
  box-shadow: inset 0 0 2px 1px #abc9e7;
  background-color: rgb(249, 250, 252);
  border-radius: 12px;
  padding: 12px 24px;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
}

.bounce-enter-active {
  animation: bounce-in 0.3s;
}
.bounce-leave-active {
  animation: bounce-out 0.3s;
}
@keyframes bounce-in {
  0% {
    top: 20px;
    left: calc(20px + 100%);
    right: calc(20px - 100%);
    bottom: 20px;
  }
  50% {
    top: 20px;
    left: calc(20px - 10px);
    right: calc(20px + 10px);
    bottom: 20px;
  }
  100% {
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
  }
}
@keyframes bounce-out {
  0% {
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
  }
  100% {
    top: 20px;
    left: calc(20px + 100%);
    right: calc(20px - 100%);
    bottom: 20px;
  }
}

.font-container--dialog--spec {
  flex-grow: 1;
  overflow: hidden;
}
</style>
