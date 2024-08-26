<template>
  <div class="row">
    <div class="education-col">
      <hr />
      <h3>Education</h3>
      <hr />
      <div class="container">
        <CvEducation
          v-for="education of data.education"
          :education="education"
          :key="education.title"
        ></CvEducation>

        <CvSkills />

        <CvTechnologies />
      </div>
    </div>
    <div class="ruler"></div>
    <div class="experience-col">
      <hr />
      <h3>Work experience</h3>
      <hr />

      <div class="container">
        <CvExperience />
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap-reverse;
  position: relative;

  .education-col {
    flex: 1 0;
  }

  .experience-col {
    flex: 2 0;

    h3,
    .container {
      padding-left: 48px;
    }
  }

  @media screen and (max-width: 760px) {
    .education-col {
      flex: 1 0 100%;
    }

    .experience-col {
      flex: 1 0 100%;

      h3,
      .container {
        padding-left: 16px;
      }
    }

    .ruler {
      display: none;
    }
  }
}

h3 {
  padding: 8px 16px;
}
</style>

<script setup lang="ts">
import data from '../../data'
import CvEducation from './Body/CvEducation.vue'
import CvSkills from './Body/CvSkills.vue'
import CvTechnologies from './Body/CvTechnologies.vue'
import CvExperience from './Body/CvExperience.vue'
</script>
