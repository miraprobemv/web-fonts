<template>
<FontSpec>
    <template v-slot:character-list>
        CHARACTER LIST IS HERE
    </template>
    <template v-slot:usage>
        USAGE IS HERE
    </template>
</FontSpec>
</template>

<script>
import FontSpec from '@/components/FontSpec.vue';
export default {
    name: 'ProbingRamzaSpec',
    components: {
        FontSpec,
    }
}
</script>

<style scoped>

</style>
