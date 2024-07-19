import { defineConfig } from "tsup"

export default defineConfig({
	entry: ["src/*"],
	format: "esm",
	splitting: false,
	minify: false,
	experimentalDts: true,
	sourcemap: true,
	clean: true,
})
