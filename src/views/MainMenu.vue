<script setup></script>

<template>
  <header>
    <h1>Main menu</h1>
    <button @click="$router.push('/game')">Go to Game Board</button>
  </header>
</template>

<style scoped>
header {
  text-align: center;
}
</style>
