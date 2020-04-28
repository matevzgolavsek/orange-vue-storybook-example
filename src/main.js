import Vue from "vue";
import App from "./App.vue";

require('@orange-ui/orange/dist/css/orange.css');

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
