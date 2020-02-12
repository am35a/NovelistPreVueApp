<template>
    <div class="player-container position-absolute overflow-hidden bg-light">
        {{ bookIndex }}
        ... here is Player
        <button v-on:click="closePlayer" >Close</button>
    </div>    
</template>

<script>
    export default {
        props:[
            'bookIndex'
        ],
        data(){
            return{
                // isShowFullPlayer: false,
                // bookIndex: "..."
            }
        },
        methods: {
            closePlayer(){
                // console.log('close player')
                this.$emit('closePlayer', false)
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