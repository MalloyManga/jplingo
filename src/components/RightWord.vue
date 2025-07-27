<!-- RightWord.vue -->
<script setup lang="ts">
import { useWordLogicStore } from '@/stores/word';
import WordCard from './WordCard.vue';

const logic = useWordLogicStore()

interface wordJp {
    contentCharacter: string  // 日文汉字
    contentKana: string       // 假名
    wordId: number
}

const word: wordJp[] = [
    { contentCharacter: '本', contentKana: 'ほん', wordId: 5 },        // 🔥 新增
    { contentCharacter: '読む', contentKana: 'よむ', wordId: 6 },      // 🔥 新增
    { contentCharacter: '好き', contentKana: 'すき', wordId: 4 },      // 🔥 新增
    { contentCharacter: '綺麗', contentKana: 'きれい', wordId: 1 },
    { contentCharacter: '私', contentKana: 'わたし', wordId: 2 },
    { contentCharacter: '日本', contentKana: 'にほん', wordId: 3 },
]

const handleClick = (index: number, wordId: number) => {
    logic.handleRightSelect(wordId)
    logic.handleRightIsPressed(index)
    logic.handleWordLogic()
}
</script>

<template>
    <div class="grid gap-4"> <!-- 🔥 改为 6 行 -->
        <WordCard v-for="(word, index) in word" :key="index" @word-card-click="handleClick(index, word.wordId)"
            :is-pressed="index == logic.pressedRightBox" :is-wrong="logic.wrongRightWordIndex == index"
            :is-correct="logic.correctRightWordIndex == index" :num="index + 1" posi="right">
            <template #kana>
                {{ word.contentKana }}
            </template>
            <template #character>
                {{ word.contentCharacter }}
            </template>
        </WordCard>
    </div>
</template>