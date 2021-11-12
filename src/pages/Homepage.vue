<template>
              <!-- Navbar Component -->
              <div class="font-sans antialiased" id="app">
                            <nav class="navbar flex brand-color text-white items-center justify-between flex-wrap pl-6 pr-6 bg-transparent p-6 md:px-24">
                                   <!-- Brand and Logos -->
                                   <div class="flex items-center flex-no-shrink mr-6">
                                          <img src="../../src/assets/images/eclipse.png" alt="brandlogo" width="48">
                                          <h1 class="font-medium text-2xl pl-3 brand-font">TeamUp Studio</h1>
                                   </div>
                            <!-- Hamburger Component -->
                            <div class="block sm:hidden">
                                   <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                                   <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                                   </button>
                            </div>
                            <!-- Hamburger Action -->
                            <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
                                   <!-- Navigation  Links-->
                                   <div class="text-xl sm:flex-grow sm:text-right">
                                          <a href="#responsive-header" class="text-xl no-underline block mt-4 sm:mx-6 sm:inline-block sm:mt-0 text-teal-lighter mr-4">
                                          Homepage
                                          </a>
                                          <a href="#responsive-header" class="text-xl no-underline block mt-4 sm:mx-6 sm:inline-block sm:mt-0 text-teal-lighter mr-4">
                                          Portfolio
                                          </a>
                                          <a href="#responsive-header" class="text-xl no-underline block mt-4 sm:mx-6 sm:inline-block sm:mt-0 text-teal-lighter bg-blue-500mr-4">
                                          About
                                          </a>
                                   </div>
                            </div>
                     </nav>
              </div> 
              <div class="background-color">
              <!-- Hero Component -->
              <div class="hero flex-col container w-full flex md:flex-row">
              <!-- Title and Subtitle -->
                     <div class="heading w-full px-5 md:w-2/3 md:px-24 md:pt-24">
                            <h1 class="leading-tight pt-14 text-5xl text-white font-extrabold">We help you to visualize your business.</h1>
                            <p class="leading-normal pt-5 paragraph text-white text-xl font-medium">Magna do elit duis reprehenderit. Anim qui sint deserunt deserunt proident excepteur cupidatat excepteur. proident excepteur cupidatat excepteur.</p>
                            <!-- Button Contact Us -->
                            <button class="mt-12 button-main p-4 pl-12 pr-12 rounded-md bg-blue-500">
                                   <p class="text-2xl font-semibold text-white"> Contact Us </p>
                            </button>
                     </div>
                     <!-- Image Illustration -->
                     <div class="pl-8 pr-14 py-20 md:px-0 md:w-1/3 md:pt-24 md:pb-5">
                            <img src="../../src/assets/images/scarrerrow.png" alt="" srcset="">
                     </div>
              </div>
              <!-- World Banner -->
              <div class="w-full text-center mt-5 font-bold md:text-3xl pb-5 md:px-40 md:mt-40">
              <img class="px-10 md:px-0" src="../../src/assets/images/world.png" alt="world image" srcset="">
              <div class="w-full h-48 mt-10 grid grid-cols-3 px-10 md:px-0">
                     <div class="text-white counter">
                            <p class="text-3xl md:text-5xl">100</p>
                            <p class="paragraph">Clients</p>
                     </div>
                     <div class="text-white counter">
                            <p class="text-3xl md:text-5xl">150</p>
                            <p class="paragraph">Projects</p>
                     </div>
                     <div class="text-white counter">
                            <p class="text-3xl md:text-5xl">10</p>
                            <p class="paragraph">Country</p>
                     </div>
              </div>
       </div>
       </div>
              <!-- Card Pop Up -->
              <!-- <div class="card w-1/3 bg-white h-auto rounded-lg p-4 text-left shadow-xl">
                     <h1 class="text-2xl font-bold pb-3">Lorem, ipsum.</h1>
                     <p>Lorem ipsum dolor, sit amet consectetur</p>
              </div> -->
              <!-- Content Story -->
              <div class="w-full h-auto pt-20 px-5 md:pt-40 flex pb-20 text-white flex-col md:flex-row md:px-32 brand-secondary-color">
                     <!-- Heading -->
                     <div class="w-full md:w-1/2">
                            <h1 class="font-extrabold md:leading-snug leading-tight text-left text-5xl">We Will Help Your Plans With Design</h1>
                     </div>
                     <!-- Subtitle -->
                     <div class="w-full md:w-1/2">
                            <p class="leading-normal pt-6 text-left md:pl-3 md:pt-3 text-xl md:px-0">Magna do elit duis reprehenderit. Anim qui sint deserunt deserunt proident excepteur cupidatat excepteur. elit duis reprehenderit. Anim qui sint deserunt deserunt proident excepteur cupidatat excepteur.</p>
                            <p class="text-right pt-10 text-lg md:pt-5 font-medium">Read our story</p>
                     </div>
              </div>
              <!-- Partner -->
              <div class="brand-secondary-color w-full flex-col md:flex-row h-auto flex md:px-24">
                     <div class="w-full md:w-1/2">
                            <h1 class="font-extrabold md:pt-16 leading-tight px-5 md:leading-snug text-white text-left text-5xl">We Have Collaborated With</h1>
                     </div>
                     <div class="w-full md:w-1/2 flex h-auto">
                            <div class="w-full">
                                   <img class="w-full" src="../../src/assets/images/spotify.png" alt="">
                                   <img class="w-full" src="../../src/assets/images/youtube.png" alt="">
                            </div>
                            <div class="w-full">
                                   <img class="w-full" src="../../src/assets/images/spotify.png" alt="">
                                   <img class="w-full" src="../../src/assets/images/youtube.png" alt="">
                            </div>
                     </div>
              </div>
              <!-- Provide Service -->
              <div class="w-full brand-secondary-color py-12 bg-secondary-color h-auto">
               <div class="flex flex-col mx-5 md:grid md:grid-cols-3 md:gap-7 md:ml-28 md:mr-28">
                      <div class="">
                             <h1 class="my-10 md:pt-4 md:leading-snug text-white text-left text-5xl font-extrabold">We can help you with</h1>
                      </div>
                      <div class="mb-10 md:mb-0">
                             <img src="../../src/assets/images/graphic.png" alt="">
                      </div>
                      <div class="mb-10 md:mb-0">
                             <img src="../../src/assets/images/development.png" alt="">
                      </div>
                      <div class="mb-10 md:mb-0">
                             <img src="../../src/assets/images/graphic.png" alt="">
                      </div>
                      <div class="mb-10 md:mb-0">
                             <img src="../../src/assets/images/development.png" alt="">
                      </div>
                      <div class="mb-10 md:mb-0">
                             <img src="../../src/assets/images/graphic.png" alt="">
                      </div>
               </div>
        </div>
</template>

<script>
export default {
       name: "Homepage",
       components: {
       },
       data() {
              return {
                     open: false,
              }
       },
       methods: {
              toggle() {
                     this.open = !this.open
              }
       }
}
</script>

<style>
.brand-font {
       font-family: "SF Pro Display", sans-serif;
}
.background-color {
       background-image: linear-gradient(to top,#122658,#38354E);
}
.our-story:hover > .card {
       display: block;
}
</style>