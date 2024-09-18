// import './assets/main.css'
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/index.css";
import "swiper/swiper-bundle.css"; // Import Swiper CSS globally

const app = createApp(App);

app.use(router);

app.mount("#app");
