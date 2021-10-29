<template>
       <div class="portfolio w-full h-auto pt-16 pb-16">
              <h1 class="pt-4 leading-snug text-white text-left text-5xl font-extrabold pb-7">Our Works</h1>
              <div class="flex text-white uppercase">
                     <div class="card-image w-1/2 mr-4">
                            <img src="../../assets/images/laptop.png" alt="">
                            <p class="category pt-5">Dashboard, Desktop, UI Design</p>
                            <p class="capitalize font-extrabold text-2xl">Dashboard Accounting</p>
                     </div>
                     <div class="w-1/2" style="display: flex;">
                            <div class="card-image w-1/2 mr-1">
                                   <img src="../../assets/images/skilled.png" alt="">
                            <p class="category pt-5">Mobile, UI Design, IOS</p>
                            <p class="capitalize font-extrabold text-2xl">Skilled UI Design</p>
                            </div>
                            <div class="card-image w-1/2">
                                   <img src="../../assets/images/phone.png" alt="">
                            <p class="category pt-5">Mobile, UI Design, IOS</p>
                            <p class="capitalize font-extrabold text-2xl">Greenbarn Apps</p>
                            </div>
                     </div>
              </div>
              <div class="w-full text-center h-auto mt-2">
                     <ButtonSecondary />
              </div>
       </div>
</template>

<script>
// Import Secondary Button
import ButtonSecondary from "../partials/ButtonSecondary.vue"

export default {
       data() {
              return {}
       },
       components: {
              ButtonSecondary
       }
}

</script>

<style></style>