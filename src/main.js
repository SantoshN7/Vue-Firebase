import {createApp} from 'vue'
import App from './App.vue'
import {vueRouter} from './router';
import {vuestore} from './store';
import './firebaseSetup';
import Card from './components/base-ui/Card.vue';

createApp(App)
.use(vuestore)
.use(vueRouter)
.component('Card', Card)
.mount('#app')
