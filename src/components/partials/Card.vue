<template>
       <div>
              {{ data }}
       </div>
</template>

<script>
export default {
       data() {
              return {
                     data
              }
       },
       mounted() {
              axios.get("https://jsonplaceholder.typicode.com/users").then(response => this.data = response)
       }
}
</script>

<style></style>