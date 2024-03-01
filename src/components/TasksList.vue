<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTasksStore } from "../stores/tasks";
import Task from "./Task.vue";
const tasksStore = useTasksStore();
const { tasks } = storeToRefs(tasksStore);
</script>
<template>
  <div class="tasksListWrapper">
    <Task v-for="task in tasks" :data="task" />
  </div>
</template>
<style scoped>
.tasksListWrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
