import { resolve } from "path";
import { defineConfig } from "vite";
import { minifyHtml } from "vite-plugin-html";
export default defineConfig({
    plugins: [minifyHtml({ removeAttributeQuotes: false })],
    root: resolve(__dirname, "src"),
    build: {
        target: "es2015",
        terserOptions: {
            compress: { drop_console: true, drop_debugger: true },
        },
    },
});
