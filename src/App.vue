<template>
  <h2 class="language">Cha amon tzeli / Ramza</h2>
  <FontContainer
    font="Cha-amon-tzeli--ProbingRamza"
    font-name="Probing Ramza" lang-name="cya amon tzeli" system-name="ramza"
    default-text="Chümierien cya umoilugau li uzla moktë ditzel, gaz olmaar dwa altë. uzla moktë lour gilewk li nomaya.">
    <ProbingRamzaSpec />
  </FontContainer>
  <h2 class="language">vaakšar / iiša</h2>
</template>

<script>
import FontContainer from '@/components/FontContainer.vue'

import ProbingRamzaSpec from '@/components/fonts/Cha-amon-tzeli/ProbingRamzaSpec.vue';

export default {
  name: 'App',
  components: {
    FontContainer,
    ProbingRamzaSpec,
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
