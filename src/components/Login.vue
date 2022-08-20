<template>
  <div class="fullpage">
    <CommonForm title="Sign In" submit-text="Login" @onSubmit="onSubmit"></CommonForm>
  </div>
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

<style>
  .fullpage {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
  }
</style>