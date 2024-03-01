<script setup lang="ts">
import SubmitForm from "@/components/SubmitForm.vue";
import TasksList from "@/components/TasksList.vue";
import Modal from "@/components/Modal.vue";

import { storeToRefs } from "pinia";
import { useTasksStore } from "../stores/tasks";
const tasksStore = useTasksStore();
const { isModalOpen } = storeToRefs(tasksStore);
</script>
<template>
  <div class="tasksWrapper">
    <h2>TASKS MANAGER</h2>
    <SubmitForm />
    <TasksList />
    <Modal v-if="isModalOpen" />
    <div v-if="isModalOpen" class="overlay"></div>
  </div>
</template>

<style scoped>
.tasksWrapper {
  position: relative;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.overlay {
  background: black;
  opacity: 40%;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 9;
}
</style>
