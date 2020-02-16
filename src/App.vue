<template>
	<div>
<!--	start | player template -->
		<transition name="fade">
			<app-player v-if="isShowFullPlayer"></app-player>
		</transition>
<!--	end | player template -->
		<main class="position-absolute l-0 t-0 b-nav w-100 text-light overflow-auto px-3">
<!--		start | alerts -->
			<transition name="fade-slide-y">
				<div v-show="isShowAlerts && !isAboutShow" class="fixed-top text-center p-4">
					<div class="alert alert-dark small p-2 border-0">
						<span v-show="isHideListened">Listened books are hide</span>
						<span v-show="!isHideListened">Listened books are show</span>
					</div>
				</div>
			</transition>
<!--		end | alerts -->
			<div class="media align-items-center my-3" v-for="(book, index) in books" v-bind:key="index" v-show="!(isHideListened && book.listened == 100)" v-on:click="selectBook(index)">
				<img class="mr-3 wh-78p rounded" v-bind:src="'http://mobitoon.ru/novelist/images/books/' + book.id + '/preview.jpg'" v-bind:alt="book.title + ' by ' + book.author">
				<div class="media-body">
					<div class="h5 mb-0">{{ book.title }}</div>
					<small class="text-white-50">{{ book.author }}</small>
					<div v-bind:class="{ 'text-success' : book.listened < 100 }">{{ book.listened == 100 ? 'Listening completed' : book.listened + '% listened' }}</div>
				</div>
			</div>
<!--		start | about  -->
			<transition name="fade">
				<div v-show="isAboutShow" v-on:click="toggleAbout" class="about-container position-fixed l-0 t-0 b-nav w-100 bg-dark">
					<div class="d-flex flex-column h-100 px-3 py-5">
						<a class="w-50 mx-auto" href="http://noveli.st" target="_blank">
							<img  src="./assets/logoname.svg" alt="Novelist">
						</a>
						<div class="m-auto">
							... yesterday, here today and in the future all innovations from Novelist guarantee the best ever books listening product!
							<div class="text-right">
								<i>Novelist team</i>
							</div>
						</div>
						<small class="mx-auto text-white-50">&copy; 2020 by NOVELI.ST</small>
					</div>
				</div>
			</transition>
<!--		end | about  -->			
		</main>
		<nav class="fixed-bottom d-flex w-100 py-1 bg-light text-dark">
			<svg v-on:click="toggleAbout" class="my-auto px-3 py-1 wh-30p content-box" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><circle fill="#D4145A" cx="128" cy="128" r="128"/><path fill="#ffffff" d="M113.9,140.5c-6.2-6.9-6.6-17.3-0.6-24.6c6.6-8.1,18.7-9.3,26.7-2.7c8.2,6.6,9.4,18.7,2.7,26.7 c-6,7.4-16.3,9.1-24.3,4.3L44,235.4l3.8,2.9c2.6-3.9,31.1-42,114.1-52.8c20.1-50.6,72.5-117.3,81.8-128.8 c-15.6-25.5-39.4-45.3-67.7-56l0,0c-9,10.7-64.1,76.2-110.2,106.3c6,83.4-26.3,118.2-29.9,121.6l3.5,3.1L113.9,140.5z"/></svg>
			<svg class="ml-auto border-right px-3 py-2 wh-24p content-box" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path></svg>
			<div class="position-relative">
				<div v-show="isSortMenuOpen" class="position-absolute b-0 bg-light w-100 rounded">
					<div class="d-flex flex-column py-1">
						<svg class="px-3 py-2 wh-24p content-box" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M176 352h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm112-128h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-56l61.26-70.45A32 32 0 0 0 432 65.63V48a16 16 0 0 0-16-16H288a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h56l-61.26 70.45A32 32 0 0 0 272 190.37V208a16 16 0 0 0 16 16zm159.06 234.62l-59.27-160A16 16 0 0 0 372.72 288h-41.44a16 16 0 0 0-15.07 10.62l-59.27 160A16 16 0 0 0 272 480h24.83a16 16 0 0 0 15.23-11.08l4.42-12.92h71l4.41 12.92A16 16 0 0 0 407.16 480H432a16 16 0 0 0 15.06-21.38zM335.61 400L352 352l16.39 48z"></path></svg>
						<svg class="px-3 py-2 wh-24p content-box" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M176 352h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.36 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm240-64H288a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h56l-61.26 70.45A32 32 0 0 0 272 446.37V464a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-56l61.26-70.45A32 32 0 0 0 432 321.63V304a16 16 0 0 0-16-16zm31.06-85.38l-59.27-160A16 16 0 0 0 372.72 32h-41.44a16 16 0 0 0-15.07 10.62l-59.27 160A16 16 0 0 0 272 224h24.83a16 16 0 0 0 15.23-11.08l4.42-12.92h71l4.41 12.92A16 16 0 0 0 407.16 224H432a16 16 0 0 0 15.06-21.38zM335.61 144L352 96l16.39 48z"></path></svg>
					</div>
					<svg v-on:click="isSortMenuOpen = !isSortMenuOpen" class="px-3 py-2 wh-24p content-box" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>						
				</div>
				<svg v-on:click="isSortMenuOpen = !isSortMenuOpen" class="px-3 py-2 wh-24p content-box" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path></svg>
			</div>
			<div v-on:click="toggleHideListened" v-bind:class="{ 'text-muted': isHideListened }">
				<svg class="px-3 py-2 wh-24p content-box" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M272 136c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zm176 222.4V25.6c0-16-9.6-25.6-25.6-25.6H96C41.6 0 0 41.6 0 96v320c0 54.4 41.6 96 96 96h326.4c12.8 0 25.6-9.6 25.6-25.6v-16c0-6.4-3.2-12.8-9.6-19.2-3.2-16-3.2-60.8 0-73.6 6.4-3.2 9.6-9.6 9.6-19.2zM240 56c44.2 0 80 28.7 80 64 0 20.9-12.7 39.2-32 50.9V184c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16v-13.1c-19.3-11.7-32-30-32-50.9 0-35.3 35.8-64 80-64zM124.8 223.3l6.3-14.7c1.7-4.1 6.4-5.9 10.5-4.2l98.3 42.1 98.4-42.1c4.1-1.7 8.8.1 10.5 4.2l6.3 14.7c1.7 4.1-.1 8.8-4.2 10.5L280.6 264l70.3 30.1c4.1 1.7 5.9 6.4 4.2 10.5l-6.3 14.7c-1.7 4.1-6.4 5.9-10.5 4.2L240 281.4l-98.3 42.2c-4.1 1.7-8.8-.1-10.5-4.2l-6.3-14.7c-1.7-4.1.1-8.8 4.2-10.5l70.4-30.1-70.5-30.3c-4.1-1.7-5.9-6.4-4.2-10.5zm256 224.7H96c-19.2 0-32-12.8-32-32s16-32 32-32h284.8zM208 136c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16z"></path></svg>
			</div>
		</nav>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isShowAlerts: false,
				isAboutShow: false,
				isHideListened: false,
				isSortMenuOpen: false,
				isShowFullPlayer: false,
				bookIndex: 0,
				books: [
					{
						id: 11,
						// thumbnail: "http://mobitoon.ru/novelist/images/books/11/preview.jpg",
						title: "Eleven book",
						author: "Mr. Eleventh",
						listened: 100,
						stars: 5
					},
					{
						id: 4,
						// thumbnail: "http://mobitoon.ru/novelist/images/books/4/preview.jpg",
						title: "Fourth book",
						author: "Mr. Fourth",
						listened: 100,
						stars: 4
					},
					{
						id: 5,
						// thumbnail: "http://mobitoon.ru/novelist/images/books/5/preview.jpg",
						title: "Fifth book",
						author: "Mr. Fifth",
						listened: 100,
						stars: 4
					},
					{
						id: 12,
						// thumbnail: "http://mobitoon.ru/novelist/images/books/12/preview.jpg",
						title: "Twelve book",
						author: "Mrs. Twelveth",
						listened: 100,
						stars: 0
					},
					{
						id: 3,
						// thumbnail: "http://mobitoon.ru/novelist/images/books/3/preview.jpg",
						title: "Third book",
						author: "Mrs. Third",
						listened: 100,
						stars: 2
					},
					{
						id: 6,
						// thumbnail: "http://mobitoon.ru/novelist/images/books/6/preview.jpg",
						title: "Sixth book",
						author: "Ms. Sexth",
						listened: 94,
						stars: 0
					},
					{
						id: 7,
						// thumbnail: "http://mobitoon.ru/novelist/images/books/7/preview.jpg",
						title: "Seventh book",
						author: "Mr. Seventh",
						listened: 100,
						stars: 1
					},
					{
						id: 8,
						// thumbnail: "http://mobitoon.ru/novelist/images/books/8/preview.jpg",
						title: "Eighth book",
						author: "Mr. Eighth",
						listened: 7,
						stars: 0
					},
					{
						id: 9,
						// thumbnail: "http://mobitoon.ru/novelist/images/books/9/preview.jpg",
						title: "Nineth book",
						author: "Mrs. Nineth",
						listened: 65,
						stars: 0
					},
					{
						id: 10,
						// thumbnail: "http://mobitoon.ru/novelist/images/books/10/preview.jpg",
						title: "Ten book",
						author: "Mrs. Tenth",
						listened: 65,
						stars: 0
					}
				]
			}
		},
        provide() {
			const playBook = {}
			Object.defineProperty(playBook, 'bookIndex', {
				enumerable: true,
				get:() => this.books[this.bookIndex]
			})
            return { playBook }
        },
		methods: {
			toggleHideListened(){
				this.isHideListened = !this.isHideListened
			},
			selectBook(index){
				this.isShowFullPlayer = true
				this.bookIndex = index

				console.log(index, this.isShowFullPlayer, this.prvBook)
			},
			toggleAbout(){
				this.isAboutShow = !this.isAboutShow
			}
		},
		watch: {
			isHideListened(){
				this.isShowAlerts = true
				setTimeout(() => this.isShowAlerts = false, 2000)
			},
			isAboutShow(){
				console.log('About showed')
			},
			isShowFullPlayer(){
				console.log('isShowFullPlayer was change')
			}
		},
		// components: {
		// }
	}
</script>

<style scoped>
    /* .opacity-50:not(:hover) {
		opacity: .50;
	} */
    .fade-slide-y-enter-active { transition: all .3s ease-in; }
    .fade-slide-y-leave-active { transition: all .6s ease-out; }
    .fade-slide-y-enter, .fade-slide-y-leave-to
    {
        transform: translateY(-30px);
        opacity: 0;
	}
	
	.fade-enter-active,
	.fade-leave-active { transition: opacity .5s; }
	.fade-enter,
	.fade-leave-to { opacity: 0; }
</style>