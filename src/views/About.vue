<template>
    <div class="page__about">
      <Profile />
      <div class="about--experience">
        <h1>A brief history</h1>
        <TabCard :orientation="'vertical'"/>
      </div>     
    </div>
</template>

<script>
import Profile from '@/components/Profile.vue'
import TabCard from '@/components/TabCard.vue'

export default {
  name: 'About',
  components: {
      "Profile": Profile,
      "TabCard": TabCard,  
  }
}
</script>

<style scoped>
.page__about {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 30px;
  grid-row-gap: 0px;
}
.about__img-profile {
  grid-area: 1 / 1 / 2 / 2;
}

.about__description {
  grid-area: 1 / 2 / 2 / 3;
}

.about--experience {
  align-self: center;
  justify-self: center;
  grid-area: 2 / 1 / 3 / 3;
}

h1 {
  margin-top: 0;
  font-family: 'Domine-Bold';
  text-align: center;
  color: #c76f47;
}
</style>
  