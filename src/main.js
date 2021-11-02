import { createApp } from 'vue'

// import app
import App from './App.vue'

// Import AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// Store to variable
const app = createApp(App)

// Initialize AOS Package
app.use(AOS.init())

// import tailwind css dist
import "../src/tailwind.css"

// import custom css
import "../src/assets/stylesheets/index.css"

// mount app
app.mount('#app')