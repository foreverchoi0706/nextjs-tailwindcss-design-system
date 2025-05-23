import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["./ui/index.ts"],
	format: ["cjs", "esm"],
	dts: true,
	splitting: false,
	sourcemap: true,
	clean: true,
	treeshake: true,
	minify: true,
	external: ["react", "react-dom"],
	outDir: "dist",
});
