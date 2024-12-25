<template>
  <body>
    <appHeader />
    <div class="qr-main">
      <qrcode-vue :value="value" :size="size" level="H" render-as="svg" />
      <button @click="$router.push('/game')">back to room code</button>
    </div>
  </body>
</template>

<script setup>
import appHeader from '@/components/appHeader.vue'
import { createApp } from 'vue'
import QrcodeVue from 'qrcode.vue'

createApp({
  data: function () {
    return {
      value: 'https://example.com'
    }
  },
  template: '<qrcode-vue :value="value"></qrcode-vue>',
  components: {
    QrcodeVue
  }
}).mount('#root')
</script>
<style></style>
