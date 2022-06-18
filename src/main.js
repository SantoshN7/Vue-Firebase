import { createApp } from 'vue'
import App from './App.vue'
import {vueRouter} from './router';
import * as firebase from 'firebase/auth';
import './firebaseSetup';

createApp(App)
.use(vueRouter)
.provide('firebase', firebase)
.provide('firebaseAuth', firebase.getAuth())
.mount('#app')
