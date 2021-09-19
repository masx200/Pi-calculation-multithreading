import { defineConfig } from "rollup";
import commonjs from "@rollup/plugin-commonjs";
import noderesolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import ts from "rollup-plugin-ts";
import babel from "@rollup/plugin-babel";
import rollupExternalModules from "rollup-external-modules";
export default defineConfig({
    external: rollupExternalModules,
    plugins: [
        noderesolve(),
        commonjs(),

        ts({}),
        babel({
            extensions: [".js", ".jsx", ".es6", ".es", ".mjs", ".ts"],
            babelHelpers: "bundled",
            plugins: [
                "@babel/plugin-proposal-nullish-coalescing-operator",
                "@babel/plugin-proposal-optional-chaining",
            ],
        }),
        terser({
            compress: { drop_console: true, drop_debugger: true },
            output: { beautify: true, comments: false },
        }),
    ],
    input: "src/index.ts",
    output: { format: "esm", file: "dist/index.js" },
});
