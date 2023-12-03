import './assets/main.css'
import 'primevue/resources/themes/lara-light-green/theme.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import PrimeButton from 'primevue/button'
import PrimeCard from 'primevue/card'
import PrimeInputText from 'primevue/inputtext'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.component('PrimeButton', PrimeButton)
app.component('PrimeCard', PrimeCard)
app.component('PrimeInputText', PrimeInputText)

app.mount('#app')
