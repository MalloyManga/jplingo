<!-- LeftWord.vue -->
<script setup lang="ts">
import { useWordLogicStore } from '@/stores/word';
import WordCard from './WordCard.vue';

const logic = useWordLogicStore()

interface wordCn {
    contentCharacter: string
    wordId: number
}

const word: wordCn[] = [
    { contentCharacter: '日本', wordId: 3 },
    { contentCharacter: '我', wordId: 2 },
    { contentCharacter: '干净', wordId: 1 },
    { contentCharacter: '喜欢', wordId: 4 },    // 🔥 新增
    { contentCharacter: '书', wordId: 5 },      // 🔥 新增
    { contentCharacter: '读', wordId: 6 },      // 🔥 新增
]

const handleClick = (index: number, wordId: number) => {
    logic.handleLeftSelect(wordId)
    logic.handleLeftIsPressed(index)
    logic.handleWordLogic()
}
</script>

<template>
    <div class="grid gap-4">
        <WordCard v-for="(word, index) in word" :key="index" @word-card-click="handleClick(index, word.wordId)"
            :is-pressed="index == logic.pressedLeftBox" :is-wrong="logic.wrongLeftWordIndex == index"
            :is-correct="logic.correctLeftWordIndex == index" :num="index + 1" posi="left">
            <!-- 🔥 只传递 character 插槽，不传递 kana -->
            <template #character>
                {{ word.contentCharacter }}
            </template>
        </WordCard>
    </div>
</template>