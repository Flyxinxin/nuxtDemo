<template>
    <span>
        this is Counter: {{ counter }}
    </span>
    <button @click="counter++">
        +
    </button>
    <button @click="counter--">
        -
    </button>
    <br>
    <slot />
    <br>
</template>

<script setup lang="ts">
const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>