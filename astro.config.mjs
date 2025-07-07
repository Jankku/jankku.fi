import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwind()],
  },
  experimental: {
    fonts: [
      {
        provider: 'local',
        name: 'Cooper Hewitt',
        cssVariable: '--font-cooper-hewitt',
        variants: [
          {
            src: ['./src/fonts/CooperHewitt-Book.woff2'],
            weight: 400,
            style: 'normal',
          },
          {
            src: ['./src/fonts/CooperHewitt-Medium.woff2'],
            weight: 500,
            style: 'normal',
          },
          {
            src: ['./src/fonts/CooperHewitt-Semibold.woff2'],
            weight: 600,
            style: 'normal',
          },
          {
            src: ['./src/fonts/CooperHewitt-Bold.woff2'],
            weight: 700,
            style: 'normal',
          },
        ],
      },
      {
        provider: 'local',
        name: 'Concourse-Index',
        cssVariable: '--font-concourse-index',
        variants: [
          {
            src: ['./src/fonts/Concourse-Index-Regular.woff2'],
            weight: 'normal',
            style: 'normal',
          },
        ],
      },
    ],
  },
});
