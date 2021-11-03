<template>
       <carousel :slides="slides" :interval="3000" controls indicators></carousel>
</template>

<script>
import Carousel from "../carousel/Carousel.vue";
export default {
       name: "Testimonial",
              components: { Carousel },
              data: () => ({
              slides: [
                     "https://picsum.photos/id/1032/500/200",
                     "https://picsum.photos/id/1032/500/200",
                     "https://picsum.photos/id/1032/500/200",
                     "https://picsum.photos/id/1032/500/200"
              ],
       }),
};
</script>

<style></style>