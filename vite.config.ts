import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$assets: path.resolve(__dirname, 'public/assets'),
			$raw: path.resolve(__dirname, 'raw-assets'),
			$lib: path.resolve(__dirname, 'src/lib'),
			$components: path.resolve(__dirname, 'src/components'),
		}
	}
});
