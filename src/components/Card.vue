<template>
    <div class="card">
        <div class="img-wrapper">
            <img 
                class="card__img"
                :alt="alt"
                :src="imgUrl"
            />
        </div>
        <div class="card__info">
            <div class="card__info-wrapper">
                <h4 class="card__title">{{ title }}</h4>
                <a class="card__link" :href="url" target="_blank">
                    <font-awesome-icon icon="icon fa-solid fa-up-right-from-square"/>
                </a>
            </div>
            <ul class="card__stacks">
                <font-awesome-icon icon="icon fa-solid fa-toolbox"/>
                <li class="stack" v-for="stack in stacks">{{ stack }}</li>
            </ul>
            <p class="card__description">{{ description }}</p>
        </div>

    </div>
</template>
    
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUpRightFromSquare, faToolbox } from '@fortawesome/free-solid-svg-icons'

export default {
    name: "Card",
    props: {
        title: {
            type: String,
            required: true
        },
        url: {
            type: String,
        },
        alt: {
            type: String,
        },
        imgUrl: {
            type: String,
        },
        description: {
            type: String,
        },
        stacks: {
            type: Array,
        }
    }
}


</script>

<style scoped>
.card {
    height: 100%;
    margin-bottom: 50px;
}

.img-wrapper {
    width: 500px;
    margin-bottom: 30px;
}

img {
    max-width:100%;
    max-height:100%;
    height: auto;
    max-inline-size: 100%;
    block-size: auto;
    object-fit: contain;
    object-position: top center;
    border-radius: 10px;
    box-shadow: 6px 11px 36px -17px rgba(0,0,0,0.57);
}

h4 {
    padding: 0;
    margin: 0 20px 0 0;
    display: inline-block;
    color: #507981;
}
.fa-up-right-from-square {
    color: #568a93;
    font-size: 25px;
}
.fa-up-right-from-square:hover {
    color: #c76f47;
}
.fa-toolbox {
    color: gray;
    font-size: 1.2rem;
}

.card__stacks {
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 0;
}
.stack {
    list-style-type: none;
    font-family: 'Poppins-Thin';
    font-size: 15px;
    letter-spacing: 1px;
}
.card__description {
    font-size: 1rem;
    line-height: 30px;
}

</style>