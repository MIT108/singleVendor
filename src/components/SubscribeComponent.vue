<template>
<div>
    <section class="newsletter__section newsletter__bg2 section--padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                    <div class="newsletter__content--style2 text-center position__relative">
                        <h2 class="newsletter__content--title__style2 text-white">
                            We Best To Immediately Do Subscribe Newsleter.
                        </h2>
                        <div class="newsletter__subscribe position__relative" action="#">
                            <label>
                                <input class="newsletter__subscribe--input style2" placeholder="Enter Your Email" type="email" v-model="email" />
                            </label>
                            <button class="newsletter__subscribe--button style2 primary__btn" v-on:click="subscribe()">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <vue-basic-alert :duration="300" :closeIn="3000" ref="alert" />
    </section>
</div>
</template>

<script>
import VueBasicAlert from "vue-basic-alert";
export default {
    data() {
        return {
            email: null
        }
    },
    methods: {

        subscribe() {
            if (this.email != null) {
                var postData = {
                    'email': this.email
                }
                this.axios.post(
                    '/subscribe/create',
                    postData
                ).then((response) => {
                  if(response.status == 200) {
                      this.$refs.alert.showAlert(
                          'success',
                          'Subscription successful',
                      )

                  }
                }).catch((error) => {
                      this.$refs.alert.showAlert(
                          'error',
                          error.response.data.message,
                      )
                })
                this.email = null;

            } else {
                this.$refs.alert.showAlert(
                    'warning',
                    'enter an email address',
                )

            }

        },
    },
    props: {},
    components: {
        VueBasicAlert,
    },
};
</script>
