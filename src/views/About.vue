<template>
    <div class="page__about">
      <Profile />
      <TabCard :orientation="vertical"/>
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
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 0px;
}
</style>
  