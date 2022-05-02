<template>
<div>

    <!-- Start header area -->
    <header class="header__section">

        <!-- Start main header -->
        <div class="main__header position__relative header__sticky">
            <div class="container">
                <div class="main__header--inner d-flex justify-content-between align-items-center">
                    <div class="offcanvas__header--menu__open ">
                        <a class="offcanvas__header--menu__open--btn" href="javascript:void(0)" data-offcanvas>
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon offcanvas__header--menu__open--svg" viewBox="0 0 512 512">
                                <path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352" />
                            </svg>
                        </a>
                    </div>
                    <div class="main__logo d-flex align-items-center" style="padding-right: 20px">
                        <h1 class="main__logo--title">
                            <a class="main__logo--link" href="/">
                                <img class="main__logo--img" src="assets/img/logo/nav-logo.webp" alt="logo-img">
                            </a>
                        </h1>
                    </div>
                    <div class="header__menu d-none d-lg-block">
                        <nav class="header__menu--navigation">
                            <ul class="d-flex">
                                <li class="header__menu--items">
                                    <a class="header__menu--link" href="/">{{ $t('front.nav.home') }} </a>
                                </li>
                                <li class="header__menu--items">
                                    <a class="header__menu--link" href="/AboutUs">{{ $t('front.nav.aboutUs') }} </a>
                                </li>
                                <li class="header__menu--items">
                                    <a class="header__menu--link" href="/BlogPage">{{ $t('front.nav.blog') }} </a>
                                </li>
                                <li class="header__menu--items">
                                    <a class="header__menu--link " href="/ShopPage">{{ $t('front.nav.shop') }} </a>
                                </li>
                                <li class="header__menu--items">
                                    <a class="header__menu--link" href="/ContactUs">{{ $t('front.nav.contactUs') }}</a>
                                </li>

                                <li class="header__menu--items">
                                    <select v-model="lang" @change="languageChange($event)"  class="header__menu--select form-control select" style="">
                                        <option value="en">{{ $t('front.nav.english') }} </option>
                                        <option value="fr">{{ $t('front.nav.french') }} </option>
                                    </select>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <!-- End main header -->

        <!-- Start Offcanvas header menu -->
        <div class="offcanvas-header" tabindex="-1">
            <div class="offcanvas__inner">
                <div class="offcanvas__logo">
                    <a class="offcanvas__logo_link" href="/">
                        <img src="assets/img/logo/nav-logo.webp" alt="Rokon Logo">
                    </a>
                    <button class="offcanvas__close--btn" data-offcanvas>close</button>
                </div>
                <nav class="offcanvas__menu">
                    <ul class="offcanvas__menu_ul">
                        <li class="offcanvas__menu_li">
                            <a class="offcanvas__menu_item" href="/">{{ $t('front.nav.home') }}</a>
                        </li>
                        <li class="offcanvas__menu_li">
                            <a class="offcanvas__menu_item" href="/BlogPage">{{ $t('front.nav.blog') }} </a>
                        </li>
                        <li class="offcanvas__menu_li">
                            <a class="offcanvas__menu_item" href="/ShopPage">{{ $t('front.nav.shop') }} </a>
                        </li>
                        <li class="offcanvas__menu_li">
                            <a class="offcanvas__menu_item" href="/AboutUs">{{ $t('front.nav.aboutUs') }} </a>
                        </li>
                        <li class="offcanvas__menu_li">
                            <a class="offcanvas__menu_item" href="/ContactUs">{{ $t('front.nav.contactUs') }} </a>
                        </li>
                        <li class="offcanvas__menu_li">
                            <select name="" v-model="lang" @change="languageChange($event)" class="offcanvas__menu_item select" style="">
                                <option value="en">{{ $t('front.nav.english') }} </option>
                                <option value="fr">{{ $t('front.nav.french') }} </option>
                            </select>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <!-- End Offcanvas header menu -->

    </header>
    <!-- End header area -->

</div>
</template>

<script>
export default {
    data() {
        const lang = localStorage.getItem('ReussirLang') || 'fr';
        return {
            lang: lang
        }
    },
    methods: {
        languageChange(event){
            localStorage.setItem('ReussirLang', event.target.value);
            window.location.reload();
        }
    },
}
</script>


<style scoped>
.select {
    border: 0px solid transparent;
}

.select:focus {
    outline: none;
    border-bottom: 2px solid #d72323;
}
</style>
