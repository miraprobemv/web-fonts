<template>
<div class="hello">
    <div>
        <input type="text" class="input--original" v-model="textValue" />
        <label class="input--size--container">Font size: <input type="number" class="input--size" v-model="fontSizeValue" /></label>
        <button type="button" class="input--size--reset" v-on:click="resetFontSize" v-bind:disabled="fontSize == fontSizeValue">Reset</button>
    </div>
    <div>
        <input type="text" class="input--web-font" v-model="textValue" v-bind:data-font="font" v-bind:style="{'font-size': `${fontSizeValue}px`}" />
    </div>
</div>
</template>

<script>
export default {
    name: 'FontSampleInput',
    props: {
        defaultText: String,
        font: String,
        fontSize: {
            type: Number,
            default: 36,
        }
    },
    data() {
        return {
            textValue: this.$props.defaultText,
            fontSizeValue: this.$props.fontSize,
        }
    },
    methods: {
        resetFontSize() {
            this.fontSizeValue = this.$props.fontSize;
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input--original {
    width: calc(100% - 220px - 60px);
}
.input--size--reset {
    width: 60px;
}
.input--size--container {
    display: inline-block;
    width: 220px;
    text-align: right;
}
.input--size {
    width: 4em;
}
.input--web-font {
    width: 100%;
}
</style>
  