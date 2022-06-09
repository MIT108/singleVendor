<template>
<div>
    <div class="header">
        <HeaderComponent />
    </div>
    <div class="body">

        <main class="main__content_wrapper">
            <!-- Start slider section -->
            <section class="hero__slider--section slider__section--bg4">
                <div class="hero__slider--inner position__relative">
                    <div class="container">
                        <div class="hero__slider--activation swiper">
                            <div class="hero__slider--wrapper swiper-wrapper">
                                <div class="swiper-slide " v-for="(banner, index) in banners" :key="index">
                                    <div class="hero__slider--items style4">
                                        <div class="row row-cols-md-2 row-cols-1 align-items-center">
                                            <div class="col col-sm-order">
                                                <div class="slider__content style4">
                                                    <h2 class="slider__content--maintitle h1" style="color: white">{{ banner.heading }}</h2>
                                                    <p class="slider__content--desc style4 d-sm-2-none" style="color: white">{{ banner.description }}</p>
                                                    <div class="slider__content--footer style4 d-flex align-items-center">
                                                        <a class="slider__content--btn primary__btn" href="/ShopPage">Shop Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="hero__slider--thumbnail style4">
                                                    <img class="hero__slider--thumbnail__img style4 display-block" :src=banner.image alt="slider img">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slider__pagination style4 swiper-pagination"></div>
                </div>
            </section>
            <!-- End slider section -->

            <!-- Start image with text section -->
            <section class=" section--padding">
                <div class="container">
                    <div class="row row-cols-md-2 row-cols-1  align-items-center">
                        <div class="col">
                            <div class="image__with--text__thumbnail">
                                <img class="display-block" :src=image1.image alt="drone-image">
                            </div>
                        </div>
                        <div class="col">
                            <div class="image__with--text__content">
                                <h2 class="image__with--text__title mb-18">{{ image1.heading }}</h2>
                                <p class="image__with--text__desc mb-25">{{ image1.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End image with text section -->

            <!-- Start about section -->
            <section class="about__section section--padding border-bottom pt-0">
                <div class="container">
                    <div class="row row-cols-lg-2 row-cols-md-2 row-cols-1 align-items-center">
                        <div class="col">
                            <div class="about__content">
                                <h2 class="about__content--title mb-18">{{ image2.heading }}</h2>
                                <div class="about__content--step mb-25">
                                    <p class="about__content--desc mb-20">{{ image2.description }}</p>
                                </div>
                                <a class="about__content--btn primary__btn" href="contact.html">Ask For Price</a>
                            </div>
                        </div>
                        <div class="col">
                            <div class="about__thumbnail">
                                <img class="display-block" :src=image2.image alt="about-thumb">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End about section -->

            <!-- Start deals section -->
            <section class="deals__section deals__section--bg3 section--padding">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-7 col-sm-order">
                            <div class="deals__content">
                                <h2 class="deals__content--title text-white mb-20">We Have This Builders Easy integrative.</h2>
                                <p class="deals__content--desc text-white mb-20">Beyond more stoic this along goodness this sed wow manatee mongos flusterd impressive man farcrud opened inside owin punitively wasteful telling spransac coldly spokeles.</p>
                                <div class="deals__content--price mb-28">
                                    <span class="old__price"> $30.00</span>
                                    <span class="price__divided"></span>
                                    <span class="current__price">$25.00</span>
                                </div>
                                <div class="deals__countdown d-flex mb-50" data-countdown="Sep 30, 2022 00:00:00"></div>
                                <a class="deals__content--btn primary__btn" href="shop.html">Shop Now</a>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-5">
                            <div class="deals__thumbnail--style3 text-right">
                                <img class="deals__thumbnail--style3__img" src="assets/default/default_home_slider.png" alt="deals-thumb">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End deals section -->

            <!-- Start newsletter section -->
            <SubscribeComponent />
            <!-- End newsletter section -->

            <!-- Start blog section -->
            <section class="blog__section blog__section--bg section--padding">
                <div class="container">
                    <div class="section__heading text-center mb-50">
                        <h2 class="section__heading--maintitle text__secondary mb-10">Our Latest Blog Post</h2>
                        <p class="section__heading--desc">Beyond more stoic this along goodness this sed wow manatee mongos flusterd impressive man farcrud opened.</p>
                    </div>
                    <div class="blog__section--inner blog__swiper--activation swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <article class="blog__card">
                                    <div class="blog__card--thumbnail">
                                        <a class="blog__card--thumbnail__link display-block" href="blog-details.html">
                                            <img class="blog__card--thumbnail__img display-block" src="assets/default/default_blog.webp" alt="blog-img"></a>
                                    </div>
                                    <div class="blog__card--content">
                                        <h3 class="blog__card--title">
                                            <a href="blog-details.html">What is business contents insurance this Blog. </a>
                                        </h3>
                                    </div>
                                </article>
                            </div>
                            <div class="swiper-slide">
                                <article class="blog__card">
                                    <div class="blog__card--thumbnail">
                                        <a class="blog__card--thumbnail__link display-block" href="blog-details.html">
                                            <img class="blog__card--thumbnail__img display-block" src="assets/default/default_blog.webp" alt="blog-img"></a>
                                    </div>
                                    <div class="blog__card--content">
                                        <h3 class="blog__card--title">
                                            <a href="blog-details.html"> Amet This is adipisicing elit. Error, nons. </a>
                                        </h3>
                                    </div>
                                </article>
                            </div>
                            <div class="swiper-slide">
                                <article class="blog__card">
                                    <div class="blog__card--thumbnail">
                                        <a class="blog__card--thumbnail__link display-block" href="blog-details.html">
                                            <img class="blog__card--thumbnail__img display-block" src="assets/default/default_blog.webp" alt="blog-img"></a>
                                    </div>
                                    <div class="blog__card--content">
                                        <h3 class="blog__card--title">
                                            <a href="blog-details.html">Lorem ipsum dolor sit amet, are adipisicing elit. </a>
                                        </h3>
                                    </div>
                                </article>
                            </div>
                            <div class="swiper-slide">
                                <article class="blog__card">
                                    <div class="blog__card--thumbnail">
                                        <a class="blog__card--thumbnail__link display-block" href="blog-details.html">
                                            <img class="blog__card--thumbnail__img display-block" src="assets/default/default_blog.webp" alt="blog-img"></a>
                                    </div>
                                    <div class="blog__card--content">
                                        <h3 class="blog__card--title">
                                            <a href="blog-details.html">What is business contents insurance this Blog. </a>
                                        </h3>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div class="swiper__nav--btn swiper-button-next"></div>
                        <div class="swiper__nav--btn swiper-button-prev"></div>
                    </div>
                </div>
            </section>
            <!-- End blog section -->

        </main>

    </div>
    <div class="footer">
        <FooterComponent />
    </div>
</div>
</template>

<script>
import HeaderComponent from "../components/Header/HeaderComponent";
import FooterComponent from "../components/Header/FooterComponent";
import SubscribeComponent from "../components/SubscribeComponent";
export default {
    data() {
        return {
            banners: [],
            image1: [],
            image2: [],
        };
    },
    created() {
        //   get banner images
        this.axios.get('/homepage/banner').then((response) => {
            this.banners = response.data.data
            this.banners.forEach(element => {
                element.image = process.env.VUE_APP_BACKEND_URL+element.image
            });
        }).catch((error) => {
            console.log(error);
        })

        // get home info 
        this.axios.get('homepage/home').then((response)=>{
            response.data.data.forEach(element => {
                element.image = process.env.VUE_APP_BACKEND_URL+element.image

                if (element.type == 'type1') {
                    this.image1 = element
                }
                if (element.type == 'type2') {
                    this.image2 = element
                }
            })
        }).catch((error) => {
            console.log(error);
        })

    },
    components: {
        HeaderComponent,
        FooterComponent,
        SubscribeComponent,
    },
};
</script>
