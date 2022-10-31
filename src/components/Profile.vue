<template>
    <img 
        class="about__img-profile"
        alt="Photo of April Alayon"
        :src="image"
    />
    <div class="about__description">
        <h3>
            I’m April, a Front End Developer and Designer working 
            remotely in rainy Vancouver, BC.
        </h3>
        <p>
            I spent the last four years working a hybrid role as a developer and a designer at <a href="https://www.newmode.net/" target="_blank">New/Mode</a>. I thrive the most when I am able to merge code and design in building solutions. Along with coding and developing applications, I have a passion for user research, usability testing and web accessibility.
        </p>
        <p>
            I am dedicated to work with establishments and projects that align with values of accessibility, social justice, equity, and inclusion. In 2019 I formed Techincolour, a community tech space that catered to Black, Indigenous and people of colour to learn about tech and to serve as a space to network with other BIPOC tech workers in the Lower Mainland. I also mentor newcomer self-identifying women to secure careers in tech.
        </p>
        <p>
            Out of the office, you'll find me tending the garden, reading poetry and spending time with my dog, Cashew. 
        </p>

        <div class="about__links">
            <a href="https://github.com/aprilalayon" target="_blank">
                <font-awesome-icon icon="icon fa-brands fa-github"/>
            </a>
            <a href="https://www.linkedin.com/in/aprilalayon/" target="_blank">
                <font-awesome-icon icon="icon fa-brands fa-linkedin" />
            </a>
        </div>
    </div>
   
</template>

<script>
import image from "@/assets/images/profile.jpeg"
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default {
    data() {
        return {
            image,
        };
    },
};
</script>

<style scoped>
.about__description h3 {
    font-family: "Domine-Bold";
    line-height: 50px;
    color: #507981;
}

.about__description {
    margin-bottom: 30px;
}

.about__description p {
    font-size: 1rem;
    line-height: 30px;
    letter-spacing: 0.2px;
}

.about__description a {
    color: #c76f47;
}

.about__links {
    display: flex;
    justify-content: space-between;
    width: 100px;
    margin: 0 auto;
}
.about__links a {
    font-size: 2rem;
    color: black;
}

.about__links a:hover {
    color: #c76f47;
}

img {
    display: block;
    max-inline-size: 100%;
    block-size: auto;
    object-fit: cover;
    object-position: top center;
    border-radius: 10px;
    box-shadow: 6px 11px 36px -17px rgba(0,0,0,0.57);
    margin: 0 auto;
}

/* tablet */
@media (min-width: 600px){
    .about__description {
        padding: 0 30px;
        margin-bottom: 50px;
    }

    .about__description h3 {
        font-size: 1.5rem;
        margin-top: 0;
        line-height: 36px;
    }

    .about__links {
        margin: 0;
    }

    .about__links  {
        margin: 0;
    }
}

/* desktop */
@media (min-width: 1200px){

}

</style>
  