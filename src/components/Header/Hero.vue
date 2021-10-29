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
              <div class="w-2/3">
                     <h1 class="leading-snug pt-14 text-5xl text-white font-extrabold">{{ title }}</h1>
                     <p class="leading-normal pt-5 paragraph text-white font-medium">{{ subtitle }}</p>
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