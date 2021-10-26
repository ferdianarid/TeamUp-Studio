import { createApp } from 'vue'

// import app
import App from './App.vue'

// import tailwind css dist
import "../dist/tailwind.css"

// import custom css
import "../src/assets/stylesheets/index.css"

// import responsive css
import "../src/assets/stylesheets/responsive.css"

// mount app
createApp(App).mount('#app')