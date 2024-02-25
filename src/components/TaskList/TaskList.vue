<template>
    <div class="">
      <div class="">
        <slot name="header" />
        <ul class="list-group">
          <TaskItem
            v-for="task in tasks"
            :key="task.id"
            :task="task"
            @taskCompleted="handleTaskCompleted"
            @taskDeleted="handleTaskDeleted"
          />
        </ul>
        <div v-if="tasks.length === 0" class="alert alert-danger" role="alert">No hay tareas en la lista.</div>
        <div class="row g-3">
          <p>Tareas Registradas: {{ totalTasks }}</p>
          <p>Tareas completadas: {{ completedTasks }}</p>
        </div>
        <div>
          <input v-model="newTaskTitle" class="form-control" placeholder="Nueva tarea" />
          <button @click="addTask" class="btn btn-outline-success">Agregar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { ref, computed } from 'vue';
  import TaskItem from './TaskItem.vue';
  
  export default {
    components: {
      TaskItem,
    },
    props: ['tasks'],
    setup(props, { emit }) {
      const newTaskTitle = ref('');
  
      const totalTasks = computed(() => props.tasks.length);
      const completedTasks = computed(() => props.tasks.filter((task: { completed: any; }) => task.completed).length);
  
      const addTask = () => {
        if (newTaskTitle.value.trim() !== '') {
          const newTask = {
            id: Date.now(),
            title: newTaskTitle.value.trim(),
            completed: false,
          };
          emit('taskAdded', newTask);
          newTaskTitle.value = '';
        }
      };
  
      const handleTaskCompleted = (taskId: any) => {
        emit('taskCompleted', taskId);
      };
  
      const handleTaskDeleted = (taskId: any) => {
        emit('taskDeleted', taskId);
      };
  
      return {
        newTaskTitle,
        totalTasks,
        completedTasks,
        addTask,
        handleTaskCompleted,
        handleTaskDeleted,
      };
    },
  };
  </script>
  

  