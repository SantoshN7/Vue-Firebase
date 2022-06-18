<template>
  <CommonForm title="Sign In" @onSubmit="onSubmit"></CommonForm>
</template>

<script>
import CommonForm from './CommonForm.vue';
  export default {
    inject: ['firebase','firebaseAuth'],
    components: {
      CommonForm
    },
    methods: {
      onSubmit(user) {
        this.firebase.signInWithEmailAndPassword(this.firebaseAuth, user.email, user.password)
        .then((data) => {
          this.$router.push('/');
        }).catch((error) => console.error('Failed to login user.', error.message));
      }
    }
  }
</script>