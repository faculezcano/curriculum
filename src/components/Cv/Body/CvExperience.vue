<script setup lang="ts">
import data from '../../../data'
</script>

<template>
  <div v-for="experience of data.experience" :key="experience.company">
    <div class="company">
      <a :href="experience.link" target="_blank">
        <h4>{{ experience.company }}</h4>
      </a>
      <div>{{ experience.from }} - {{ experience.to ?? 'present' }}</div>
    </div>
    <div class="position">{{ experience.position }}</div>
    <p>{{ experience.description }}</p>
  </div>
</template>

<style scoped>
.company {
  display: flex;
  justify-content: space-between;
}

.position {
  font-weight: 100;
}
</style>
