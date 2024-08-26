<template>
  <div class="education">
    <div class="title">{{ education.title }}</div>
    <div class="institution">{{ education.institution }}</div>
    <div>{{ education.from }} - {{ education.to ?? 'Present' }}</div>
  </div>
</template>

<style scoped>
.education {
  .title {
    font-weight: bold;
  }

  .institution {
    font-weight: 300;
  }
}
</style>

<script setup lang="ts">
import type { Education } from '../../../data'

defineProps<{
  education: Education
}>()
</script>
