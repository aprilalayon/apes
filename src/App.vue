 <script setup>
import Header from './components/Header.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Header title="Pilot site" />
      <nav id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/projects">Projects</router-link>
      </nav>
      <router-view />
    </div>
  </header>
</template>

<style scoped>

</style>
