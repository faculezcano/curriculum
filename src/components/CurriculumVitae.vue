<template>
  <div class="main">
    <CvHeader />

    <hr />

    <CvAbout />

    <CvBody />

    <canvas class="qrcode" ref="qrcode"></canvas>
  </div>
</template>

<style scoped>
.main {
  padding: 0 32px;
}

.qrcode {
  display: none;
  position: absolute;
  margin: 16px;
  bottom: 0;
  right: 0;
}

@media print {
  .qrcode {
    display: initial;
  }
}
</style>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import QRCode from 'qrcode'
import CvAbout from './Cv/CvAbout.vue'
import CvHeader from './Cv/CvHeader.vue'
import CvBody from './Cv/CvBody.vue'

const qrcode = ref<HTMLCanvasElement>()

onMounted(() => {
  QRCode.toCanvas(qrcode.value, document.location.href, { margin: 0, scale: 2 })
})
</script>
