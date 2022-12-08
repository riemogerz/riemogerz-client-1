<script>
export default {
	name: 'ResetPasswordView'
}
</script>

<template>
	<section class="form-input">
		<form action="">

			<div class="heading">
				<span>Reset Password</span>
				<h3>Amnesia News</h3>
			</div>

			<div class="flex">
				<div class="inputBox">
					<span>Password</span>
					<input type="text" placeholder="Password" name="" id="">
				</div>
				<div class="inputBox">
					<span>Repassword</span>
					<input type="text" placeholder="Repassword" name="" id="">
				</div>
			</div>
			<div class="flex">
				<div class="inputBox">
					<span>Email</span>
					<input type="text" placeholder="Email" name="" id="">
				</div>
			</div>
			<input type="submit" value="Login" class="btn">

		</form>
	</section>
</template>