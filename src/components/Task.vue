<script setup lang="ts">
const props = defineProps(["data"]);
import { computed } from "vue";
import { useTasksStore } from "../stores/tasks";
const { deleteTask, toggleTask, openModal } = useTasksStore();

let doneText = computed(() => {
  return props.data.isDone ? "Revive" : "Finish";
});
</script>
<template>
  <div class="taskWrapper">
    <main>
      <button
        @click="toggleTask(data.id)"
        :class="[data.isDone ? `done` : `pending`]"
      >
        {{ doneText }}
      </button>
      <span :class="{ crossed: data.isDone }" class="text">{{
        data.name
      }}</span>
    </main>
    <menu>
      <button @click="openModal(data.id)">Edit</button>
      <button @click="deleteTask(data.id)">X</button>
    </menu>
  </div>
</template>
<style scoped>
main {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
menu {
  display: flex;
  gap: 0.5rem;
  margin: 0;
  margin-left: auto;
}
.taskWrapper {
  border: 2px solid black;
  border-radius: 0.9rem;
  padding: 1rem;
  display: flex;
  gap: 1rem;
}
.crossed {
  text-decoration: line-through;
}
.done {
  background-color: red;
}
.pending {
  background-color: green;
}
</style>
