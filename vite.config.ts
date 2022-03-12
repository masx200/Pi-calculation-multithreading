import { resolve } from "path";
import { defineConfig } from "vite";
import { minifyHtml } from "vite-plugin-html";
export default defineConfig({
    esbuild: { drop: ["console", "debugger"] },
    plugins: [minifyHtml({ removeAttributeQuotes: false })],
    root: resolve(__dirname, "src"),
    build: {
        minify: "esbuild",
        target: "es2015",
        terserOptions: {
            compress: { drop_console: true, drop_debugger: true },
        },
    },
});
