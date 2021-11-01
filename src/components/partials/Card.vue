<template>
       <div class="card w-1/3 bg-white h-auto rounded-lg p-4 text-left shadow-xl">
              <h1 class="text-2xl font-bold pb-3">Lorem, ipsum.</h1>
              <p>Lorem ipsum dolor, sit amet consectetur</p>
              {{ users }}
       </div>
</template>

<script>
export default {
       data() {
              return {
                     users: null
              }
       },
       mounted() {
              axios.get("https://jsonplaceholder.typicode.com/users").then(response => (this.users = response))
       }
}
</script>
<style>
</style>