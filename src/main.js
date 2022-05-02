import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import i18n from './i18n'

router.beforeEach((to, from, next) => {
    let language = to.params.lang;
    if (!language) {
        language = 'en'
    }

    i18n.locale = 'en'

    next()
})


createApp(App).use(i18n).use(store).use(router).mount('#app')
