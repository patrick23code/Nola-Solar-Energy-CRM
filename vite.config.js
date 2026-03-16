const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        app: resolve(__dirname, "nola-solar-crm.html")
      }
    }
  }
});
