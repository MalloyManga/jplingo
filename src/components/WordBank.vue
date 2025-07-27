<!-- WordBank.vue -->
<script setup lang="ts">
import LeftWord from './LeftWord.vue';
import RightWord from './RightWord.vue';
</script>

<template>
    <div class="h-screen flex justify-center items-center">
        <div class="grid grid-cols-2 gap-4 p-6 border-2 border-[#E4E5E4] rounded-lg backdrop-blur-xs">
            <LeftWord />
            <RightWord />
        </div>
        
    </div>
</template>
