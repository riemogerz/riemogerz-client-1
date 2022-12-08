<script>
import { mapWritableState, mapActions } from 'pinia'
import { useUserStore } from '../stores/user';

export default {
  name: 'RegisterView',
  computed: {
    ...mapWritableState(useUserStore, ['userData'])
  },
  methods: {
    ...mapActions(useUserStore, ['registerApp'])
  }
}
</script>

<template>
  <section class="form-input">
    <form @submit.prevent="registerApp">

      <div class="heading">
        <span>Register</span>
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
        <div class="inputBox">
          <span>Nama Lengkap</span>
          <input type="text" placeholder="nama lengkap" v-model="userData.fullName">
        </div>
        <div class="inputBox">
          <span>Foto</span>
          <input type="text" placeholder="foto" v-model="userData.photo">
        </div>
      </div>
      <input type="submit" value="Login" class="btn">

    </form>
  </section>
</template>