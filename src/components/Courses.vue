<template>
  <div class="courses-list">
    <Card class="course" v-if="!!coursesList" v-for="course in coursesList" :key="course.id">
      <Course :course="course"></Course>
    </Card>
  </div>
</template>

<script>
  import {computed} from 'vue';
  import { useStore } from 'vuex'
  import Course from './Course.vue';
  export default {
    components: {
      Course
    },
    setup() {
      const store = useStore();
      const coursesList = computed(() => store.state.courses);
      store.dispatch('loadCourses');

      return {coursesList};
    }
  }
</script>

<style>
  .courses-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

