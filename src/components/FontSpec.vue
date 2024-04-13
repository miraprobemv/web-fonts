<template>
  <section class="font-spec">
    <ul class="tabs-menu">
      <li class="tabs-menu--tab-item"
        v-bind:class="{ '_active': currentTab === 'character-list' }"
        v-on:click="currentTab = 'character-list'"
      >Character List</li>
      <li v-if="$slots.writingSystem" class="tabs-menu--tab-item"
        v-bind:class="{ '_active': currentTab === 'writing-system' }"
        v-on:click="currentTab = 'writing-system'"
      >Writing System</li>
      <li v-if="$slots.usage" class="tabs-menu--tab-item"
        v-bind:class="{ '_active': currentTab === 'usage' }"
        v-on:click="currentTab = 'usage'"
      >Usage</li>
    </ul>
    <div class="tabs-content">
      <template v-if="currentTab === 'character-list'">
        <slot name="character-list"></slot>
      </template>
      <template v-if="currentTab === 'usage'">
        <pre><SshPre language="css" label="example.css">@font-face {
    font-family: '{{ sampleClassName }}';
<slot name="usage"></slot>
}

.{{ sampleClassName }} {
    font-family: '{{ sampleClassName }}';
}</SshPre></pre>
        <pre><SshPre language="css" label="example.html">&lt;p class="{{ sampleClassName }}"&gt;Your text here.&lt;/p&gt;</SshPre></pre>
      </template>
    </div>
  </section>
</template>

<script>
import SshPre from 'simple-syntax-highlighter';
import 'simple-syntax-highlighter/dist/sshpre.css';

export default {
  name: 'FontSpec',
  components: {
    SshPre,
  },
  props: {
    sampleClassName: String,
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
.font-spec {
  display: flex;
  flex-flow: column;
  height: 100%;
}
.font-header {
  width: 100%;
}
.tabs-content {
  flex-grow: 1;
  overflow: auto;
}
</style>
  