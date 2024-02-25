<template>
    <li class="list-group-item d-flex justify-content-between align-items-center list ">
      <input type="checkbox" v-model="task.completed" @change="handleTaskCompleted" />
      <span :class="{ 'text-muted': task.completed }">{{ task.title }}  {{task.Descripcion}}</span>
      <button @click="deleteTask" class="btn btn-danger">Eliminar</button>
    </li>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: ['task'],
    emits: ['taskCompleted', 'taskDeleted'],
    methods: {
      handleTaskCompleted() {
        this.$emit('taskCompleted', this.task.id);
      },
      deleteTask() {
        this.$emit('taskDeleted', this.task.id);
      },
    },
  });
  </script>
  
  <style scoped>
.list{
 display:contents;
 background-color: rgb(124, 124, 124);
 color: aliceblue;
 padding: 1rem;

}
  </style>
  