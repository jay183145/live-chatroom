<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email">
    <input :type="passwordType" required placeholder="password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Log in</button>
    <button @click.prevent="handlePassword">show password</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../composables/useLogin'

export default {
  setup(props, context) {
    const email = ref('')
    const password = ref('')

    const { error, login } = useLogin()

    const handleSubmit = async() => {
      await login(email.value, password.value)
      if (!error.value) {
        context.emit('login')
      }
    }

    
    let passwordType = ref('')
    let showPassword = ref(false)

    const handlePassword = () =>{
      showPassword = !showPassword
      if(!showPassword) {
        passwordType.value = "text"
      } else {
        passwordType.value = "password"
      }
    }


    return { email, password, handleSubmit, error, handlePassword, showPassword, passwordType }
  }
  
}
</script>

<style>

</style>