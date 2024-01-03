<template>
    <div class="font-header">
      <h2>
        <span>{{ fontName }}</span>
        <span v-if="!!langName" v-bind:data-font="font">{{ langName }}</span>
        <span v-else>{{ altLangName }}</span>
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
  }
}
</script>

<style>
.font-header {
    width: 100%;
}
</style>
  