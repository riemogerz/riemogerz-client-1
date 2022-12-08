<script>
import { mapState, mapActions } from 'pinia'
import { useUserStore } from '../stores/user';

export default {
	name: 'Berita',
	props: ['item']
}
</script>

<template>
	<div>
		<div class="box">
			<div class="image">
				<h3> <i class="fa-solid fa-calendar"></i> {{ item.pubDate }} </h3>
				<img :src="item.thumbnail" :alt="item.title">
			</div>
			<div class="content">
				<div class="tags">
					<a href="#"> <i class="fa-solid fa-tag"></i> Politik </a>

				</div>
				<h3>{{ item.title }}</h3>
				<p>{{ item.description }}</p>
				<a :href="item.link" class="btn" terget="_blank">Baca selanjutnya...</a>
			</div>
		</div>
	</div>
</template>