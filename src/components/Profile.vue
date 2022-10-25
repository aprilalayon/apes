<template>
    <img 
        class="about__img-profile"
        alt="Photo of April Alayon"
        :src="image"
    />
    <div class="about__description">
        <h3>
            I’m April, a Front End Engineer and Designer working 
            remotely in rainy Vancouver, BC.
        </h3>
        <p>
            April has 4 years of experience merging both their coding and design skills to build functional applications and products. 
            They are skilled in using modern web development frameworks like Vue and React in their projects. They love learning about 
            human behaviour through user research and usability testing, and how it can be used to translate and build better and delightful 
            products. It is one of the most exciting and rewarding part of their career. Ensuring web accessibility is also one of their passions in 
            making web applications and websites.
        </p>
        <p>
            They are dedicated to work with establishments and projects that align with values of accessibility, social justice, equity, and 
            inclusion. In 2019 they formed Techincolour, a community-event tech space that catered to Black, Indigenous and people of colour to 
            learn about tech and to server as a safe space network with other BIPOC tech workers in the Lower Mainland.
        </p>
    </div>
   
</template>

<script>
import image from "@/assets/images/profile.jpeg"

export default {
    data() {
        return {
            image,
        };
    },
};
</script>

<style scoped>

.about__description {
    padding: 0 30px;
}
.about__description h3 {
    font-family: "Domine-Bold";
    line-height: 50px;
}

.about__description p {
    font-size: 1.2rem;
    color: gray;
    line-height: 36px;
    letter-spacing: 0.3px;
}

img {
    max-inline-size: 100%;
    block-size: auto;
    object-fit: cover;
    object-position: top center;
    border-radius: 10px;
    filter: grayscale(100%);
    box-shadow: 6px 11px 36px -17px rgba(0,0,0,0.57);
}

</style>
  