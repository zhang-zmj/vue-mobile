import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';

import { Swipe, SwipeItem, Lazyload, Badge, Sidebar,
     SidebarItem, Collapse, CollapseItem, Tab, Tabs, Card,
     Image as VanImage, Tag, Button, Form, Field, CellGroup,
     Notify, Toast, PullRefresh,List,Popup,Grid,GridItem,AddressEdit,
     AddressList, Icon,SubmitBar,CheckboxGroup,SwipeCell,Stepper,Checkbox
} from 'vant';



createApp(App)
.use(store).use(router).use(Badge).use(Tab).use(Tabs)
.use(Swipe).use(SwipeItem).use(Lazyload, {
    loading: require("./assets/images/default.png"),
    error: require("./assets/images/default.png")
}).use(Sidebar).use(SidebarItem).use(Collapse).use(CollapseItem)
.use(Card).use(VanImage).use(Tag).use(Button).use(Form).use(Field)
.use(CellGroup).use(Notify).use(Toast).use(Checkbox).use(Stepper).use(SwipeCell)
.use(CheckboxGroup).use(SubmitBar).use(Icon).use(AddressList).use(AddressEdit)
.use(GridItem).use(Grid).use(Popup).use(List).use(PullRefresh)
.mount('#app')

