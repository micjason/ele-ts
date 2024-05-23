import chooseIcon from './src/index.vue';
import { App } from 'vue'


const myPlugin = {
    install(app: App) {
        app.component('m-choose-icon', chooseIcon)
    }
}
export default myPlugin