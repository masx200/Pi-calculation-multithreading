import path, { resolve } from "path";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import checker from "vite-plugin-checker";
import { VitePWA } from "vite-plugin-pwa";
export default defineConfig({
    esbuild: { drop: ["console", "debugger"] },
    plugins: [
        VitePWA({
            registerType: "autoUpdate",
            workbox: { globPatterns: ["*/*"] },
        }),
        createHtmlPlugin({
            minify: {
                removeAttributeQuotes: false,
                removeComments: true,
                removeTagWhitespace: true,
                collapseWhitespace: true,
            },
        }),
        checker({ typescript: { root: path.resolve(__dirname) } }),
    ],
    root: resolve(__dirname, "src"),
    build: {
        minify: "terser",
        target: "es2015",
        terserOptions: {
            format: { comments: false },
            compress: { drop_console: true, drop_debugger: true },
        },
    },
});
