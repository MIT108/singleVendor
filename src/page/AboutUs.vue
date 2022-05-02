<template>
<div>
    <div class="header">
        <HeaderComponent />
    </div>
    <div class="body">

    <main class="main__content_wrapper">
        


        <!-- Start about section -->
        <section class="about__section section--padding border-bottom">
            <div class="container">
                <div class="row row-cols-lg-2 row-cols-md-2 row-cols-1 align-items-center">
                    <div class="col">
                        <div class="about__content">
                            <h2 class="about__content--title mb-18">We Have This Builders 
                                Easy integrative.</h2>
                            <div class="about__content--step mb-25">
                                <p class="about__content--desc mb-20">Beyond more stoic this along goodness this sed wow manatee mongos 
                                    flusterd impressive man farcrud opened inside owin punitively 
                                    wasteful telling spransac coldly spokeles.</p>
                                <ul class="mb-20">
                                    <li class="about__content--desc__list">Beyond drone is an to be contre unmanned aerial.</li>
                                    <li class="about__content--desc__list">With various equipment including tho drone.</li>
                                </ul>
                                <p class="about__content--desc style2">Beyond more stoic this along goodness this sed wow 
                                    flusterd impressive</p>
                            </div>
                            <div class="about__content--author d-flex align-items-center mb-50">
                                <div class="about__content--author__thumb">
                                    <img class="display-block" src="assets/img/other/about-author.webp" alt="about author thumb">
                                </div>
                                <div class="about__content--author__text d-flex align-items-center">
                                    <div class="about__content--author__text--left">
                                        <h3 class="about__content--author__name text__secondary">- Rubel Wilson,</h3>
                                        <span class="about__content--author__rank">Founder</span>
                                    </div>
                                    <img class="about__author--signature display-block" src="assets/img/icon/signature.webp" alt="signature">
                                </div>
                            </div>
                            <a class="about__content--btn primary__btn" href="contact.html">Ask For Price</a>
                        </div>
                    </div>
                    <div class="col">
                        <div class="about__thumbnail">
                            <img class="display-block" src="assets/default/default_home_slider.png" alt="about-thumb">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End about section -->

        <!-- Start counterup section -->
        <div class="counterup__section section--padding" id="funfactId">
            <div class="container">
                <div class="section__heading text-center mb-50">
                    <h2 class="section__heading--maintitle text__secondary mb-10">Our Best Counter</h2>
                    <p class="section__heading--desc">Beyond more stoic this along goodness this sed wow manatee mongos 
                        flusterd impressive man farcrud opened.</p>
                </div>
                <div class="counterup--inner">
                    <div class="row row-cols-md-4 row-cols-sm-3 row-cols-2 mb--n30">
                        <div class="col mb-30">
                            <div class="single__counterup">
                                <div class="counterup__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="65" height="61" viewBox="0 0 65 61">
                                        <image id="_1850984" data-name="1850984" width="65" height="61" xlink:href="data:image/png;base64,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"/>
                                      </svg>
                                </div>
                                <h3 class="counterup__title">Blog Post</h3>
                                <p class="counterup__number" ><span class="js-counter" data-count="12">12</span>k</p>
                            </div>
                        </div>
                        <div class="col mb-30">
                            <div class="single__counterup">
                                <div class="counterup__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="63" height="63" viewBox="0 0 63 63">
                                        <image id="_1850998" data-name="1850998" width="63" height="63" xlink:href="data:image/png;base64,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"/>
                                    </svg>
                                      
                                </div>
                                <h3 class="counterup__title">Visit Site</h3>
                                <p class="counterup__number" ><span class="js-counter" data-count="67">67</span>+</p>
                            </div>
                        </div>
                        <div class="col mb-30">
                            <div class="single__counterup">
                                <div class="counterup__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60" height="60" viewBox="0 0 60 60">
                                        <image id="_1850963" data-name="1850963" width="60" height="60" xlink:href="data:image/png;base64,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"/>
                                    </svg>
                                      
                                </div>
                                <h3 class="counterup__title">Subscribers</h3>
                                <p class="counterup__number" ><span class="js-counter" data-count="5">5</span>k</p>
                            </div>
                        </div>
                        <div class="col mb-30">
                            <div class="single__counterup">
                                <div class="counterup__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60" height="60" viewBox="0 0 60 60">
                                        <image id="_1850963" data-name="1850963" width="60" height="60" xlink:href="data:image/png;base64,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"/>
                                    </svg>
                                      
                                </div>
                                <h3 class="counterup__title">Questions</h3>
                                <p class="counterup__number" ><span class="js-counter" data-count="5">5</span>k</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End counterup section -->

        <!-- Start newsletter section -->
        <SubscribeComponent />
        <!-- End newsletter section -->
        
        <!-- Start testimonial section -->
        <section class="testimonial__section section--padding">
            <div class="container">
                <div class="section__heading text-center mb-50">
                    <h2 class="section__heading--maintitle text__secondary mb-10">Our Best Team</h2>
                    <p class="section__heading--desc">Beyond more stoic this along goodness this sed wow manatee mongos 
                        flusterd impressive man farcrud opened.</p>
                </div>
                <div class="testimonial__inner testimonial__swiper--activation swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <article class="testimonial__card text-center">
                                <div class="testimonial__card--thumbnail">
                                    <img class="testimonial__card--thumbnail__img display-block" src="assets/img/other/testimonial1.webp" alt="testimonial-img">
                                </div>
                                <div class="testimonial__content">
                                    <p class="testimonial__content--desc">Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.  </p>
                                    <h3 class="testimonial__content--title">Brandon Bokle</h3>
                                    <h4 class="testimonial__content--subtitle text__secondary">Secretary</h4>
                                </div>
                                <div class="testimonial__icon">
                                    <svg class="testimonial__icon--svg" data-name="Group 546" xmlns="http://www.w3.org/2000/svg" width="18.479" height="13.939" viewBox="0 0 21.479 18.939">
                                        <path data-name="Path 131" d="M8.629,11.089A1.033,1.033,0,0,0,9.149,9.7L8.3,7.918a1.036,1.036,0,0,0-1.352-.5A11.937,11.937,0,0,0,3.206,9.841,9.053,9.053,0,0,0,.693,13.809,21.762,21.762,0,0,0,0,19.908v5.319a1.043,1.043,0,0,0,1.04,1.04h6.81a1.043,1.043,0,0,0,1.04-1.04v-6.81a1.043,1.043,0,0,0-1.04-1.04H4.592A7.306,7.306,0,0,1,5.8,13.168,6.586,6.586,0,0,1,8.629,11.089Z" transform="translate(0 -7.328)" fill="currentColor"></path>
                                        <path data-name="Path 132" d="M79.312,11.172a1.033,1.033,0,0,0,.52-1.386l-.849-1.767a1.036,1.036,0,0,0-1.352-.5,12.552,12.552,0,0,0-3.725,2.408,9.248,9.248,0,0,0-2.53,3.985,21.47,21.47,0,0,0-.676,6.082v5.319a1.043,1.043,0,0,0,1.04,1.04h6.81a1.043,1.043,0,0,0,1.04-1.04V18.5a1.043,1.043,0,0,0-1.04-1.04H75.274a7.307,7.307,0,0,1,1.213-4.211A6.585,6.585,0,0,1,79.312,11.172Z" transform="translate(-58.45 -7.411)" fill="currentColor"></path>
                                    </svg>
                                </div>
                               
                            </article>
                        </div>
                        <div class="swiper-slide">
                            <article class="testimonial__card text-center">
                                <div class="testimonial__card--thumbnail">
                                    <img class="testimonial__card--thumbnail__img display-block" src="assets/img/other/testimonial2.webp" alt="testimonial-img">
                                </div>
                                <div class="testimonial__content">
                                    <p class="testimonial__content--desc">Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.  </p>
                                    <h3 class="testimonial__content--title">Sarrison Samuel</h3>
                                    <h4 class="testimonial__content--subtitle text__secondary">CEO Founder</h4>
                                </div>
                                <div class="testimonial__icon">
                                    <svg class="testimonial__icon--svg" data-name="Group 546" xmlns="http://www.w3.org/2000/svg" width="18.479" height="13.939" viewBox="0 0 21.479 18.939">
                                        <path data-name="Path 131" d="M8.629,11.089A1.033,1.033,0,0,0,9.149,9.7L8.3,7.918a1.036,1.036,0,0,0-1.352-.5A11.937,11.937,0,0,0,3.206,9.841,9.053,9.053,0,0,0,.693,13.809,21.762,21.762,0,0,0,0,19.908v5.319a1.043,1.043,0,0,0,1.04,1.04h6.81a1.043,1.043,0,0,0,1.04-1.04v-6.81a1.043,1.043,0,0,0-1.04-1.04H4.592A7.306,7.306,0,0,1,5.8,13.168,6.586,6.586,0,0,1,8.629,11.089Z" transform="translate(0 -7.328)" fill="currentColor"></path>
                                        <path data-name="Path 132" d="M79.312,11.172a1.033,1.033,0,0,0,.52-1.386l-.849-1.767a1.036,1.036,0,0,0-1.352-.5,12.552,12.552,0,0,0-3.725,2.408,9.248,9.248,0,0,0-2.53,3.985,21.47,21.47,0,0,0-.676,6.082v5.319a1.043,1.043,0,0,0,1.04,1.04h6.81a1.043,1.043,0,0,0,1.04-1.04V18.5a1.043,1.043,0,0,0-1.04-1.04H75.274a7.307,7.307,0,0,1,1.213-4.211A6.585,6.585,0,0,1,79.312,11.172Z" transform="translate(-58.45 -7.411)" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </article>
                        </div>
                        <div class="swiper-slide">
                            <article class="testimonial__card text-center">
                                <div class="testimonial__card--thumbnail">
                                    <img class="testimonial__card--thumbnail__img display-block" src="assets/img/other/testimonial3.webp" alt="testimonial-img">
                                </div>
                                <div class="testimonial__content">
                                    <p class="testimonial__content--desc">Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.  </p>
                                    <h3 class="testimonial__content--title">Warrison Samuel</h3>
                                    <h4 class="testimonial__content--subtitle text__secondary">Spa Manager</h4>
                                </div>
                                <div class="testimonial__icon">
                                    <svg class="testimonial__icon--svg" data-name="Group 546" xmlns="http://www.w3.org/2000/svg" width="18.479" height="13.939" viewBox="0 0 21.479 18.939">
                                        <path data-name="Path 131" d="M8.629,11.089A1.033,1.033,0,0,0,9.149,9.7L8.3,7.918a1.036,1.036,0,0,0-1.352-.5A11.937,11.937,0,0,0,3.206,9.841,9.053,9.053,0,0,0,.693,13.809,21.762,21.762,0,0,0,0,19.908v5.319a1.043,1.043,0,0,0,1.04,1.04h6.81a1.043,1.043,0,0,0,1.04-1.04v-6.81a1.043,1.043,0,0,0-1.04-1.04H4.592A7.306,7.306,0,0,1,5.8,13.168,6.586,6.586,0,0,1,8.629,11.089Z" transform="translate(0 -7.328)" fill="currentColor"></path>
                                        <path data-name="Path 132" d="M79.312,11.172a1.033,1.033,0,0,0,.52-1.386l-.849-1.767a1.036,1.036,0,0,0-1.352-.5,12.552,12.552,0,0,0-3.725,2.408,9.248,9.248,0,0,0-2.53,3.985,21.47,21.47,0,0,0-.676,6.082v5.319a1.043,1.043,0,0,0,1.04,1.04h6.81a1.043,1.043,0,0,0,1.04-1.04V18.5a1.043,1.043,0,0,0-1.04-1.04H75.274a7.307,7.307,0,0,1,1.213-4.211A6.585,6.585,0,0,1,79.312,11.172Z" transform="translate(-58.45 -7.411)" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </article>
                        </div>
                        <div class="swiper-slide">
                            <article class="testimonial__card text-center">
                                <div class="testimonial__card--thumbnail">
                                    <img class="testimonial__card--thumbnail__img display-block" src="assets/img/other/testimonial1.webp" alt="testimonial-img">
                                </div>
                                <div class="testimonial__content">
                                    <p class="testimonial__content--desc">Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.  </p>
                                    <h3 class="testimonial__content--title">Brandon Bokle</h3>
                                    <h4 class="testimonial__content--subtitle text__secondary">Secretary</h4>
                                </div>
                                <div class="testimonial__icon">
                                    <svg class="testimonial__icon--svg" data-name="Group 546" xmlns="http://www.w3.org/2000/svg" width="18.479" height="13.939" viewBox="0 0 21.479 18.939">
                                        <path data-name="Path 131" d="M8.629,11.089A1.033,1.033,0,0,0,9.149,9.7L8.3,7.918a1.036,1.036,0,0,0-1.352-.5A11.937,11.937,0,0,0,3.206,9.841,9.053,9.053,0,0,0,.693,13.809,21.762,21.762,0,0,0,0,19.908v5.319a1.043,1.043,0,0,0,1.04,1.04h6.81a1.043,1.043,0,0,0,1.04-1.04v-6.81a1.043,1.043,0,0,0-1.04-1.04H4.592A7.306,7.306,0,0,1,5.8,13.168,6.586,6.586,0,0,1,8.629,11.089Z" transform="translate(0 -7.328)" fill="currentColor"></path>
                                        <path data-name="Path 132" d="M79.312,11.172a1.033,1.033,0,0,0,.52-1.386l-.849-1.767a1.036,1.036,0,0,0-1.352-.5,12.552,12.552,0,0,0-3.725,2.408,9.248,9.248,0,0,0-2.53,3.985,21.47,21.47,0,0,0-.676,6.082v5.319a1.043,1.043,0,0,0,1.04,1.04h6.81a1.043,1.043,0,0,0,1.04-1.04V18.5a1.043,1.043,0,0,0-1.04-1.04H75.274a7.307,7.307,0,0,1,1.213-4.211A6.585,6.585,0,0,1,79.312,11.172Z" transform="translate(-58.45 -7.411)" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div class="swiper__nav--btn swiper-button-next"></div>
                    <div class="swiper__nav--btn swiper-button-prev"></div>
                </div>
            </div>
        </section>
        <!-- End testimonial section -->
        
    </main>

    </div>
    <div class="footer">
        <FooterComponent />
    </div>
</div>
</template>
<script>
import HeaderComponent from '../components/Header/HeaderComponent'
import FooterComponent from '../components/Header/FooterComponent'
import SubscribeComponent from '../components/SubscribeComponent'
export default {
    components: {
        HeaderComponent,
        FooterComponent,
        SubscribeComponent
    }
    
}
</script>