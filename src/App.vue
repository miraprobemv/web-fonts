<template>
  <FontContainer
    font="Cha amon tzeli - ProbingRamza"
    font-name="Probing Ramza" lang-name="Cha amon tzeli &nbsp; ramza"
    default-text="Cya zhüliwyaa tzodëltak">
    <ProbingRamzaCharList />
  </FontContainer>
</template>

<script>
import FontContainer from './components/FontContainer.vue'
import ProbingRamzaCharList from './components/fonts/Cha-amon-tzeli/ProbingRamzaCharList.vue'

export default {
  name: 'App',
  components: {
    FontContainer,
    ProbingRamzaCharList,
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
