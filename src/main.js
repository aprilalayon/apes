import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faToolbox, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import "@/assets/styles/main.scss"

library.add(
    faUpRightFromSquare,
    faToolbox,
    faGithub,
    faLinkedin
)

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')