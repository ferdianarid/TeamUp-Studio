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

// Import Portfolio Component
import Portfolio from "../components/Service/Portfolio.vue"

// Import Tesimonial Component
import Testimonial from "../components/Testimonial/Testimonial.vue"

// Import Contact Us Component
import Contact from "../components/Contact/ContactUs.vue" 

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
              Service,
              Portfolio,
              Testimonial,
              Contact
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
              <!-- Portfolio Component -->
              <Portfolio />
              <!-- Testimonial Component -->
              <!-- <Testimonial /> -->
              <!--  Contact Us -->
              <Contact />
       </div>
</template>

<style>
</style>