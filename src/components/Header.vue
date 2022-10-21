<template>
    <div class="header">
      <h1>{{ title }}</h1>
    </div>
  
  </template>
  
  <script setup>
    defineProps({
      title: {
        type: String,
        required: true
      }
    })
  </script>
  
  <style scoped>
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
  }

  </style>
  