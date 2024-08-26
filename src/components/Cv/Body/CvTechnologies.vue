<script setup lang="ts">
import data from '../../../data'
</script>

<template>
  <div>
    <h4>Technologies</h4>
    <div class="technologies">
      <div v-for="technology of data.technologies" :key="technology.name" class="technology">
        <div>{{ technology.name }}</div>
        <p>{{ technology.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.technologies {
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  .technology {
    p {
      font-size: 12px;
    }
  }
}
</style>
