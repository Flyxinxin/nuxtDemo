<template>
    <div>
      <h1>welcome my page</h1>
      <Alert/>
      <NuxtLink to="/about">to about</NuxtLink>
      <br>
      <NuxtLink to="/posts/1">to posts1</NuxtLink>
    </div>
  </template>

<script setup lang="ts">
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from '../app.vue'
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

// const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>