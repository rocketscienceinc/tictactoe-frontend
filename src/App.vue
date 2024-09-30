<script setup>
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main><router-view></router-view></main>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
</style>
