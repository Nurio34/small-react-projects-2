import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/small-react-projects-2/",
    build: {
        outDir: "build",
    },
    plugins: [react()],
});
