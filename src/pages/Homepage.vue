<script>
// import Navbar component
import Navbar from "../components/Header/Navbar.vue"

// import Hero Component
import Hero from "../components/Header/Hero.vue"

// import Our Story Component
import OurStory from "../components/OurStory/OurStory.vue"

// Import Content Story Component
import ContentStory from "../components/OurStory/ContentStory.vue"

export default {
       data() {
       },
       // use Component
       components: {
              Navbar,
              Hero,
              OurStory,
              ContentStory
       }
}
</script>
<template>
       <div>
              <!-- Render Navbar Component -->
              <Navbar />
              <div class="bg-brand">
                     <!-- Render Hero Component -->
                     <Hero />
                     <!-- Our Story Component -->
                     <OurStory />
              </div>
              <ContentStory />
       </div>
</template>

<style>
</style>