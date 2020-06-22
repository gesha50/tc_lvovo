<template>
    <div class="l-main-wrapper">
        <l-header />
        <l-main-page />
    </div>
</template>

<script>
    import lHeader from './layouts/l-header'
    import lMainPage from  './main-page/l-main-page'

    export default {
        name: "l-main-wrapper",
        components:{
            lHeader,
            lMainPage,
        }

    }
</script>

<style lang="scss">
    .l-main-wrapper{
        height: 100%;
        width: 1200px;
        margin: 0 auto;
    }


</style>