<!-- MouseMove.vue -->
<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';

const isMovable = ref(false)
const mousePositionX = ref(0)
const mousePositionY = ref(0)
const mouseMoveDistanceX = ref(0)
const mouseMoveDistanceY = ref(0)
const cardMoveDistanceX = ref(0)
const cardMoveDistanceY = ref(0)

const moveableElement = useTemplateRef('moveableElement')

const mouseDown = (e: MouseEvent) => {
    isMovable.value = true;
    mousePositionX.value = e.clientX
    mousePositionY.value = e.clientY
}

const mouseUp = () => {
    isMovable.value = false;
}

const mouseOut = () => {
    isMovable.value = false;
}

const mouseMove = (e: MouseEvent) => {
    if (isMovable.value && moveableElement.value) {
        mouseMoveDistanceX.value = e.clientX - mousePositionX.value
        mouseMoveDistanceY.value = e.clientY - mousePositionY.value
        cardMoveDistanceX.value += mouseMoveDistanceX.value
        cardMoveDistanceY.value += mouseMoveDistanceY.value
        moveableElement.value.style.transform = `translate(${cardMoveDistanceX.value}px, ${cardMoveDistanceY.value}px)`
    }
    mousePositionX.value = e.clientX
    mousePositionY.value = e.clientY
}
</script>

<template>
    <div ref="moveableElement" @mousemove="mouseMove" @mousedown="mouseDown" @mouseup="mouseUp" @mouseout="mouseOut"
        class="select-none cursor-move">
        <slot />
    </div>
</template>
