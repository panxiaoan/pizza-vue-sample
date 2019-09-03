<template>
  <div id="app">
    <div class="container-fluid">
        <app-header></app-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    "app-header": Header
  }
}
</script>
