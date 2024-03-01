<script setup lang="ts">
import { ref } from "vue";
import { useTasksStore } from "../stores/tasks";
const { addTask } = useTasksStore();

const name = ref<string>("");
function handleAddTask(task: string) {
  if (task) {
    addTask(task);
    name.value = "";
  }
}
</script>
<template>
  <form class="newTaskForm" @submit.prevent="handleAddTask(name)">
    <input class="newTaskForm__input" v-model="name" type="text" />
    <button type="submit">Add task</button>
  </form>
</template>
<style scoped>
.newTaskForm {
  display: flex;
  gap: 2rem;
}
.newTaskForm__input {
  border-radius: 1rem;
  font-size: 1rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
}
</style>
