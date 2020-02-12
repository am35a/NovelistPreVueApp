<template>
    <div class="player-container position-absolute overflow-hidden bg-light" v-bind:class="{ 'd-none' : !isShowFullPlayer, 'd-flex' : isShowFullPlayer }">
        {{ bookIndex }}
        ... here is Player
    </div>    
</template>

<script>
    export default {
        data(){
            return{
                isShowFullPlayer: false,
                bookIndex: "..."
            }
        }
    }
</script>

<style scoped>
    .player-container {
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1040;
    }    
</style>