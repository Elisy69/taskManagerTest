<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="appWrapper">
    <h1 class="headline">Welcome to your personal task📋 manager!</h1>
    <RouterLink to="/tasks"
      ><button class="goToTasks">Proceed to tasks 👉</button></RouterLink
    >
  </div>
</template>
<style scoped>
.appWrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 3rem;
}
.headline {
  text-align: center;
}
.goToTasks {
  font-size: 2rem;
}
</style>
