<!-- RoadPath.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import Check from './icons/Check.vue'
import Gloss from './icons/Gloss.vue'
import GoldCheck from './icons/GoldCheck.vue'

interface Prop {
    isFinished: boolean
}

const { isFinished = false } = defineProps<Prop>()

const checkIcon = computed(() => {
    return isFinished ? GoldCheck : Check
})
const buttonStyle = computed(() => {
    return isFinished ? 'bg-[#FFC800] shadow-[0_6px_#E6A100] hover:shadow-[0_5px_#CCA000]' : 'bg-[#1CB0F6] shadow-[0_6px_#168DC5] hover:shadow-[0_5px_#168DC5]'
})
const glossStyle = computed(() => {
    return isFinished ? 'text-[#FFE700]' : 'text-white/20'
})

</script>

<template>
    <div class="inline-block size-fit relative">
        <button type="button" :class="buttonStyle"
            class="flex justify-center items-center w-17.5 h-14.25 rounded-[50%] cursor-pointer hover:translate-y-[1px] active:shadow-none active:translate-y-[5px]">
            <component :is="checkIcon" class="absolute z-2" />
            <Gloss :class="glossStyle" class="absolute z-1" />
        </button>
    </div>
</template>
