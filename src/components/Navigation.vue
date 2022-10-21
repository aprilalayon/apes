<template>
    <nav id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/projects">Projects</router-link>
    </nav>

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
        font-family: "Domine-Bold", Helvetica, Arial;
        font-size: 2.6rem;
    }

</style>
  