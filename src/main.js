import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
// import router from "./router";

Vue.config.productionTip = false;

new Vue({
  // router,
  render: (h) => h(App),
  mounted() {
    // This is needed for "prerender-spa-plugin"'s renderAfterDocumentEvent to take snapshot of static content once everything is rendered.
    document.dispatchEvent(new Event("vue-render-complete"));
  },
}).$mount("#app");
