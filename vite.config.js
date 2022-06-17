import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import prismjs from 'vite-plugin-prismjs';

export default defineConfig({
  plugins: [
    react(),
    prismjs({
      languages: ['jsx', 'javascript'],
    }),
  ],
});
