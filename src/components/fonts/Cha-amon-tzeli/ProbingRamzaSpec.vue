<template>
<FontSpec>
    <template v-slot:character-list>
        CHARACTER LIST IS HERE
    </template>
    <template v-slot:usage>
        USAGE IS HERE
        <pre><SshPre language="css" label="example.css">@font-face {
    font-family: 'Cha-amon-tzeli--ProbingRamza';
    src: url('@/assets/fonts/Cha-amon-tzeli/ProbingRamza.woff2') format('woff2');
}

[data-font="Cha-amon-tzeli--ProbingRamza"] {
    font-family: 'Cha-amon-tzeli--ProbingRamza';
}</SshPre></pre>

    </template>
</FontSpec>
</template>

<script>
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'

import FontSpec from '@/components/FontSpec.vue';
export default {
    name: 'ProbingRamzaSpec',
    components: {
        FontSpec,
        SshPre,
    }
}
</script>

<style scoped>

</style>
