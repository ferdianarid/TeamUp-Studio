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
                     <div class="heading w-full px-5 md:w-2/3 md:px-24 md:pt-16">
                            <h1 class="title-headings leading-tight pt-14 text-5xl text-white font-extrabold">We help you to visualize your business.</h1>
                            <p class="leading-normal pt-5 paragraph text-white text-xl font-medium">Magna do elit duis reprehenderit. Anim qui sint deserunt deserunt proident excepteur cupidatat excepteur. proident excepteur cupidatat excepteur.</p>
                            <!-- Button Contact Us -->
                            <button class="mt-12 button-main p-4 pl-12 pr-12 rounded-md bg-blue-500">
                                   <p class="text-2xl font-semibold text-white"> Contact Us </p>
                            </button>
                     </div>
                     <!-- Image Illustration -->
                     <div class="illustration md:w-1/3 pt-16 pb-5">
                            <img src="../../src/assets/images/scarrerrow.png" alt="" srcset="">
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
</style>