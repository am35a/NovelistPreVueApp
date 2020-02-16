<template>
    <div class="flex-column l-0 t-0 w-100 h-100">

        <!-- s | top menu -->
        <div class="d-flex">
            <small class="my-auto pl-3 text-uppercase font-weight-bolder">Share the book</small>
            <svg v-on:click="closePlayerShare" class="wh-18p ml-auto p-3 content-box" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>                
        </div>
        <!-- e | top menu -->

        <div class="my-auto px-3">
            ...
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PlayerShare',
        data() {
            return {
            }
        },
        inject: [
            'playBook'
        ],
        methods: {
            closePlayerShare(){
                this.$parent.isHomeShow = true
                this.$parent.isShareShow = false
            }
        }
    }
</script>

<style scoped>
</style>
