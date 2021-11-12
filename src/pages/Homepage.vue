<template>
              <!-- Navbar Component -->
              <div class="font-sans antialiased" id="app">
                            <nav class="navbar flex brand-color text-white items-center justify-between flex-wrap pl-6 pr-6 bg-transparent p-6 lg:px-24">
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
                     <!-- Wrapper -->
              <div id="container">
              <!-- Hero Component -->
              <div class="hero flex-col container w-full flex lg:flex-row">
              <!-- Title and Subtitle -->
                     <div class="heading w-full px-5 lg:w-2/3  lg:pt-24">
                            <h1 class="leading-tight pt-14 text-5xl text-white font-extrabold">We help you to visualize your business.</h1>
                            <p class="leading-normal pt-5 paragraph text-white text-xl font-medium">Magna do elit duis reprehenderit. Anim qui sint deserunt deserunt proident excepteur cupidatat excepteur. proident excepteur cupidatat excepteur.</p>
                            <!-- Button Contact Us -->
                            <button class="mt-12 button-main p-4 pl-12 pr-12 rounded-lg bg-blue-500">
                                   <p class="text-2xl font-semibold text-white"> Contact Us </p>
                            </button>
                     </div>
                     <!-- Image Illustration -->
                     <div class="pl-8 pr-14 py-20 lg:px-0 lg:w-1/3 lg:pt-24 lg:pb-5">
                            <img src="../../src/assets/images/scarrerrow.png" alt="" srcset="">
                     </div>
              </div>
              <!-- World Banner -->
              <div class="w-full text-center mt-5 font-bold lg:text-3xl pb-5 lg:px-40 lg:mt-40">
              <img class="px-10 lg:px-0" src="../../src/assets/images/world.png" alt="world image" srcset="">
              <div class="w-full h-48 mt-10 grid grid-cols-3 px-10 lg:px-0">
                     <div class="text-white counter">
                            <p class="text-3xl lg:text-5xl">100</p>
                            <p class="paragraph">Clients</p>
                     </div>
                     <div class="text-white counter">
                            <p class="text-3xl lg:text-5xl">150</p>
                            <p class="paragraph">Projects</p>
                     </div>
                     <div class="text-white counter">
                            <p class="text-3xl lg:text-5xl">10</p>
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
              <div class="w-full h-auto pt-20 px-5 lg:pt-40 flex pb-20 text-white flex-col lg:flex brand-secondary-color">
                     <div id="container">
                     <!-- Heading -->
                     <div class="lg:flex">
                     <div class="w-full lg:w-1/2">
                            <h1 class="font-extrabold lg:leading-snug leading-tight text-left text-5xl">We Will Help Your Plans With Design</h1>
                     </div>
                     <div class="w-full lg:w-1/2">
                            <p class="leading-normal pt-6 text-left lg:pl-3 lg:pt-3 text-xl lg:px-0">Magna do elit duis reprehenderit. Anim qui sint deserunt deserunt proident excepteur cupidatat excepteur. elit duis reprehenderit. Anim qui sint deserunt deserunt proident excepteur cupidatat excepteur.</p>
                            <p class="text-right pt-10 text-lg lg:pt-5 font-medium">Read our story</p>
                     </div>
                     </div>
              </div>
              <!-- Partner -->
              <div class="brand-secondary-color w-full flex-col lg:flex h-auto flex">
                     <div id="container">
                            <div class="lg:flex">
                     <div class="w-full lg:w-1/2">
                            <h1 class="font-extrabold lg:pt-16 leading-tight px-5 lg:leading-snug text-white text-left text-5xl">We Have Collaborated With</h1>
                     </div>
                     <div class="w-full lg:w-1/2 flex h-auto">
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
              </div>
              <!-- Provide Service -->
              <div class="w-full brand-secondary-color py-12 bg-secondary-color h-auto">
                     <div id="container">
               <div class="flex flex-col mx-5 lg:grid lg:grid-cols-3 lg:gap-7">
                      <div>
                             <h1 class="my-10 lg:pt-4 lg:leading-snug text-white text-left text-5xl font-extrabold">We can help you with</h1>
                     </div>
                      
                      <div class="mb-10 lg:mb-0">
                             <img src="../../src/assets/images/graphic.png" alt="">
                      </div>
                      <div class="mb-10 lg:mb-0">
                             <img src="../../src/assets/images/development.png" alt="">
                      </div>
                      <div class="mb-10 lg:mb-0">
                             <img src="../../src/assets/images/graphic.png" alt="">
                      </div>
                      <div class="mb-10 lg:mb-0">
                             <img src="../../src/assets/images/development.png" alt="">
                      </div>
                      <div class="mb-10 lg:mb-0">
                             <img src="../../src/assets/images/graphic.png" alt="">
                      </div>
               </div>
               </div>
               </div>
               </div>
               </div>
        </div>
        <!-- Portfolio -->
        <div class="brand-secondary-color w-full h-auto">
               <div id="container">
                            <!-- <div class="lg:flex"> -->
              <h1 class="pt-4 leading-snug text-white text-left text-5xl font-extrabold pb-7">Our Works</h1>
              <div class="cardd flex text-white uppercase">
                     <div class="w-1/2 mr-4">
                            <img class="h-80" src="../../src/assets/images/laptop.png" alt="">
                            <p class="category pt-5">Dashboard, Desktop, UI Design</p>
                            <p class="capitalize font-extrabold text-2xl">Dashboard Accounting</p>
                     </div>
                     <div class="w-1/2" style="display: flex;">
                            <div class="card-image w-1/2 mr-1">
                                   <img class="h-80" src="../../src/assets/images/skilled.png" alt="">
                            <p class="pt-5">Mobile, UI Design, IOS</p>
                            <p class="capitalize font-extrabold text-2xl">Skilled UI Design</p>
                            </div>
                            <div class="w-1/2">
                                   <img class="h-80" src="../../src/assets/images/phone.png" alt="">
                            <p class="category pt-5">Mobile, UI Design, IOS</p>
                            <p class="capitalize font-extrabold text-2xl">Greenbarn Apps</p>
                            </div>
                     </div>
                     </div>
                     </div>
                     <div class="text-center mx-auto">
                     <button class="lg:my-10 button-secondary p-4 pl-12 pr-12 rounded-md">
                            <p class="text-2xl font-semibold text-white"> More Projects </p>
                     </button>
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