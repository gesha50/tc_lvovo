<template>
    <div class="L-header">
        <header class="header">
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
                Поиск <img src="../../../src/assets/img/search.png" alt="">
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
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 91px;
        .logo{
            width: 50px;
        }
        .nav{
            height: 100%;
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
            img{
                margin: 10px;
            }
        }
        .logoName {
            display: flex;
            align-items: center;
            font-size: 30px;
            color: darkkhaki;
            img{
                margin: 10px;
            }
        }

    }

</style>