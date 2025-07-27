<script setup lang="ts">
import { ref } from 'vue';
import WordBank from './components/WordBank.vue';
import WordCard from './components/WordCard.vue';

const beta = ref(false)

</script>

<template>
  <WordBank />
  <!-- <div class="h-screen flex justify-center items-center gap-20">
    <WordCard @word-card-click="beta = !beta" :is-correct="beta" posi="right">
      <template #kana>
        にほん
      </template>
      <template #character>
        日本
      </template>
    </WordCard>

    <WordCard @word-card-click="beta = !beta" :is-correct="beta" posi="left">
      <template #kana>
        にほん
      </template>
      <template #character>
        日本
      </template>
    </WordCard>
  </div> -->

</template>
