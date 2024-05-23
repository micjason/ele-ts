import { App } from 'vue'
import chooseIcon from './chooseIcon/index';
import chooseCity from './chooseCity/index';

const components = [
    chooseIcon,
    chooseCity
]

const AllPlugin = {
    install(app: App) {
        components.map(item=>{
            app.use(item)
        })
    }
}
export default AllPlugin