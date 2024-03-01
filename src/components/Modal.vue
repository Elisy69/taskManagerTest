<script setup lang="ts">
import { ref, onBeforeUnmount } from "vue";
import { storeToRefs } from "pinia";
import { useTasksStore } from "../stores/tasks";
const tasksStore = useTasksStore();
const { closeModal, renameTask } = useTasksStore();
const { taskToEditId } = storeToRefs(tasksStore);

let newTaskText = ref("");

function handleRename() {
  if (newTaskText.value) {
    renameTask(taskToEditId.value, newTaskText.value);
    closeModal();
  }
}

onBeforeUnmount(() => {
  newTaskText.value = "";
});
</script>
<template>
  <div class="modalWrapper">
    <h3>Rename task</h3>
    <div class="renameForm">
      <input class="renameInput" v-model="newTaskText" type="text" />
      <button @click="handleRename">OK</button>
    </div>
    <button class="closeModalBtn" @click="closeModal">Close</button>
  </div>
</template>
<style scoped>
h3 {
  margin: 0;
  text-align: center;
  color: black;
}
.renameInput {
  font-size: 1.2rem;
}
.modalWrapper {
  margin-top: 10rem;
  z-index: 10;
  position: absolute;
  background-color: gainsboro;
  padding: 1.5rem;
  border: 3px solid black;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.renameForm {
  display: flex;
  gap: 1rem;
}
.closeModalBtn {
  align-self: center;
}
</style>
