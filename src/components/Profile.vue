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
            I spent the last four years working a hybrid role as a developer and a designer. I thrive the most when I am able to merge code and design in building solutions. Along with coding and developing apps, I have a passion for user research, usability testing and web accessibility.
        </p>
        <p>
            I am dedicated to work with establishments and projects that align with values of accessibility, social justice, equity, and inclusion. These days my time is spent coding, designing and prototyping. I also mentor newcomer self-identifying women to secure careers in tech.
        </p>
        <p>
            In 2019 I formed Techincolour, a community tech space that catered to Black, Indigenous and people of colour to learn about tech and to serve as a space to network with other BIPOC tech workers in the Lower Mainland.
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
    margin-bottom: 50px;
}
.about__description h3 {
    font-family: "Domine-Bold";
    line-height: 50px;
    color: #507981;
}

.about__description p {
    font-size: 1rem;
    color: gray;
    line-height: 30px;
    letter-spacing: 0.2px;
}

img {
    max-inline-size: 100%;
    block-size: auto;
    object-fit: cover;
    object-position: top center;
    border-radius: 10px;
    box-shadow: 6px 11px 36px -17px rgba(0,0,0,0.57);
}

</style>
  