<template>
  <Card v-if="!!coursesList" v-for="course in coursesList" :key="course.id">
    <Course :course="course"></Course>
  </Card>
</template>

<script>
  import {ref} from 'vue';
  import Course from './Course.vue';
  import { collection, getDocs } from "firebase/firestore";
  import {firebasedb} from '../firebaseSetup'; 
  export default {
    components: {
      Course
    },
    setup() {
      const coursesList = ref(null);
      getDocs(collection(firebasedb, 'cources')).then((_snapshot) => {
        coursesList.value = _snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }
        });
      });

      return {coursesList};
    }
  }
</script>

