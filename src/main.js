import {createApp} from 'vue'
import App from './App.vue'
import {vueRouter} from './router';
import {vuestore} from './store';
import './firebaseSetup';

createApp(App)
.use(vuestore)
.use(vueRouter)
.mount('#app')
