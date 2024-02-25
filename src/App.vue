<script lang="ts">
import { ref } from 'vue';
import TaskList from './components/TaskList/TaskList.vue';

export default {
  components: {
    TaskList,
  },
  setup() {
    const tasks = ref([
      { id: 1, title: 'Tarea de Vue3 Examen(lISTA DE TAREAS)', completed: false },
     
    ]);

    const addTask = (newTask: { id: number; title: string; completed: boolean; }) => {
      tasks.value.push(newTask);
    };

    const completeTask = (taskId: number, emit: (arg0: string, arg1: any) => void) => {
      console.log('completeTask called with taskId:', taskId);
      const taskIndex = tasks.value.findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
        tasks.value[taskIndex].completed = !tasks.value[taskIndex].completed;
      }
      emit('taskCompleted', taskId);
    };

    const deleteTask = (taskId: number) => {
      tasks.value = tasks.value.filter(task => task.id !== taskId);
    };

    return {
      tasks,
      addTask,
      completeTask,
      deleteTask,
    };
  },
};
</script>

<template>
  <div>
    <TaskList :tasks="tasks" @taskAdded="addTask" @taskCompleted="completeTask" @taskDeleted="deleteTask">
      <template v-slot:header>
        <h1 >Agenda Smart </h1>
        <h2>Lista de Tarea Registras</h2>
      </template>
    </TaskList>
  </div>
</template>






