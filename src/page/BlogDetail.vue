<template>
<div>
    <div class="header">
        <HeaderComponent />
    </div>
    <div class="body">

        <!-- Start blog details section -->
        <section class="blog__details--section  section--padding ">
            <div class="container-fluid">
                <div class="row  d-flex justify-content-center">
                    <div class="col-xl-10 col-lg-8" >
                        <div class="blog__details--wrapper">
                            <div class="entry__blog">
                                <center>
                                    <div class="blog__thumbnail mb-30">
                                        <img class="blog__thumbnail--img border-radius-10" src="assets/default/default_blog.webp" alt="blog-img">
                                    </div>

                                </center>
                                <div class="blog__post--header mb-30">
                                    <h2 class="post__header--title mb-15">Most Talented Builders Architects Drone. </h2>
                                    <p class="blog__post--meta"> <i>Posted by : admin / On : March 08, 202 / In : <a class="blog__post--meta__link" href="blog-details.html">Partir Pour REUSSIR</a>
                                        </i> </p>
                                </div>
                                <div class="blog__details--content">
                                    <p class="blog__details--content__desc mb-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita in recusandae sit officia ipsa, natus ad voluptatem doloribus dolorum placeat, rem deleniti est accusamus ipsum corporis voluptates soluta totam maiores nostrum reprehenderit quasi? Laboriosam itaque ab odit harum sed aut voluptates, illum unde. Saepe enim ad ut pariatur doloremque quas harum sequi, excepturi tempore exercitationem suscipit quam recusandae corrupti quibusdam. Laboriosam sapiente provident repellat blanditiis ratione nostrum illum asperiores quo cumque in quisquam, non iste aut illo vel, alias debitis!</p>
                                </div>
                            </div>
                            <div class="comment__box">
                                <div class="reviews__comment--area2 mb-50">
                                    <h2 class="reviews__comment--reply__title style2 h3 mb-25">Recent Comment</h2>
                                    <div class="reviews__comment--inner">
                                        <div class="reviews__comment--list d-flex">
                                            <div class="reviews__comment--thumb">
                                                <span width="100%" class="profile-image transform-capitalize">
                                                f
                                                </span>
                                            </div>
                                            <div class="reviews__comment--content ">
                                                <div class="reviews__comment--top d-flex justify-content-between">
                                                    <div class="reviews__comment--top__left">
                                                        <h3 class="reviews__comment--content__title2 h4">Jakes on</h3>
                                                        <span class="reviews__comment--content__date2">February 14, 2022</span>
                                                    </div>
                                                </div>
                                                <p class="reviews__comment--content__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ex repellat officiis neque. Veniam, rem nesciunt. Assumenda distinctio, autem error repellat eveniet ratione dolor facilis accusantium amet pariatur, non eius!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="reviews__comment--reply__area">
                                    <form action="#">
                                        <h3 class="reviews__comment--reply__title mb-20">Leave A Comment</h3>
                                        <div class="row">
                                            <div class="col-lg-4 col-md-6 mb-20">
                                                <label>
                                                    <input class="reviews__comment--reply__input" placeholder="Your Name...." type="text">
                                                </label>
                                            </div>
                                            <div class="col-lg-4 col-md-6 mb-20">
                                                <label>
                                                    <input class="reviews__comment--reply__input" placeholder="Your Email...." type="email">
                                                </label>
                                            </div>
                                            <div class="col-lg-4 col-md-6 mb-20">
                                                <label>
                                                    <input class="reviews__comment--reply__input" placeholder="Your Website...." type="text">
                                                </label>
                                            </div>
                                            <div class="col-12 mb-15">
                                                <textarea class="reviews__comment--reply__textarea" placeholder="Your Comments...."></textarea>
                                            </div>

                                        </div>
                                        <button class="primary__btn text-white" data-hover="Submit" type="submit">SUBMIT</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End blog details section -->

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

<style scope>
    .profile-image{
        background-color: #d72323;
        color: white;
        width: 100%;
        height: 10vh;
        border-radius: 50%;
        font-size: 300%;
        display: flex;
        justify-content: center;
        align-items: center;
    }    
</style>
