<script>
import io from 'socket.io-client';

import { mapWritableState, mapActions } from 'pinia'
import { useUserStore } from '../stores/user';

export default {
	name: 'PollingView',
	data() {
		return {
			socket: io('localhost:3000')
		}
	},
	computed: {
		...mapWritableState(useUserStore, ['inputPolling', 'daftarPolling'])
	},
	methods: {
		...mapActions(useUserStore, ['polling', 'fetchDataPolling']),
	},
	async created() {
		await this.fetchDataPolling()

		// Setting socket
		const socket = io('http://localhost:3000');
		let data;
		let myChart;
		let context;

		console.log(socket, '============');

		this.socket.on('vote', (response) => {

			console.log(response, '----------');
			let i = 0;
			for (let key in response) {
				data.labels[i] = `${response[i]._id} (${response[i].total_vote})`;
				data.datasets[0].data[i] = response[i].total_vote;

				i++;
			}

			// Update chart
			myChart.update();
		});

		// Chart Data
		data = {
			labels: [],
			datasets: [
				{
					label: ['# of Votes'],
					data: [],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)'
					],
					borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)'
					],
					borderWidth: 3,
				}
			]
		};

		context = document.getElementById('vote-result').getContext('2d');

		myChart = new Chart(context, {
			type: 'bar',
			data: data,
			animation: {
				animateScale: false
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				}
			}
		});

		console.log(myChart, '==========');
	}
}
</script>
<template>
	<section class="form-input">
		<div class="heading">
			<span>Polling Capres 2024</span>
			<h3>Amnesia News</h3>
			<column-chart :data="daftarPolling"></column-chart>

			<!-- Testing Chart -->
			<div class="vote-result-wrapper">
				<canvas id="vote-result"></canvas>
			</div>

		</div>

		<!-- <column-chart :data="dataDapilAll"></column-chart> -->

		<!-- <div class="vote-result-wrapper">
			<canvas id="vote-result"></canvas>
		</div> -->
	</section>

	<section class="form-input">
		<form @submit.prevent="polling">

			<div class="flex">
				<div class="inputBox">
					<span>
						<label for="provinsi">Nama yang dipilih:</label>
					</span>
					<select id="provinsi" v-model="inputPolling">
						<option active>-- Pilih --</option>
						<option value="Anies Baswedan">Anies Baswedan</option>
						<option value="Ganjar Pranowo">Ganjar Pranowo</option>
						<option value="Muhammad Rizali Rizqan">Muhammad Rizali Rizqan</option>
						<option value="Prabowo Subianto">Prabowo Subianto</option>
						<option value="Puan Maharani">Puan Maharani</option>
					</select>
				</div>
			</div>
			<input type="submit" value="Pilih" class="btn">

		</form>
	</section>
</template>