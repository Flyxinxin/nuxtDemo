<template>
  <span> Count: {{ counter.count }} </span>
  <span> Double count: {{ counter.doubleCount }} </span>
  <button @click="counter.increment">+</button>
  <button @click="counter.decrement">-</button>
  <br >
  <slot />
  <br >
</template>

<script setup lang="ts">
import { useCounterStore } from "~/store/counterStore";
const counter = useCounterStore();
// const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>
