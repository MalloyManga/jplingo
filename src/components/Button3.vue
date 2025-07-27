<!-- Button3.vue -->
<script setup lang="ts">
interface Prop {
    btn3Content: string
}

const { btn3Content = '检查' } = defineProps<Prop>()



</script>

<template>
    <button type="button"
        class="bg-[#FF4B4B] border-2 border-[#FF4B4B] px-16 py-4 rounded-[20px] shadow-[0_6px_#EA2B2B] text-white font-bold cursor-pointer transition-all duration-75 active:translate-y-1 active:shadow-none">
        {{ btn3Content }}
    </button>

</template>