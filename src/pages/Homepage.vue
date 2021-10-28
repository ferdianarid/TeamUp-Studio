<script>
// import Navbar component
import Navbar from "../components/Header/Navbar.vue"

// import Hero Component
import Hero from "../components/Header/Hero.vue"

// import Our Story Component
import OurStory from "../components/OurStory/OurStory.vue"

// Import Content Story Component
import ContentStory from "../components/OurStory/ContentStory.vue"

// Import Partner Component
import Partner from "../components/Partner/Partner.vue"

// Import Service Component
import  Service from "../components/Service/Service.vue"

export default {
       data() {
       },
       // use Component
       components: {
              Navbar,
              Hero,
              OurStory,
              ContentStory,
              Partner,
              Service
       }
}
</script>
<template>
       <div>
              <!-- Render Navbar Component -->
              <Navbar />
              <!-- Set Background  -->
              <div class="bg-brand">
                     <!-- Render Hero Component -->
                     <Hero />
                     <!-- Our Story Component -->
                     <OurStory />
              </div>
              <!-- Content Story Component -->
              <ContentStory />
              <!-- Partner Component -->
              <Partner />
              <!-- Service Component -->
              <Service />
       </div>
</template>

<style>
</style>