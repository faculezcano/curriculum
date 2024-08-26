<template>
  <canvas class="qrcode" ref="qrcode"></canvas>
</template>

<style scoped>
.qrcode {
  display: none;
}

@media print {
  .qrcode {
    display: initial;
  }
}
</style>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import QRCode from 'qrcode'

const qrcode = ref<HTMLCanvasElement>()

onMounted(() => {
  QRCode.toCanvas(qrcode.value, document.location.href, { margin: 0, scale: 2, color: { dark: '#2c3e50', light: '#ffffff00' } })
})
</script>