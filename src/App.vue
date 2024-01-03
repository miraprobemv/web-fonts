<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="TEST for WEB FONT" />
  <FontContainer font="Cha amon tzeli - ProbingRamza">
    <template v-slot="x">
      <FontHeader font-name="ProbingRamza" lang-name="ramza"
        v-bind:font="x.font"
        v-bind:is-expanded="x.isExpanded"
        v-bind:expand="x.expand" />
      <FontSampleInput default-text="Cya zhüliwyaa tzodëltak"
        v-bind:font="x.font" />
    </template>
    <template v-slot:expanded>
      <ProbingRamzaCharList />
    </template>
  </FontContainer>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FontContainer from './components/FontContainer.vue'
import FontSampleInput from './components/FontSampleInput.vue'
import FontHeader from './components/FontHeader.vue'
import ProbingRamzaCharList from './components/fonts/Cha-amon-tzeli/ProbingRamzaCharList.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    FontContainer,
    FontHeader,
    FontSampleInput,
    ProbingRamzaCharList,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
