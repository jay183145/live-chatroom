<template>
  <div class="container">
    <Navbar />
    <NewChatForm />
  </div>
</template>

<script>
import NewChatForm from '@/components/NewChatForm.vue'
import Navbar from '../components/Navbar.vue'
import { useRouter } from 'vue-router'
import getUser from '@/composables/getUser'
import { watch } from '@vue/runtime-core'

export default {
  components: { Navbar, NewChatForm },
  setup() {
    const { user } = getUser()
    const router = useRouter()

    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Welcome' })
      }
    })
  }
  
}
</script>

<style>

</style>