<template>
  <div>
    <h1>I am sorry,404 page not found</h1>
    <h1>{{msg}}</h1>
    <router-link to="/home">link home page</router-link>
  </div>
</template>

<script>
export default {
  name: 'Page404',
  props: {
    msg: String
  }
}
</script>

<style scoped>
</style>