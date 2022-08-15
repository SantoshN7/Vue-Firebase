<template>
  <CommonForm title="Sign up" @onSubmit="onSubmit"></CommonForm>
</template>

<script>
import {createUserWithEmailAndPassword} from 'firebase/auth';
import CommonForm from './base-ui/CommonForm.vue';
  export default {
    components: {
      CommonForm
    },
    methods: {
      onSubmit(user) {
        createUserWithEmailAndPassword(this.$store.state.auth, user.email, user.password)
        .then(() => {
          this.$router.push('/');
        }).catch((error) => console.error('Failed to register new user.', error.message));
      }
    }
  }
</script>

