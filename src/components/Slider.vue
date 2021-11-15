<template>
    <div>
        <VueSlickCarousel v-bind="settings">
        <div class="h-80 bg-red-600 text-white text-center text-4xl font-semibold p-36">Red</div>
        <div class="h-80 bg-yellow-400 text-white text-center text-4xl font-semibold p-36">Yellow</div>
        <div class="h-80 bg-green-400 text-white text-center text-4xl font-semibold p-36">Green</div>
        <div class="h-80 bg-blue-600 text-white text-center text-4xl font-semibold p-36">Blue</div>
        </VueSlickCarousel>
    </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import '../../dist/carousel/vue-slick-carousel.css'
  // optional style for arrows & dots
  import '../../dist/carousel/vue-slick-carousel-theme.css'
  export default {
    name: 'Slider',
    components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: true,
        infinite: true,
        rows: 1,
        initialSlide: 2,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: true,
      },
    }
  },
}
</script>