<template>
       
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