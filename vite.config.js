import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

const htmlFolderPlugin = () => {
  return {
    name: 'html-folder-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/' || req.url === '/index.html') {
          req.url = '/public/index.html';
        }
        next();
      });
    },
    config(config) {
      return {
        build: {
          rollupOptions: {
            input: {
              main: path.resolve(__dirname, 'public/index.html')
            }
          }
        }
      };
    },
    closeBundle() {
      const distPublicHtml = path.resolve(__dirname, 'dist/public/index.html');
      const distHtml = path.resolve(__dirname, 'dist/index.html');
      if (fs.existsSync(distPublicHtml)) {
        const compiledHtml = fs.readFileSync(distPublicHtml, 'utf-8');
        fs.writeFileSync(distHtml, compiledHtml, 'utf-8');
        fs.unlinkSync(distPublicHtml);
        const distPublicDir = path.resolve(__dirname, 'dist/public');
        if (fs.readdirSync(distPublicDir).length === 0) {
          fs.rmdirSync(distPublicDir);
        }
      }
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), htmlFolderPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 5173
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          swiper: ['swiper']
        }
      }
    }
  }
})
