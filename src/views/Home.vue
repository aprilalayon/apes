<template>
    <div class="home">
        <Intro name="April Alayon" />
    </div>
</template>

<script>
import Intro from '@/components/Intro.vue'

export default {
    name: 'Home',
    components: {
        "Intro": Intro
    }
}
</script>