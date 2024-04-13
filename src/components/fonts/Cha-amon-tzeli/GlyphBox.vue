<template>
<div class="glyph-box">
    <div class="mapping-char"><span class="char-upper">{{ glyph }}</span>/<span class="char-lower">{{ glyph }}</span></div>

    <div class="mapped-char Cha-amon-tzeli--ProbingRamza"><span class="char-upper">{{ glyph }}</span> {{ glyph }}</div>
    <div class="mapped-char Cha-amon-tzeli--ProbingRamza">{{ glyph }}_ _{{ glyph }}_ _{{ glyph }} <template v-if="descender">~{{ glyph }}~ ~{{ glyph }}</template></div>
</div>
<div class="glyph-box--dummy">
</div>
</template>

<script>
export default {
    name: 'GlyphBox',
    components: {
    },
    props: {
        glyph: String,
        descender: Boolean,
    }
}
</script>

<style scoped>
.glyph-box {
    margin: 2px;
    border: solid 1px #cccccc;
    flex: 1 120px;
}
.glyph-box--dummy {
    order: 1;
    margin: 0 2px;
    display: block;
    flex: 1 120px;
}
.mapping-char {
    font-size: 12px;
    width: 4em;
    background-color: #999999;
    color: #f4f4f4;
    text-align: center;
}
.mapped-char {
    font-size: 24px;
}
.char-upper {
    text-transform: capitalize;
}
.char-lower {
    text-transform: lowercase;
}

</style>
