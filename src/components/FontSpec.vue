<template>
  <section class="font-spec">
    <ul class="tabs-menu">
      <li class="tabs-menu--tab-item"
        v-bind:class="{ '_active': currentTab === 'character-list' }"
        v-on:click="currentTab = 'character-list'"
      >Character List</li>
      <li v-if="$slots.writingSystem" class="tabs-menu--tab-item"
        v-bind:class="{ '_active': currentTab === 'writing-system' }"
        v-on:click="currentTab = 'writingSystem'"
      >Writing System</li>
      <li v-if="$slots.usage" class="tabs-menu--tab-item"
        v-bind:class="{ '_active': currentTab === 'usage' }"
        v-on:click="currentTab = 'usage'"
      >Usage</li>
    </ul>
    <div class="tabs-content">
      <slot v-bind:name="currentTab"></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FontSpec',
  props: {
  },
  data() {
    return {
      currentTab: 'character-list',
    };
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
  