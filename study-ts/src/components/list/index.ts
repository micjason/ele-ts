import list from './src/index.vue';
import { App } from 'vue'


const myPlugin = {
    install(app: App) {
        app.component('m-list', list)
    }
}
export default myPlugin