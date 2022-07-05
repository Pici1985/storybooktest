<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TestComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TestComponent from '@/components/TestComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    TestComponent
  }
}
</script>
