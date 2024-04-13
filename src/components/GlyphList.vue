<template>
<div class="glyph-list--container">
<div class="glyph-list">
    <slot></slot>
</div>
</div>
</template>

<script>
export default {
    name: 'GlyphList',
    components: {
    },
    props: {
    }
}
</script>

<style scoped>
.glyph-list {
    margin: 8px;
    display: flex;
    flex-wrap: wrap;
    border: solid 1px #cccccc;
}
</style>
