import { App } from 'vue'
import chooseIcon from './chooseIcon/index';
import chooseCity from './chooseCity/index';
import trend from './trend/index';
import notification from './notification/index';
import list from './list/index';
import menu from './menu/index';

const components = [
    chooseIcon,
    chooseCity,
    trend,
    notification,
    list,
    menu
]

const AllPlugin = {
    install(app: App) {
        components.map(item=>{
            app.use(item)
        })
    }
}
export default AllPlugin