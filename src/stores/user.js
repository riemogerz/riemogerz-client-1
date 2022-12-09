import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';

import axios from 'axios'
const baseUrl = 'http://localhost:3000'
const router = useRouter()

export const useUserStore = defineStore('user', {
	state: () => ({
		isLogin: false,
		userData: {
			email: '',
			password: '',
			fullName: '',
			photo: ''
		},
		berita: [],
		dataDapilAll: [],
		dataDapilProvinsi: [],
		namaProvinsi: 'ACEH',
		daftarProvinsi: [],

	}),
	actions: {
		async checkLogin() {
			if (!localStorage.getItem('access_token')) {
				this.isLogin = false
			} else {
				this.isLogin = true
			}
		},

		async clearInput() {
			this.userData = {
				email: '',
				password: '',
				fullName: '',
				photo: ''
			}
		},

		async popUpError(message) {
			Swal.fire({
				icon: 'error',
				title: 'Error!',
				text: message,
				showConfirmButton: false,
				timer: 3000
			})
		},
		async popUpSuccess(message) {
			Swal.fire({
				icon: 'success',
				title: 'Success',
				text: message,
				showConfirmButton: false,
				timer: 3000
			})
		},

		async forgotPassword() {
			try {
				const { data } = await axios
			} catch (error) {
				console.log(error);
			}
		},

		// LOGIN
		async loginApp() {
			try {
				const { data } = await axios({
					url: `${baseUrl}/users/login`,
					method: 'post',
					data: {
						email: this.userData.email,
						password: this.userData.password
					}
				})
				const { access_token, user_id, email } = data
				localStorage.setItem('access_token', access_token)
				localStorage.setItem('user_id', user_id)
				localStorage.setItem('email', email)
				localStorage.setItem('validateKey', validateKey)

				// router.push('/')
				console.log(data);

				this.clearInput()
			} catch (error) {
				this.popUpError(error.response.data.message)
				// console.log(error);
			}
		},

		// REGISTER
		async registerApp() {
			try {
				const { data } = await axios({
					url: `${baseUrl}/users/register`,
					method: 'post',
					data: {
						email: this.userData.email,
						password: this.userData.password,
						fullName: this.userData.fullName,
						photo: this.userData.photo,
					}
				})

				// router.push('/')
				console.log(data);

				this.clearInput()
			} catch (error) {
				this.popUpError(error.response.data.message)
				// console.log(error);
			}
		},

		// DATA
		async fetchBerita() {
			try {
				const { data } = await axios({
					url: `${baseUrl}/berita`,
					method: 'get'
				})

				this.berita = data.posts

				console.log(data.posts, '---');
			} catch (error) {
				console.log(error);
			}
		},

		async fetchDapilDprRi() {
			try {
				const { data } = await axios({
					url: `${baseUrl}/pemilu/dapil/dprri`,
					method: 'get'
				})
				let { count, dapil } = data
				let dataSend = dapil.map(el => {
					delete el.TingkatDapil
					delete el.NamaProvinsi
					delete el.wilayah
					delete el.JumlahKursi
					delete el.MinimumKursi
					delete el.MaksimumKursi
					delete el.id
					delete el.jumlahWilayah
				})
				let arr = []
				for (let i = 0; i < dapil.length; i++) {
					let nama = dapil[i].namaDapil
					let kursi = dapil[i].AlokasiKursi
					arr.push([nama, kursi])
				}

				this.dataDapilAll = arr
			} catch (error) {
				console.log(error);
			}
		},

		async fetchDapilDprRiPerProvinsi() {
			console.log(this.namaProvinsi);
			try {
				const { data } = await axios({
					url: `${baseUrl}/pemilu/dapil/dprri/${this.namaProvinsi}`,
					method: 'get'
				})
				let { count, dapil } = data
				let dataSend = dapil.map(el => {
					delete el.TingkatDapil
					delete el.NamaProvinsi
					delete el.wilayah
					delete el.JumlahKursi
					delete el.MinimumKursi
					delete el.MaksimumKursi
					delete el.id
					delete el.jumlahWilayah
				})
				let arr = []
				for (let i = 0; i < dapil.length; i++) {
					let nama = dapil[i].namaDapil
					let kursi = dapil[i].AlokasiKursi
					arr.push([nama, kursi])
				}

				this.dataDapilProvinsi = arr
			} catch (error) {
				console.log(error);
			}
		},

		async fetchNamaProvinsi() {
			try {
				const { data } = await axios({
					url: `${baseUrl}/pemilu/dapil/dprri?type=true`,
					method: 'get'
				})
				let { count, provinsi } = data
				this.daftarProvinsi = provinsi

			} catch (error) {
				console.log(error);
			}
		},
	}
})