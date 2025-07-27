<!-- Button2.vue -->
<script setup lang="ts">
interface Prop {
    btn2Content: string
}

const { btn2Content = '检查' } = defineProps<Prop>()


</script>

<template>
    <button type="button"
        class="bg-[#58CC02] border-2 border-[#58CC02] px-16 py-4 rounded-[20px] shadow-[0_6px_#58A700] text-white font-bold cursor-pointer transition-all duration-75 active:translate-y-1 active:shadow-none">
        {{ btn2Content }}
    </button>

</template>