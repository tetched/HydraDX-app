import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import AppLayout from '@/layouts/AppLayout.vue';
import NoticeMessage from '@/components/common/NoticeMessage.vue';
import Toast, { PluginOptions } from 'vue-toastification';

const options: PluginOptions = {
  timeout: 6000,
  toastClassName: 'hdx-toast-container',
};

import '@/assets/styles/scss/main.scss';
import 'vue-toastification/dist/index.css';

createApp(App)
  .use(store)
  .use(router)
  .use(Toast, options)
  .component('AppLayout', AppLayout)
  .component('NoticeMessage', NoticeMessage)
  .mount('#app');
