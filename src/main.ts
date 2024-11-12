import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/reset.css";
import "./assets/styles/global.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// 사용할 아이콘 import
import {
  faSignal,
  faWifi,
  faBatteryThreeQuarters,
  faPlus,
  faRocket,
  faFire,
  faSitemap,
  faFolderMinus,
} from "@fortawesome/free-solid-svg-icons";

// 라이브러리에 아이콘 추가
library.add(
  faSignal,
  faWifi,
  faBatteryThreeQuarters,
  faPlus,
  faRocket,
  faFire,
  faSitemap,
  faFolderMinus
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
