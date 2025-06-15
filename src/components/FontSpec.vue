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
        <div class="tabs-content--usage">
          <pre><SshPre language="css" label="example.css">@font-face {
    font-family: '{{ sampleClassName }}';
<slot name="usage"></slot>
}

.{{ sampleClassName }} {
    font-family: '{{ sampleClassName }}';
}</SshPre></pre>
          <pre><SshPre language="html" label="example.html">&lt;p class="{{ sampleClassName }}"&gt;Your text here.&lt;/p&gt;</SshPre></pre>
        </div>
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

.tabs-menu {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 8px 8px 0;
  border-bottom: 1px solid #ccc;
}

.tabs-menu--tab-item {
  padding: 8px 16px;
  cursor: pointer;
  font-weight: bold;
  color: #333;
}
.tabs-menu--tab-item._active {
  border-bottom: 2px solid #0550ae;
  color: #0550ae;
}
.tabs-menu--tab-item:hover {
  background-color: #f0f0f0;
}

.tabs-content {
  flex-grow: 1;
  overflow: auto;
}
.tabs-content--usage {
  padding: 0px 16px;
}

.ssh-pre {
  color: #1f2328;
}

.ssh-pre[data-type=html] .punctuation {
  color: #1f2328;
}

.ssh-pre[data-type=html] .tag-name {
  color: #0550ae;
}

.ssh-pre[data-type=html] .attribute {
  color: #6639ba;
}

.ssh-pre[data-type=html] .quote {
  color: #0a3069;
}


.ssh-pre[data-type=css] .punctuation {
  color: #1f2328;
}

.ssh-pre[data-type=css] .selector {
  color: #6639ba;
}

.ssh-pre[data-type=css] .attribute {
  color: #0550ae;
}

.ssh-pre[data-type=css] .attribute.keyword {
  color: #0550ae;
}

.ssh-pre[data-type=css] .value {
  color: #0550ae;
}

.ssh-pre[data-type=css] .value.keyword {
  color: #0550ae;
}

.ssh-pre[data-type=css] .quote {
  color: #0a3069;
}


</style>
  