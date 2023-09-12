<template>
    <h1>Projects</h1>
    <div class="page__work">
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
import shoppingList from "@/assets/images/shoppinglist.png"
import anthem from "@/assets/images/anthem.png"
import portfolio from "@/assets/images/portfolio.png"
import Card from "@/components/Card.vue"

export default {
  components: {
      "Card": Card,
  },
  data() {
    return {
      workData: [
        { 
          title: "Anthem Design System",
          imgUrl: anthem,
          alt: "An image of an web application with a left sidebar menu, with selected Action Card Row. Middle part of the image shows a card element that reads Protect Old Growth Forest in black text. Above shows an active status and text reading Targeted email campaign. The bottom part of the card has an arrow button and a footer that read Updated five days ago. The right panel shows a column of input elements with placeholder text ",
          stacks: [
            "Vue", "Storybook", "Chromatic", "SASS", "Drupal"
          ],
          description: "Anthem is a New/Mode design system built to streamline modular components developed from Vue and Drupal. Storybook and Chromatic was used to home the components and track visual regression as we created and updated new UI components for the application",
          tag: "dev",
        },
        { 
          title: "Portfolio site",
          imgUrl: portfolio,
          alt: "Image of a website landing page with logo at top left, navigation text Home, About and Work at top right in teal colour. The landing page had large text that says Hi, my name in teal colour and continues to April Alayon in orange colour. The next line reads I'm a front end developer dedicated to designing and building accessible and fluent digital experiences",
          stacks: [
            "Vue", "SASS", "WAVE", "Github Pages", "Netlify",
          ],
          description: "This personal portfolio site was built using Vue and SASS to showcase my recent development and design projects. This project used a web accessibility evaluation tool to identify accessibility barriers during development and to meet WCAG 2.0 requirements.",
          tag: "dev",
        },
        { 
          title: "Shopping List Generator",
          imgUrl: shoppingList,
          alt: "Image with a paper illustration background with title Today's Shopping List. And input element on the left that has a placeholder text Enter an item. An Add to list button on the right side. Below creates a list of items on the left and a delete button on the right side. List includes tomatoes, bananas, flour, blueberries, sugar and olive oil",
          url: "https://aprilalayon.github.io/shoppinglist/",
          stacks: [
            "React", "Javascript", "CSS", "Github Pages"
          ],
          description: "Getting ready to head out and go shopping? Make a list for things you need to buy and remove them as you pick up your items in the store. This application was created using React and CSS.",
          tag: "dev",
        },
        {
          title: "Cedarside Coach House",
          imgUrl: cedarside,
          alt: "A website landing page with a white background. A list of navigation items namely Home, About Cedarside, Rates, Logo image, Things to do, Gallery, Contact Us. A photo of the bed and breakfast house in the middle of the page. The house is surrounded by lots of greenery and at the bottom Cedarside Coach House is printed",
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
          alt: "An image of website landing page with navigation items: Our Honey, Our bees, logo image, About and Social. The bottom image has a black grunge texture background. In the middle the text reads Six Legs Good Apiaries surrouded by white dandelion illustrations",
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
    display: flex;
    grid-column-gap: 4rem;
    flex-wrap: wrap;
  }

  h1 {
    font-size: 3rem;
    padding: 0 3rem;
    line-height: 60px;
  }
}

</style>