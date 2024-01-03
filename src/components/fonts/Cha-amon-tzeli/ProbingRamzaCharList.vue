<template>
<div>
    <div v-if="isExpanded" class="ProbingRamza-char-list">
        TEST
    </div>
</div>
</template>

<script>
export default {
    name: 'ProbingRamzaCharList',
    props: {
        isExpanded: Boolean,
    }
}
</script>

<style>
.ProbingRamza-char-list {
    width: 100%;
    border: solid 1px #bdc0c2;
    background-color: #b3d6ec;
}
</style>
