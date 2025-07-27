<!-- WordCard.vue -->
<script setup lang="ts">
import { computed, ref, Transition, watch } from 'vue'
import Celebrate from './icons/Celebrate.vue'
import Celebrate2 from './icons/Celebrate2.vue'

type Posi = 'left' | 'right'

interface Props {
    isPressed?: boolean
    isWrong?: boolean
    isCorrect?: boolean  // 🔥 新增 props
    num?: number
    posi: Posi
}

const celebrateIconMap = { left: Celebrate, right: Celebrate2 }

const isCelebrate = ref(false)
const { isPressed = false, isWrong = false, isCorrect = false, num = 1, posi } = defineProps<Props>()
const posiClass = computed(() => {
    if (posi == 'left') {
        return 'rotate-45 -left-1/3'
    }
    else {
        return '-rotate-45 -right-1/3'
        // -scale-x-100 实现左右镜像翻转
    }
})


const cardStatusClass = computed(() => {
    if (isWrong) {
        return 'bg-[#FFDFE0] border-[#FFB2B2] shadow-[0_8px_#FFB2B2] text-[#EA2B2B]'        // 配对失败：红色
    }
    else if (isCorrect) {
        return 'bg-[#D7FFB8] border-[#A5ED6E] shadow-[0_8px_#A5ED6E] text-[#58A700]'      // 配对成功：深绿色
    }
    else if (isPressed) {
        return 'text-[#1899D6] bg-[#DDF4FF] border-[#84D8FF] shadow-[0_8px_#84D8FF]'      // 选中状态：浅绿色
    }
    else {
        return 'hover:bg-[#f7f7f7] border-[#E5E5E5] shadow-[0_8px_#E4E5E4]'  // 默认状态：悬停淡绿色
    }

})

const numStatusClass = computed(() => {
    if (isWrong) {
        return 'bg-[#FFDFE0] border-[#FFB2B2] text-[#EA2B2B]'        // 配对失败：红色
    }
    else if (isCorrect) {
        return 'bg-[#D7FFB8] border-[#A5ED6E] text-[#58A700]'      // 配对成功：深绿色
    }
    else if (isPressed) {
        return 'text-[#1899D6] bg-[#DDF4FF] border-[#84D8FF]'      // 选中状态：浅绿色
    }
    else {
        return 'text-[#AFAFAF] border-[#E5E5E5] shadow-[0_8px_#E4E5E4] hover:bg-[#f7f7f7]'  // 默认状态：悬停淡绿色
    }
})


const emit = defineEmits<{
    wordCardClick: []
}>()

watch(() => isCorrect, (newVal) => {
    if (newVal) {
        // 早该用 setTimeout 了
        isCelebrate.value = newVal
        setTimeout(() => { isCelebrate.value = false }, 450)
    }
})

</script>

<template>
    <button @click="emit('wordCardClick')" type="button" :class="cardStatusClass"
        class="relative flex justify-start items-center gap-4 border-2 px-5 py-3 text-xl cursor-pointer rounded-3xl transition-all duration-300">
        <Transition name="celebrate">
            <!-- name attr 用于定义效果名称 -->
            <!-- Transition 是仅仅用于切换之间的状态样式 切换完毕之后 就回归初始状态 -->
            <!-- <Celebrate :class="posiClass" v-if="true" class="absolute text-[#A5ED6E] stroke-3" /> -->
            <component v-if="isCelebrate" :class="posiClass" class="absolute text-[#A5ED6E] stroke-3"
                :is="celebrateIconMap[posi]"></component>
        </Transition>
        <span :class="numStatusClass"
            class="font-mono flex justify-center items-center border-2 rounded-lg px-2 shadow-none transition-all duration-300">
            {{ num }}
        </span>
        <div class="flex flex-col justify-center items-center">
            <span v-if="$slots.kana" class="text-[#AFAFAF] text-sm leading-3">
                <slot name="kana" />
            </span>
            <span class="flex justify-center items-center">
                <slot name="character">😉</slot>
            </span>
        </div>
    </button>

</template>


<style scoped>
.celebrate-enter-active {
    animation: celebrate 500ms ease-out forwards;
}

.celebrate-leave-active {
    display: none;
}

@keyframes celebrate {
    0% {
        scale: 0;
        opacity: 0;
    }

    50% {
        opacity: 1;
        scale: 1;
    }

    100% {
        opacity: 0;
        scale: 1.2;
    }
}
</style>