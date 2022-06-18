<template>
    <div class="common-form-container">
      <h3>{{ title }}</h3>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" name="email" class="form-control" v-model="email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" name="password" class="form-control" v-model="password">
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
      <button type="button" class="btn btn-default" @click="onClear">Clear</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ['title'],
  emits: ['onSubmit'],
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', {email: this.email, password: this.password});
    },
    onClear() {
      this.email = '';
      this.password = '';
    }
  }
}
</script>


<style scoped>
.common-form-container {
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 50%;
  border: 1px solid black;
  padding: 15px;
}
</style>