<template>
    <FontContainer
        font="Cha-amon-tzeli--ProbingRamza"
        font-name="Probing Ramza" lang-name="cya amon tzeli" system-name="ramza"
        default-text="Chümierien cya umoilugau li uzla moktë ditzel, gaz olmaar dwa altë. uzla moktë lour gilewk li nomaya.">
        <Spec />
    </FontContainer>
</template>

<script>
import FontContainer from '@/components/FontContainer.vue'
import Spec from './Spec.vue';

export default {
    name: 'ProbingRamzaContanier',
    components: {
        FontContainer,
        Spec,
    }
}
</script>

<style scoped>

</style>
    