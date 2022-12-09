<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import { useUserStore } from '../stores/user';

import Footer from '../components/Footer.vue';
export default {
	name: 'DapilView',
	data() {
		return {
		}
	},
	components: {
		Footer
	},
	computed: {
		...mapState(useUserStore, ['dataDapilAll', 'daftarProvinsi', 'dataDapilProvinsi',]),
		...mapWritableState(useUserStore, ['namaProvinsi'])
	},
	methods: {
		...mapActions(useUserStore, ['fetchDapilDprRi', 'fetchNamaProvinsi', 'fetchDapilDprRiPerProvinsi']),

	},
	async created() {
		await this.fetchDapilDprRi()
		await this.fetchNamaProvinsi()
	},
	mounted() {
		this.fetchDapilDprRiPerProvinsi()
	}
}
</script>
fetchDapilDprRi
<template>
	<section class="news" id="news">
		<div class="heading">
			<span>Data Dapil</span>
			<h3>Pemilu Anggota DPR-RI Tahun 2019</h3>
		</div>

		<div class="box-chart">
			<h3>Alokasi Kursi</h3>
			<p>Perbandingan Kursi setiap Dapil di Indonesia</p>
			<column-chart :data="dataDapilAll"></column-chart>
		</div>

		<div class="box-chart">
			<h3>Alokasi Kursi Per Provinsi</h3>

			<p>Perbandingan Kursi Dapil di Indonesia pada</p>
			<label for="provinsi">Provinsi: </label>
			<select id="provinsi" @change="fetchDapilDprRiPerProvinsi($event)" v-model="namaProvinsi">
				<option :value="prov" v-for="prov in daftarProvinsi" :key="`prov-${prov}`">{{ prov }}</option>
			</select>

			<column-chart :data="dataDapilProvinsi"></column-chart>
		</div>

	</section>

	<Footer />
</template>

<style>
.container {
	padding-left: 100px;
	padding-right: 100px;
}

.box-chart {
	margin-bottom: 40px;
}
</style>