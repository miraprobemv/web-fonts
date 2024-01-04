<template>
    <div class="input">
        <div>
            <input type="text" class="input--original" v-model="textValue" />
            <label class="input--size--container">Font size: <input type="number" class="input--size"
                    v-model="fontSizeValue" /></label>
            <button type="button" class="input--size--reset" v-on:click="resetFontSize"
                v-bind:disabled="fontSizeValue == defaultFontSize">Reset</button>
        </div>
        <div>
            <input type="text" class="input--web-font" v-model="textValue" v-bind:data-font="font"
                v-bind:style="{ 'font-size': `${fontSizeValue}px` }" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'FontSampleInput',
    props: {
        font: String,
        text: String,
        fontSize: Number,
        defaultFontSize: Number,
    },
    emits: ['update:text', 'update:fontSize'],
    computed: {
        textValue: {
            get() {
                return this.text
            },
            set(value) {
                this.$emit('update:text', value)
            }
        },
        fontSizeValue: {
            get() {
                return this.fontSize
            },
            set(value) {
                this.$emit('update:fontSize', value)
            }
        },
    },
    methods: {
        resetFontSize() {
            this.fontSizeValue = this.$props.defaultFontSize;
        }
    },
}
</script>

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
}</style>
  