<template>
  <div class="container">
    <Navbar @logout='exitChat' />
  </div>
</template>

<script>

import Navbar from '../components/Navbar.vue'
import { useRouter } from 'vue-router'

export default {
  components: { Navbar },
  setup() {
    
    const router = useRouter()

    const exitChat = () => {
      router.push({ name: 'Welcome' })
    }

    return { exitChat }
  }
  
}
</script>

<style>

</style>