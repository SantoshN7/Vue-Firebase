<template>
  <div class="template-modal-title">
    <span>Add new course</span>
  </div>
  <div class="template-modal-body">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="title">Course title</label>
        <input type="text" name="title" class="form-control" v-model="title" required>
      </div>
      <div class="form-group">
        <label for="skills">Skills</label>
        <input type="text" name="skills" class="form-control" v-model="skills" required>
      </div>
      <div class="button-group">
        <button type="submit" class="btn btn-primary">Add</button>
        <button type="button" class="btn btn-default" @click="onClose">Close</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import { useStore } from 'vuex'
import { collection, addDoc } from "firebase/firestore";
import { firebasedb } from '../firebaseSetup'; 

  const emit = defineEmits('close');
  const store = useStore();
  const title = ref('');
  const skills = ref('');
  const onSubmit = () => {
    const skillsArray = skills.value.split(',').map((e) => e.trim());
    const data = {
      name: title.value,
      skills: skillsArray,
      'owner-id': store.state.auth?.currentUser?.uid
    }
    addDoc(collection(firebasedb, 'cources'), data).then((_snapshot) => {
      console.log(_snapshot);
      store.dispatch('loadCourses');
    }).finally(() => {
      emit('close');
    });
  }

  const onClose = () => {
    emit('close');
  }
</script>