import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { dts } from "rollup-plugin-dts";
import babel from "@rollup/plugin-babel";

const packageJson = require("./package.json");

export default [
	// JS 번들 설정
	{
		input: "ui/index.ts",
		output: [
			{
				file: packageJson.main, // CommonJS
				format: "cjs",
				sourcemap: true,
			},
			{
				file: packageJson.module, // ESM
				format: "es",
				sourcemap: true,
			},
		],
		plugins: [
			babel({
				babelHelpers: "bundled",
				extensions: [".js", ".jsx", ".ts", ".tsx"],
				exclude: "node_modules/**",
				presets: [
					"@babel/preset-env",
					"@babel/preset-typescript",
					["@babel/preset-react", { runtime: "automatic" }], // react 17+ 자동 JSX runtime
				],
			}),
			peerDepsExternal(),
			resolve({
				extensions: [".js", ".ts", ".jsx", ".tsx"],
			}),
			commonjs(),
			typescript({
				tsconfig: "./tsconfig.json",
				declaration: true,
				declarationDir: "dist/types",
			}),
		],
		external: ["react", "react-dom"],
	},
	{
		input: "dist/types/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "es" }],
		plugins: [dts()],
	},
];
