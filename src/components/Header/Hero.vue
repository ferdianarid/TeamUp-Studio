<script>
// Import Button Component
import Button from "../partials/Button.vue"
export default {
       data() {
              return {
                     title: "We help you to visualize your business ",
                     subtitle: "Magna do elit duis reprehenderit. Anim qui sint deserunt deserunt proident excepteur cupidatat excepteur. proident excepteur cupidatat excepteur."
              }
       },
       components: {
              Button
       }
}
</script>
<template>
<!-- Hero Component -->
       <div class="hero container w-full">
              <!-- Title and Subtitle -->
              <div class="heading w-2/3">
                     <h1 data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1000" class="title-headings leading-snug pt-14 text-5xl text-white font-extrabold">{{ title }}</h1>
                     <p data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1000" data-aos-delay="800" class="leading-normal pt-5 paragraph text-white font-medium">{{ subtitle }}</p>
                     <!-- Button Contact Us -->
                     <Button />
              </div>
              <!-- Image Illustration -->
              <div class="illustration w-1/3 pt-12">
                     <img src="../../assets/images/scarrerrow.png" alt="" srcset="">
              </div>
       </div>
</template>

<style>
</style>