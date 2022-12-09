<script>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- Header -->
  <header class="header">
    <RouterLink to="/" class="logo"> <i class="fa-solid fa-newspaper"></i> Amnesia News </RouterLink>
    <nav class="navbar">
      <RouterLink to="/">Beranda</RouterLink>
      <RouterLink to="/dapil">Dapil</RouterLink>
      <RouterLink to="/polling">Polling</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
    </nav>
  </header>
  <!-- End Header -->

  <!-- Berita Section  -->
  <!-- Login Section -->
  <!-- Register Section -->
  <!-- Validasi Section -->
  <!-- Reset Password Section -->
  <RouterView />

</template>