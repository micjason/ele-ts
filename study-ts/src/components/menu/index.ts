import { App } from 'vue'
import menu from './src/index.vue';
import infiniteMenu from './src/menu'
import test from './src/test'


const myPlugin = {
    install(app: App) {
        app.component('m-menu', menu)
        app.component('m-infinite-menu', infiniteMenu),
        app.component('test', test)
    }
}
export default myPlugin