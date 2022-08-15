<template>
  <CommonForm title="Sign In" @onSubmit="onSubmit"></CommonForm>
</template>

<script>
import {signInWithEmailAndPassword} from 'firebase/auth';
import CommonForm from './base-ui/CommonForm.vue';
  export default {
    components: {
      CommonForm
    },
    methods: {
      onSubmit(user) {
        signInWithEmailAndPassword(this.$store.state.auth, user.email, user.password)
        .then(() => {
          this.$router.push('/');
        }).catch((error) => console.error('Failed to login user.', error.message));
      }
    }
  }
</script>