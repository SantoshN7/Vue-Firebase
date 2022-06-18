<template>
  <CommonForm title="Sign up" @onSubmit="onSubmit"></CommonForm>
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
        console.log(user)
        this.firebase.createUserWithEmailAndPassword(this.firebaseAuth, user.email, user.password)
        .then((data) => {
          this.$router.push('/login');
        }).catch((error) => console.error('Failed to register new user.', error.message));
      }
    }
  }
</script>

