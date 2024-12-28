import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";

export default defineConfig({
  base: "/vue-todo/", // 이렇게 설정
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
