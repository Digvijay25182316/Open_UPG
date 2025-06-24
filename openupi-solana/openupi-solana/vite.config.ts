import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({
      manifest: {
        name: 'OpenUPI on Solana',
        short_name: 'OpenUPI',
        description: 'Send and receive stablecoins via Solana',
        theme_color: '#F58024',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
    }),
  ],
  server: {
    allowedHosts: [
      '5173-digvijay25182316-aws-u918gme7rjp.ws-us120.gitpod.io',
    ],
  },
});
