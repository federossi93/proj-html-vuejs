import { createApp } from 'vue'
import './assets/scss/style.scss'
import '../node_modules/bootstrap'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faGauge } from '@fortawesome/free-solid-svg-icons'
import { faMedal } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import { faChartPie } from '@fortawesome/free-solid-svg-icons'
import { faBridge } from '@fortawesome/free-solid-svg-icons'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { faPlaneUp } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCircleUp } from '@fortawesome/free-regular-svg-icons'












//<font-awesome-icon icon="" />


library.add(
    faUserSecret,
    faClock,
    faPhone,
    faEnvelope,
    faTwitter,
    faFacebook,
    faLinkedinIn,
    faUserGroup,
    faBriefcase,
    faGauge,
    faMedal,
    faLock,
    faPenToSquare,
    faGraduationCap,
    faNetworkWired,
    faChartPie,
    faBridge,
    faChartSimple,
    faPlaneUp,
    faGlobe,
    faInbox,
    faRocket,
    faGem,
    faLocationDot,
    faCircleUp
    )

createApp(App)

.component('font-awesome-icon', FontAwesomeIcon)

.mount('#app')
