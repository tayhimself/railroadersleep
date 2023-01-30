import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';
import mdx from "@astrojs/mdx";
import partytown from '@astrojs/partytown';

import { remarkReadingTime } from './src/utils/frontmatter.js';

import { SITE } from './src/config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
	// Astro uses this full URL to generate your sitemap and canonical URLs in your final build
	site: SITE.origin,
	base: SITE.basePathname,

	output: 'static',
  markdown: { remarkPlugins: [remarkReadingTime],},

	integrations: [
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		sitemap(),
		image({
			serviceEntryPoint: '@astrojs/image/sharp'
		}),
		mdx({ remarkPlugins: [remarkReadingTime],}),

		/* Disable this integration if you don't use Google Analytics (or other external script). */
		partytown({
			config: { forward: ['dataLayer.push'] },
		}),
	],


	vite: {
		resolve: {
			alias: {
				'~': path.resolve(__dirname, './src'),
			},
		},
	},
});
