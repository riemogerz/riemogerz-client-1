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
	}
})