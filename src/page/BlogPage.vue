<template>
<div>
    <div class="header">
        <HeaderComponent />
    </div>
    <div class="body">


        <!-- Start blog section -->
        <section class="blog__section section--padding">
            <div class="container">
                <div class="section__heading text-center mb-50">
                    <h2 class="section__heading--maintitle text__secondary mb-10">Our Largest Blog</h2>
                    <p class="section__heading--desc">Beyond more stoic this along goodness this sed wow manatee mongos flusterd impressive man farcrud opened.</p>
                </div>
                <div class="blog__section--inner p-0">
                    <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-2 mb--n50">
                        <div class="col custom-col mb-50">
                            <article class="blog__card">
                                <div class="blog__card--thumbnail">
                                    <a class="blog__card--thumbnail__link display-block" href="/BlogDetail">
                                        <img class="blog__card--thumbnail__img display-block" src="assets/default/default_blog.webp" alt="blog-img"></a>
                                </div>
                                <div class="blog__card--content blog__card--page--content">
                                    <h3 class="blog__card--title">
                                        <a href="/BlogDetail">What is business contents insurance this Blog. </a>
                                    </h3>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End blog section -->
    </div>
    <div class="footer">
        <FooterComponent />
    </div>

</div>
</template>

<script>
import HeaderComponent from '../components/Header/HeaderComponent'
import FooterComponent from '../components/Header/FooterComponent'
export default {
    components: {
        HeaderComponent,
        FooterComponent
    }
}
</script>
