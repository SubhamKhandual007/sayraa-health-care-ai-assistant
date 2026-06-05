import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    server: {
        port: 4000,
        open: true,
        headers: {
            'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
        },
    },
    build: {
        outDir: 'dist',
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('firebase')) {
                            return 'vendor-firebase';
                        }
                        if (id.includes('framer-motion')) {
                            return 'vendor-framer';
                        }
                        if (id.includes('bootstrap') || id.includes('react-bootstrap')) {
                            return 'vendor-bootstrap';
                        }
                        if (id.includes('emoji-picker-react')) {
                            return 'vendor-emoji';
                        }
                        if (id.includes('@elevenlabs')) {
                            return 'vendor-elevenlabs';
                        }
                        if (id.includes('@google') || id.includes('groq-sdk') || id.includes('axios')) {
                            return 'vendor-core-libs';
                        }
                        if (id.includes('react') || id.includes('react-dom') || id.includes('react-router') || id.includes('react-router-dom')) {
                            return 'vendor-react';
                        }
                        return 'vendor-others';
                    }
                },
            },
        },
    },
    // Optimize dependencies
    optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom', 'firebase'],
    },
});
