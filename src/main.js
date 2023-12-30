import { createApp } from "vue";
import App from "@/components/app/App.vue";
import UI from "@/ui";
import "@/index.css";

const app = createApp(App);

UI.map((item) => app.component(item.name, item));

app.mount("#app");
