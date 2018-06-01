<template>
  <div id="app">
    <h1>Cat counters</h1>
    <router-link
      :to="{ name: 'StepOne' }"
      class="links-app">
      StepOne
    </router-link>
    <router-link
      :to="{ name: 'StepTwo' }"
      class="links-app">
      StepTwo
    </router-link>
    <router-link
      :to="{ name: 'StepThree' }"
      class="links-app">
      StepThree
    </router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.links-app {
  margin-right: 20px;
}
</style>
