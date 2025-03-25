<template>
  <div>
    <h1>welcome my page</h1>
    <MyAlert />
    <NuxtLink to="/about">to about</NuxtLink>

    <br />
    <NuxtLink
      v-for="id in postArr"
      :key="id"
      :to="`/posts/${id}`"
      class="post-link"
    >
      to posts{{ id }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import MyAlert from "~/components/MyAlert.vue";

const postArr = [1, 2, 3, 4];
// const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>

<style scoped>
.post-link {
  display: block;
  margin-bottom: 10px;
}
</style>
