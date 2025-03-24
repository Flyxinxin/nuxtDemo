<template>
  <div>
    <h1>Post</h1>
    <h2>title 1</h2>
    <p>routeId: {{route.params.id}}</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)

</script>

