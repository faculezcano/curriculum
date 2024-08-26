<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import data from '../../data'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

const icons = { ...fas, ...far, ...fab }
</script>

<template>
  <section>
    <div class="row">
      <div class="about-col">
        <h3>About</h3>
        <p>{{ data.about }}</p>
      </div>
      <div class="contact-col">
        <div v-for="contact of data.contact" :key="contact.text" class="contact">
          <a :href="contact.link" :target="contact.target ?? '_blank'">
            <FontAwesomeIcon v-if="contact.icon" :icon="icons[contact.icon]" fixed-width />
            {{ contact.text }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  .row {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    .about-col {
      flex: 1 0 0;
    }

    .contact-col {
      flex: auto 0;
      display: flex;
      flex-direction: column;
      gap: 8px;
      justify-content: space-evenly;
    }

    @media screen and (max-width: 760px) {
      .about-col {
        flex: 1 0 100%;
      }

      .contact-col {
        flex: 1 0 100%;
      }
    }
  }
}
</style>
