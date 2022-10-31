<template>
  <div class="intro">
  
    <div class="name__wrapper">
      <h3>Hi, my name is</h3>
      <h1>{{ name }}</h1>
      <h3>
        I'm a front end developer dedicated to designing and building accessible and fluent digital experiences
      </h3>
    </div>
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
.name__wrapper {
	display: flex;
  flex-direction: column;
}

h1 {
  font-family: 'Domine-Bold', serif;
  margin: 0 0 0 50px;
  font-size: 4rem;
}

h3 {
  padding-left: 30px;
  color: #2b6975;
}

h1 {
  color: #c76f47;
  --x-offset: -0.0625em;
  --y-offset: 0.0625em;
  --stroke: 0.025em;
  --background-color: white;
  --stroke-color: #acd7df;
  
  text-shadow: 
    var(--x-offset)
    var(--y-offset)
    0px
    var(--background-color), 
    
    calc( var(--x-offset) - var(--stroke) )
    calc( var(--y-offset) + var(--stroke) )
    0px
    var(--stroke-color);
}

/* mobile */
@media (max-width: 599px) {
  .name__wrapper {
    padding: 30px;
  }
  h1 {
    margin-left: 20px;
  }
  
  h3 {
    font-size: 1.4rem;
  }
}

/* tablet */
@media (min-width: 600px){
  h1 {
    font-size: 8rem;
  }
}

/* desktop */
@media (min-width: 1200px){
  h1 {
    font-size: 10rem;
  }
}


</style>
