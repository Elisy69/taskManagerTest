import { ref, computed } from "vue";
import { defineStore } from "pinia";

type Task = {
  id: number;
  name: string;
  isDone: boolean;
};

let id = 1;

export const useTasksStore = defineStore(
  "tasks",
  () => {
    const tasks = ref<Task[]>([]);
    let isModalOpen = ref(false);
    let taskToEditId = ref(0);
    function addTask(name: string) {
      tasks.value.push({ id: id++, name, isDone: false });
    }
    function deleteTask(id: number) {
      tasks.value = tasks.value.filter((t) => t.id !== id);
    }
    function toggleTask(id: number) {
      tasks.value = tasks.value.map((t: Task) => {
        return t.id === id ? { ...t, isDone: !t.isDone } : t;
      });
    }
    function renameTask(id: number, name: string) {
      tasks.value = tasks.value.map((t: Task) => {
        return t.id === id ? { ...t, name } : t;
      });
    }
    function openModal(id: number) {
      taskToEditId.value = id;
      isModalOpen.value = true;
    }
    function closeModal() {
      taskToEditId.value = 0;
      isModalOpen.value = false;
    }

    return {
      tasks,
      addTask,
      deleteTask,
      toggleTask,
      renameTask,
      taskToEditId,
      isModalOpen,
      openModal,
      closeModal,
    };
  },
  { persist: true },
);
