<!-- Button.vue -->
<script setup lang="ts">
interface Prop {
    btnContent: string
}

const { btnContent = '跳过' } = defineProps<Prop>()

</script>

<template>
    <button type="button"
        class="bg-white border-2 border-[#E5E5E5] px-16 py-4 rounded-[20px] shadow-[0_4px_#E5E5E5] text-[#AFAFAF] font-bold cursor-pointer transition-all duration-75 active:translate-y-1 active:shadow-none">
        {{ btnContent }}
    </button>

</template>