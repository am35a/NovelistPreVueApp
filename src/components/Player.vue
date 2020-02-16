<template>
    <div class="player-container position-fixed overflow-hidden bg-light l-0 b-0 text-black-75">
		<div class="player-container-bkg position-absolute l-0 t-0 w-100 h-100" v-bind:style="{ 'background-image' : 'url(' + 'http://mobitoon.ru/novelist/images/books/' + playBook.bookIndex.id + '/preview.jpg' + ')'}"></div>
		<player-home v-bind:class="{ 'd-flex' : isHomeShow, 'd-none' : !isHomeShow }"></player-home>
		<player-share v-bind:class="{ 'd-flex' : isShareShow, 'd-none' : !isShareShow }"></player-share>
        <player-vote v-bind:class="{ 'd-flex' : isVoteShow, 'd-none' : !isVoteShow }"></player-vote>
    </div>
</template>

<script>
    import PlayerHome from './PlayerHome.vue'
    import PlayerShare from './PlayerShare.vue'
    import PlayerVote from './PlayerVote.vue'

    export default {
        data(){
            return{
                isHomeShow: false,
                isShareShow: true,
                isVoteShow: false
            }
        },
        inject: [
            'playBook'
        ],
        // watch: {
        // },
        methods: {
        },
        components: {
            PlayerHome,
            PlayerShare,
            PlayerVote
        }
    }
</script>

<style scoped>
    .player-container {
        display: flex;
        width: 100vw;
        height: 100vh;
        z-index: 1040;
    }
    .player-container-bkg {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        filter: blur(25px);
        transform: scale(1.2);
        z-index: -1;
        opacity: .75;
    }
</style>