import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Icon }  from 'leaflet'
import 'leaflet/dist/leaflet.css';

import LDrawToolbar from 'vue2-leaflet-draw-toolbar';
Vue.config.productionTip = false

// ...
Vue.component('l-draw-toolbar', LDrawToolbar);

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
