<template>
       <div class="testimonial w-full h-48 bg-yellow-800 text-white text-center">
              <h1 class="font-extrabold pt-8 text-3xl">Testimonial Component</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam unde hic voluptate!</p>
       </div>
       <Swiper />
</template>

<script>
// Import Testimonial Component
import Swiper from "../Swiper.vue"
export default {
       data() {},
       components: {
              Swiper
       }
}
</script>
<style></style>