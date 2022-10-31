<template>
    <div class="page__work">
      <h1>Selected projects I designed and built</h1>
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
          title: "Shopping List Generator",
          imgUrl: sixlegsgood,
          url: "https://aprilalayon.github.io/shoppinglist/",
          stacks: [
            "React", "Javascript", "CSS",
          ],
          description: "Getting ready to head out and go shopping? Make a list for things you need to buy and remove them as you pick up your items in the store. This application was created using React and CSS.",
          tag: "dev",
        },
        {
          title: "Cedarside Coach House",
          imgUrl: cedarside,
          url: "https://www.cedarside.com/",
          stacks: [
            "HTML", "SASS", "Javascript", "WordPress", "jQuery",
          ],
          description: "I worked with a family-owned Bed and Breakfast business in the Sunshine Coast to modernize their website. The owners of Cedarside Coach House wanted to overhaul their website that had been the same for the past 15 years. I worked with two student web designers to achieve a modern look and feel of the website. We created style and branding guides, built the website and created tutorials as part of handoff and site delivery to the client. We implemented a design that would highlight the beauty of their location and a mobile-friendly site for travelling visitors.",
          tag: "dev",
        },
        {
          title: "Six Legs Good Apiaries",
          imgUrl: sixlegsgood,
          url: "https://www.sixlegsgood.com/",
          stacks: [
            "HTML", "SASS", "Javascript", "WordPress", "jQuery",
          ],
          description: "Six Legs Good Apiaries is a small beekeeping business in East Vancouver. They are a Mom-and-pop shop who wanted a logo for their business. The logo was created in 2016 and the website launched in 2019. In this project, I illustrated them in their beekeeping uniforms surrounded by dandelions. This is a monochromatic design that can be easily transferred on their merchandise. The website design was a collaborative work with the client to reach wider range of customers using web and social media.",
          tag: "dev",
        },
      ]
    }
  }
}

</script>

<style scoped>

.page__work {
  padding: 0 30px 30px 30px;
}

h1 { 
  font-family: 'Domine-Bold';
  color: #c76f47;
  margin-top: 0;
  font-size: 1.6rem;
}

/* tablet */
@media (min-width: 600px){
  .page__work {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    grid-column-gap: 25px;
  }

  h1 {
    font-size: 2rem;
    grid-area: 1 / 1 / 7 / 2;
    line-height: 40px;
  }
}

</style>