<template>
  <div class="app">
    <AppHeader />
    <router-view />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
</script>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
}
</style>
