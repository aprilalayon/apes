<template>
  <header>
    <router-link to="/">
      <img 
        class="logo"
        alt="logo"
        :src="logo"
      />
    </router-link>
    <Navigation />
  </header>
  <div class="wrapper">
    <router-view />
  </div>
</template>

<script setup>
import Navigation from '@/components/Navigation.vue'
import logo from '@/assets/images/logo.svg'
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 80px;
  height: 80px;
}
</style>
