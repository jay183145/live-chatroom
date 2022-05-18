<template>
  <div class="welcome container">
    <p>Welcome</p>
    <SignupForm />
  </div>
</template>

<script>
  import SignupForm from '../components/SignupForm.vue'
  export default {
    components: { SignupForm }
  }
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
  }
</style>