<script setup lang="ts">
import data from '../../../data'
</script>

<template>
  <div>
    <h4>Skills</h4>
    <ul>
      <li v-for="skill of data.skills" :key="skill">{{ skill }}</li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  padding-left: 24px;
}
</style>
