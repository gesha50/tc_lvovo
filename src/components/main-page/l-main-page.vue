<template>
    <div class="l-main-page">
        <div class="slider">
            <!--<img class="slider__img" src="../../assets/img/Path.png" alt="">-->
            <div class="slider__text">
                <h3 class="slider__h3">Креативная идея!</h3>
                <p class="slider__p">Мы рады предоставлять актуальную информацию! Это съекономит Ваше драгоценное время!</p>
                <button class="slider__btn1">Подробнее</button>
            </div>
            <div class="slider__pagination">
                <span class="slider__circle"></span><span class="slider__circle"></span><span
                    class="slider__circle"></span><span class="slider__circle"></span><span
                    class="slider__circle"></span>
            </div>
            <button class="slider__btn2">Наш сервис</button>
        </div>
    </div>
</template>


<script>


    export default {
        name: "l-main-page",
        data(){
            return{}
        },
        components:{

        }
    }
</script>

<style lang="scss">
    .slider {
        height: 491px;
        width: 100%;
        background: url("../../assets/img/Path.png");
        position: relative;
        &__text{
            position: absolute;
            left: calc(50% - 262px);
            top: 20%;
            font-family: Ubuntu-Ri;
            max-width: 524px;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .slider__h3{
                padding: 28px;
                color: #cccece;
                font-family: "Bebas Neue";
                font-size: 60px;
                font-weight: 400;
            }
            .slider__p{
                text-align: center;
                margin-bottom: 45px;
            }
            .slider__btn1{
                width: 243px;
                height: 51px;
                background-color: $orangeColor;
                border-radius: 5px;
                border: none;
                color: #ffebca;
                font-family: "Ubuntu Condensed";
                font-size: 25px;
                font-weight: bold;
                text-transform: uppercase;
                transition: background 2s ease;

                &:hover{
                    background: #e45224;
                }
            }
        }
        .slider__pagination{
            position: absolute;
            right: 10%;
            bottom: 10%;
            .slider__circle{
                border: 4px solid #adadad;
                margin: 2px;
                width: 11px;
                height: 11px;
                border-radius: 50%;
                background: #adadad;
                display: inline-block;
                &:hover{
                    border: 4px solid $orangeColor;
                    background: $blueColor;
                }
            }
        }
        .slider__btn2{
            width: 146px;
            height: 35px;
            color: #ffffff;
            background-color: $blueColor;
            font-family: "Bebas Neue";
            font-size: 22px;
            font-weight: 400;
            border-radius: 5px;
            border: none;
            position: absolute;
            left: calc(50% - 73px);
            bottom: -17px;
            transition: background .8s ease;
            &:hover{
                background: #1557ce;
            }
        }
        @media (max-width: 576px) {
            .slider__text{
                max-width: 300px;
                left: calc(50% - 150px);
            }
            .slider__h3{
                padding: 14px;
                font-size: 30px;
                font-weight: 400;
            }
            .slider__btn1{
                width: 120px;
                height: 35px;
                font-size: 15px;
            }
        }
    }

</style>