<script setup lang="ts">
import { ref } from 'vue'
import WordBank from './components/WordBank.vue'
import WordCard from './components/WordCard.vue'
import Button from './components/Button.vue'
import Button2 from './components/Button2.vue'
import Button3 from './components/Button3.vue'
import RoadPath from './components/RoadPath.vue'





const beta = ref(false)

</script>

<template>
  <WordBank />
  <div class="h-screen flex justify-center items-center gap-20">
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

    <Button btn-content="跳过" />
    <Button2 btn2-content="检查" />
    <Button3 btn3-content="继续" />
    <RoadPath :is-finished="false" />
  </div>

</template>
