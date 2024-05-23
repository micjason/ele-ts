import chooseCity from './src/index.vue';
import { App } from 'vue'


const myPlugin = {
    install(app: App) {
        app.component('m-choose-city', chooseCity)
    }
}
export default myPlugin