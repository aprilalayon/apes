<template>
    <nav id="nav" class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/work">Work</router-link>
    </nav>

</template>

<style scoped>
.nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 300px;
}

nav a {
    font-family: "Poppins-Bold", Helvetica, Arial;
    text-decoration: none;
    color: #568a93;
}

nav a:hover {
    color: #c76f47;
    text-decoration: underline;
    text-decoration-color: #c76f47;
    text-decoration-thickness: 6px;
    text-underline-offset: 10px;
}

</style>
  