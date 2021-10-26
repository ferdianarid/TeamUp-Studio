<script>
// import Navbar component
import Navbar from "../components/Header/Navbar.vue"

// import Hero Component
import Hero from "../components/Header/Hero.vue"

export default {
       data() {
       },
       components: {
              Navbar,
              Hero
       }
}
</script>

<template>
       <div>
              <!-- Render Navbar Component -->
              <Navbar />
              <!-- Render Hero Component -->
              <Hero />
       </div>
</template>

<style>
</style>