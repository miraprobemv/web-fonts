<template>
<FontSpec sample-class-name="Cha-amon-tzeli--ProbingRamza">
    <template v-slot:character-list>
        <GlyphList>
            <GlyphBox glyph="a" /><GlyphBox glyph="ä" /><GlyphBox glyph="b"/><GlyphBox glyph="v" /><GlyphBox glyph="g" /><GlyphBox glyph="d" /><GlyphBox glyph="dy" />
            <GlyphBox glyph="e"/><GlyphBox glyph="h" /><GlyphBox glyph="u" /><GlyphBox glyph="ü" /><GlyphBox glyph="w" /><GlyphBox glyph="z" /><GlyphBox glyph="zh" /><GlyphBox glyph="ch" /><GlyphBox glyph="dz" /><GlyphBox glyph="ë" /><GlyphBox glyph="i" /><GlyphBox glyph="y" />
            <GlyphBox glyph="k" /><GlyphBox glyph="l"/><GlyphBox glyph="m" /><GlyphBox glyph="n" /><GlyphBox glyph="s" /><GlyphBox glyph="o" /><GlyphBox glyph="ö" /><GlyphBox glyph="p" />
            <GlyphBox glyph="f" /><GlyphBox glyph="t"/><GlyphBox glyph="ts" /><GlyphBox glyph="ty" /><GlyphBox glyph="c" /><GlyphBox glyph="r" /><GlyphBox glyph="cy" /><GlyphBox glyph="t" />
        </GlyphList>
    </template>
    <template v-slot:usage><pre>    src: url('https://miraprobemv.github.io/web-fonts/fonts/Cha-amon-tzeli/ProbingRamza.woff2') format('woff2');</pre></template>
</FontSpec>
</template>

<script>
import FontSpec from '@/components/FontSpec.vue';
import GlyphBox from './GlyphBox.vue';
import GlyphList from '@/components/GlyphList.vue'

export default {
    name: 'ProbingRamzaSpec',
    components: {
        FontSpec,
        GlyphList,
        GlyphBox,
    }
}
</script>

<style scoped>

</style>
