<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="TEST for WEB FONT"/>
  <FontHeader font-name="ProbingRamza" lang-name="ramza" font="Cha amon tzeli - ProbingRamza" />
  <FontSampleInput font="Cha amon tzeli - ProbingRamza" default-text="Cya zhüliwyaa tzodëltak" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FontSampleInput from './components/FontSampleInput.vue'
import FontHeader from './components/FontHeader.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    FontHeader,
    FontSampleInput
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
