    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';
    import path from 'path';

    export default defineConfig({
        plugins: [react()],
        base: '/react_vite_blog_proj/',
        define: {
            global: 'window' // vagy 'this' is, ha szükséges
        },
        resolve: {
            alias: {
                // Esetleges aliasok, ha szükséges
                '@': path.resolve(__dirname, 'src'),
            },
        },
    });
