import path, { resolve } from "path";
import { defineConfig } from "vite";
import { minifyHtml } from "vite-plugin-html";
import checker from "vite-plugin-checker";
export default defineConfig({
    esbuild: { drop: ["console", "debugger"] },
    plugins: [
        minifyHtml({ removeAttributeQuotes: false }),
        checker({ typescript: { root: path.resolve(__dirname) } }),
    ],
    root: resolve(__dirname, "src"),
    build: {
        minify: "terser",
        target: "es2015",
        terserOptions: {
            output: { comments: false },
            compress: { drop_console: true, drop_debugger: true },
        },
    },
});
