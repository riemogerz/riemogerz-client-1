<script>
import { mapState, mapActions } from 'pinia'
import { useUserStore } from '../stores/user';

import Berita from '../components/Berita.vue'

export default {
	name: 'Konten',
	components: {
		Berita
	},
	computed: {
		...mapState(useUserStore, ['berita'])
	},
	methods: {
		...mapActions(useUserStore, ['fetchBerita'])
	},
	created() {
		this.fetchBerita()
	},
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
			<Berita v-for="(item, idx) in berita" :item="item" :key="`berita-${idx}`" />
		</div>
		<!-- End Berita Page-->

	</section>
</template>