import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faEnvelope, faHouse, faBarsProgress, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add([faBars, faEnvelope, faHouse, faBarsProgress, faAddressCard, faTelegram, faGithub, faFacebook, faLinkedin])

import router from './_router'
import store from './_store'

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
