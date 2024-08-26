<template>
  <div class="main">
    <CvHeader />

    <hr />

    <CvAbout />

    <CvBody />
  </div>
</template>

<style scoped>
.main {
  padding: 0 32px;
}
</style>

<script setup lang="ts">
import CvAbout from './Cv/CvAbout.vue'
import CvHeader from './Cv/CvHeader.vue'
import CvBody from './Cv/CvBody.vue'
</script>
