<script>
// import TheWelcome from '../components/TheWelcome.vue'
import Berita from '../components/Berita.vue'
export default {
  name: 'HomeView',
  components: {
    Berita
  }
}
</script>

<template>
  <!-- Banner Page -->
  <section class="main">
    <video src="../../src/assets/video.mp4" autoplay loop mute type="mp4"></video>
    <img src="../../src/assets/mask.jpg" class="mask" alt="mask">
    <h2 class="text-danger">Amnesia</h2>
    <p class="text-secondary">News</p>
  </section>
  <!-- End Banner Page -->

  <section class="news" id="news">
    <div class="heading">
      <span>Politik</span>
      <h3>Berita Politik Nasional</h3>
    </div>

    <!-- Berita Page -->
    <div class="box-container">
      <div v-for="berita in 8">
        <Berita />
      </div>
    </div>
    <!-- End Berita Page-->

  </section>

  <!-- Footer Page  -->
  <section class="footer">

    <div class="newsletter">
      <h3>Berlangganan</h3>
      <form action="">
        <input type="email" name="" placeholder="Silakan tulis email Anda" id="">
        <input type="submit" value="subscribe">
      </form>
    </div>

    <div class="box-container">
      <div class="box">
        <h3>Topik</h3>
        <a href=""><i class="fa-solid fa-arrow-right"></i> Politik</a>
        <a href=""><i class="fa-solid fa-arrow-right"></i> Nasional</a>
        <a href=""><i class="fa-solid fa-arrow-right"></i> Internasional</a>
        <a href=""><i class="fa-solid fa-arrow-right"></i> Hukum</a>
      </div>

      <div class="box">
        <h3>Pranala</h3>
        <a href=""> <i class="fa-solid fa-arrow-right"></i> Beranda</a>
        <a href=""> <i class="fa-solid fa-arrow-right"></i> Berita</a>
        <a href=""> <i class="fa-solid fa-arrow-right"></i> Tentang Kami</a>
      </div>

      <div class="box" style="width: 100%">
        <h3>Tentang Kami</h3>
        <p>Jl. Tirta Dharma Komp. Bersama, Jalur 1 No. 22B Kec. Banjarmasin Timur, Kota Banjarmasin, Kalimantan Selatan
        </p>
        <iframe scrolling="no" marginheight="0" marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=Jalan%20Pramuka%20Banjarmasin+(Amnesia%20News)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="100%" height="200" frameborder="0"></iframe>
      </div>
    </div>

    <div class="bottom">
      <div class="share">
        <a href="" class="fa-brands fa-facebook"></a>
        <a href="" class="fa-brands fa-twitter"></a>
        <a href="https://www.instagram.com/amnesiaindonesia/" class="fa-brands fa-instagram"></a>
        <a href="" class="fa-brands fa-linkedin"></a>
        <a href="" class="fa-brands fa-pinterest"></a>
      </div>
      <div class="credit"> Copyright 2022 <span>Riemogerz</span> </div>
    </div>

  </section>
  <!-- End Footer Page  -->
</template>
