import { createApp } from 'vue'
import App from './App.vue'

import route from './router'
import store from './store'
import BaseSection from './components/ui/BaseSection'
import Button from './components/ui/Button'

const app = createApp(App)

app.use(route)
app.use(store)

app.component('base-section', BaseSection)
app.component('base-button', Button)

app.mount('#app')
