<template>
       <div class="our-story w-full text-center font-bold text-4xl pb-5">
              <img class="world" src="../../assets/images/world.png" alt="world image" srcset="">
              <div class="coverage w-full h-48 mt-9 grid grid-cols-3">
                     <div data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="1000" data-aos-delay="100" class="text-white counter">
                            <p class="numbers text-5xl">100+</p>
                            <p class="paragraph">Clients</p>
                     </div>
                     <div data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="1000" data-aos-delay="500" class="text-white counter">
                            <p class="numbers text-5xl">150+</p>
                            <p class="paragraph">Projects</p>
                     </div>
                     <div data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="1000" data-aos-delay="900" class="text-white counter">
                            <p class="numbers text-5xl">10</p>
                            <p class="paragraph">Country</p>
                     </div>
              </div>
              <!-- Card Pop Up -->
              <Card />
       </div>
</template>

<script>
// Import Card Component
import Card from  "../partials/Card.vue"

export default {
       data() {
              return {}
       },
       components: {
              Card
       }
}
</script>

<style>
.our-story:hover > .card {
       display: block;
}
</style>