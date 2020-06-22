<template>
    <div class="l-header">
        <header class="header">
            <input type="checkbox" id="switcher">
            <label for="switcher" class="nav__menu"><i class="material-icons">menu</i></label>
            <div class="logoName">
                <img class="logo" src="../../../public/logo.png" alt="">
                TK ЛЬВОВО
            </div>
            <nav class="nav">
                <a class="nav__link" href="#"><span class="nav__span" >Главная</span></a>
                <a class="nav__link" href="#"><span class="nav__span" >Portfolio</span></a>
                <a class="nav__link" href="#"><span class="nav__span" >О нас</span></a>
                <a class="nav__link" href="#"><span class="nav__span" >Контакты</span></a>
                <a class="nav__link" href="#"><span class="nav__span" >Блог</span></a>
            </nav>
            <div class="search">
                <span class="search__text">Поиск</span> <img src="../../../src/assets/img/search.png" alt="">
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name: "l-header",

    }
</script>

<style lang="scss">
    .header {
        width: 100%;
        height: 91px;
        .logo{
            width: 50px;
        }
        #switcher{
            position: absolute;
            left: -99999999px;
            visibility: hidden;
        }
        .nav__menu{
            display: none;
        }
        .nav{
            height: 100%;
            grid-area: nav;
            &__link{
                text-decoration: none;
            }
            &__span{
                color: $fontColor;
                padding: 35px ;
                display: inline-block;
                &:hover{
                    background: $blueColor;
                    color: #f4f4f4;
                }
            }

        }
        .search{
            display: flex;
            align-items: center;
            grid-area: search;
            img{
                margin: 10px;
            }
        }
        .logoName {
            display: flex;
            align-items: center;
            font-size: 30px;
            color: darkkhaki;
            grid-area: logo;
            img{
                margin: 10px;
            }
        }
        @media (min-width: 997px) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }
        @media (min-width: 576px) and (max-width: 997px) {
            grid-template-areas:
        "logo search"
        "nav nav";
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-items: center;
            .nav__span {
                padding: 35px 20px;
            }
        }
        @media (max-width: 576px) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .nav{
                display: none;
            }
            .search__text{
                display: none;
            }
            .nav__menu{
                display: block;
                i{
                    font-size: 35px;
                }
            }
            #switcher:checked~nav {
                display: block;
            }
        }
    }

</style>