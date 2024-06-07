import menu from './src/index.vue';
import { App } from 'vue'


const myPlugin = {
    install(app: App) {
        app.component('m-menu', menu)
    }
}
export default myPlugin