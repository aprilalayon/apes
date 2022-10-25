<template>
  <div class="intro">
    <p>Hi, my name is</p>
    <h1>{{ name }}</h1>
    <p>
      I'm a front end engineer dedicated to designing and building accessible and functional digital experiences.
    </p>
  </div>
</template>
  
<script setup>
  defineProps({
    name: {
      type: String,
      required: true
    }
  })
</script>

<style scoped>
h1 {
  font-family: "Domine-Bold", Helvetica, Arial;
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

</style>
