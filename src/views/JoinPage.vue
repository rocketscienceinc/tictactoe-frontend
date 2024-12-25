<template>
  <div></div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const router = useRouter()

onMounted(() => {
  let code = window.location.pathname.split('/')[2]
  router.push('/game?code=' + code)
})
</script>
