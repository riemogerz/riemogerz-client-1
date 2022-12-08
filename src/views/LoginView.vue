<script>
import { mapWritableState, mapActions } from 'pinia'
import { useUserStore } from '../stores/user';

export default {
  name: 'LoginView',
  computed: {
    ...mapWritableState(useUserStore, ['isLogin', 'userData'])
  },
  methods: {
    ...mapActions(useUserStore, ['loginApp'])
  }
}
</script>
<template>
  <section class="form-input">
    <form @submit.prevent="loginApp">

      <div class="heading">
        <span>Login</span>
        <h3>Amnesia News</h3>
      </div>

      <div class="flex">
        <div class="inputBox">
          <span>Email</span>
          <input type="text" placeholder="email" v-model="userData.email">
        </div>
        <div class="inputBox">
          <span>Password</span>
          <input type="password" placeholder="password" v-model="userData.password">
        </div>
      </div>
      <input type="submit" value="Login" class="btn">

    </form>
  </section>
</template>