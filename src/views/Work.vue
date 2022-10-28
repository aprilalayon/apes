<template>
    <div class="work">
      <h1>Selection of projects I designed and built</h1>
      <Card
        v-for="work in workData"
        :title="work.title"
        :url="work.url"
        :imgUrl="work.imgUrl"
        :alt="work.alt"
        :stacks="work.stacks"
        :description="work.description"
      />
    </div>
</template>

<script>
import cedarside from "@/assets/images/cedarside.png"
import sixlegsgood from "@/assets/images/sixlegs.png"
import Card from "@/components/Card.vue"

export default {
  components: {
      "Card": Card,
  },
  data() {
    return {
      workData: [
        {
          title: "Cedarside Coach House",
          imgUrl: cedarside,
          url: "https://www.cedarside.com/",
          stacks: [
            "HTML", "SASS", "Javascript", "WordPress", "jQuery",
          ],
          description: "I worked with a family-owned Bed and Breakfast business in the Sunshine Coast to modernize their website. The owners of Cedarside Coach House wanted to overhaul their website that had been the same for the past 15 years. I worked with two student web designers to achieve a modern look and feel of the website. During the design process, we created style and branding guides, built the website and had an ongoing communication with the clients to ensure that we are achieving their goals as a business. We implemented a design that would highlight the beauty of their location and a mobile-friendly site for travelling visitors.",
          tag: "dev",
        },
        {
          title: "Six Legs Good Apiaries",
          imgUrl: sixlegsgood,
          url: "https://www.sixlegsgood.com/",
          stacks: [
            "HTML", "SASS", "Javascript", "WordPress", "jQuery",
          ],
          description: "Six Legs Good Apiaries is a small beekeeping business in East Vancouver. They are a husband and wife who wanted a logo for their business. The logo was created in 2016 and the website launched in 2019. In this project, I illustrated them in their beekeeping uniforms surrounded by dandelions. This is a monochromatic design to be able to transfer on their merchandise easily. The website design was a collaborative work to achieve more visibility and wider reach of potential customers on the web and social media.",
          tag: "dev",
        },
      ]
    }
  }
}

</script>

<style scoped>

.work {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 25px;
}
h1 { 
  font-family: 'Domine-Bold';
  grid-area: 1 / 1 / 7 / 2;
}

</style>