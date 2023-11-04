import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@components": "/src/components/",
			"@routes": "/src/routes/",
			"@views": "/src/views/",
			"@careers": "/src/careers/",
			"@interfaces": "/src/interfaces/",
			"@functions": "/src/utils/functions/",
			"@hooks": "/src/utils/hooks/",
			"@features": "/src/features/",
			"@services": "/src/services/",
		},
	},
});
