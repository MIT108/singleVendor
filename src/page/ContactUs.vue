<template>
<div>
    <div class="header">
        <HeaderComponent />
    </div>
    <div class="body">

    <main class="main__content_wrapper">
        

        <!-- Start contact section -->
        <section class="contact__section section--padding">
            <div class="container">
                <div class="section__heading text-center mb-40">
                    <h2 class="section__heading--maintitle text__secondary mb-10">Get In Touch</h2>
                    <p class="section__heading--desc">Beyond more stoic this along goodness this sed wow manatee mongos 
                        flusterd impressive man farcrud opened.</p>
                </div>
                <div class="main__contact--area">
                    <div class="row align-items-center row-md-reverse">
                        <div class="col-lg-12">
                            <div class="contact__form">
                                <form class="contact__form--inner"  action="#">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6">
                                            <div class="contact__form--list mb-20">
                                                <label class="contact__form--label" for="input1">First Name <span class="contact__form--label__star">*</span></label>
                                                <input class="contact__form--input" name="firstname" id="input1" placeholder="Your First Name" type="text">
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="contact__form--list mb-20">
                                                <label class="contact__form--label" for="input2">Last Name <span class="contact__form--label__star">*</span></label>
                                                <input class="contact__form--input" name="lastname" id="input2" placeholder="Your Last Name" type="text">
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="contact__form--list mb-20">
                                                <label class="contact__form--label" for="input3">Phone Number <span class="contact__form--label__star">*</span></label>
                                                <input class="contact__form--input" name="number" id="input3" placeholder="Phone number" type="text">
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="contact__form--list mb-20">
                                                <label class="contact__form--label" for="input4">Email <span class="contact__form--label__star">*</span></label>
                                                <input class="contact__form--input" name="email" id="input4" placeholder="Email" type="text">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="contact__form--list mb-10">
                                                <label class="contact__form--label" for="input5">Write Your Message <span class="contact__form--label__star">*</span></label>
                                                <textarea class="contact__form--textarea" name="message" id="input5" placeholder="Write Your Message"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="account__login--remember position__relative mb-15">
                                        <input class="checkout__checkbox--input" id="check2" type="checkbox">
                                        <span class="checkout__checkbox--checkmark"></span>
                                        <label class="checkout__checkbox--label login__remember--label" for="check2">
                                            Accept Terms & Condition</label>
                                    </div>
                                    <button class="contact__form--btn primary__btn" type="submit">Submit Now</button>  
                                    <p class="form-messege"></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End contact section -->


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
export default {
    components: {
        HeaderComponent,
        FooterComponent
    }
    
}
</script>