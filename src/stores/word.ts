import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWordLogicStore = defineStore('logic', () => {

    // 定义已经点击的盒子
    const pressedRightBox = ref<number | null>()
    const pressedLeftBox = ref<number | null>()

    // 判断是否选中了的状态变量 boolean
    const isLeftSelected = ref(false)
    const isRightSelected = ref(false)

    // 赋值选中的单词的赋值Id
    const leftWordId = ref<number | null>()
    const rightWordId = ref<number | null>()

    // 错误状态 
    const wrongLeftWordIndex = ref<number | null>()
    const wrongRightWordIndex = ref<number | null>()

    // 🔥 新增正确状态
    const correctLeftWordIndex = ref<number | null>()
    const correctRightWordIndex = ref<number | null>()

    // 定义对于已经点击了的盒子的处理
    const handleRightIsPressed = (param: number) => {
        if (pressedRightBox.value == param) {
            pressedRightBox.value = null
            reset()
        }
        else {
            pressedRightBox.value = param
        }
    }
    const handleLeftIsPressed = (param: number) => {
        if (pressedLeftBox.value == param) {
            pressedLeftBox.value = null
            reset()
        }
        else {
            pressedLeftBox.value = param
        }
    }

    // 定义对于是否选中的处理
    const handleLeftSelect = (wordId: number) => {
        isLeftSelected.value = true
        leftWordId.value = wordId
    }
    const handleRightSelect = (wordId: number) => {
        isRightSelected.value = true
        rightWordId.value = wordId
    }

    // 对于逻辑的判断 
    const handleWordLogic = () => {
        if (isLeftSelected.value && isRightSelected.value) {
            if (leftWordId.value === rightWordId.value) {
                // 正确
                console.log('配对成功');
                correctLeftWordIndex.value = pressedLeftBox.value    // 🔥 设置正确状态
                correctRightWordIndex.value = pressedRightBox.value
                setTimeout(() => {
                    reset()
                }, 500)
            }
            else {
                // 错误
                console.log('配对失败');
                wrongLeftWordIndex.value = pressedLeftBox.value
                wrongRightWordIndex.value = pressedRightBox.value
                setTimeout(() => {
                    reset()
                }, 500)
            }
        }
    }

    // 消除的逻辑


    const reset = () => {
        isLeftSelected.value = false
        isRightSelected.value = false
        pressedRightBox.value = null
        pressedLeftBox.value = null
        wrongLeftWordIndex.value = null
        wrongRightWordIndex.value = null
        correctLeftWordIndex.value = null
        correctRightWordIndex.value = null
        leftWordId.value = null
        rightWordId.value = null
    }

    return {
        pressedRightBox,
        pressedLeftBox,
        isLeftSelected,
        isRightSelected,
        wrongLeftWordIndex,
        wrongRightWordIndex,
        correctLeftWordIndex,    // 🔥 导出正确状态
        correctRightWordIndex,
        handleRightIsPressed,
        handleLeftIsPressed,
        handleLeftSelect,
        handleRightSelect,
        handleWordLogic,
    }

})