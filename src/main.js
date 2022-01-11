import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import Resume from './components/Resume.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBriefcase, faGraduationCap, faAward} from '@fortawesome/free-solid-svg-icons'
import VueScrollactive from 'vue-scrollactive';
 
Vue.use(VueScrollactive);
Vue.use(VueRouter)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
library.add(faGraduationCap, faBriefcase, faAward)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/resume', component: Resume },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: "history"
})


new Vue({
  router,
  render: h => h(App),

}).$mount('#app')

