<script setup lang="ts">
import data from '../../data'
</script>

<template>
  <header>
    <div class="header-decoration">
      <div class="ruler"></div>
    </div>
    <h1>{{ data.name }}</h1>
    <h2>{{ data.title }}</h2>
  </header>
</template>

<style scoped>
header {
  text-align: center;

  .header-decoration {
    display: flex;

    .ruler {
      height: 48px;
    }
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 8px;
    line-height: 1;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1rem;
    font-family: FuturaLight;
    margin-bottom: 1rem;
  }
}
</style>
