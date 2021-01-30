import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import provideStore from './store/index'

const app = createApp(App).use(router);

provideStore(app);

app.mount('#app');
