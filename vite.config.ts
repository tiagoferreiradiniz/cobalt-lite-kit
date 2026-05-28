/// <reference types="vitest/config" />
import path from 'path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import { playwright } from '@vitest/browser-playwright'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss(), dts({
    include: ['src/components', 'src/hooks', 'src/lib', 'src/index.ts'],
    exclude: ['src/stories', 'src/App.tsx', 'src/main.tsx'],
    insertTypesEntry: true,
    tsconfigPath: './tsconfig.app.json',
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'CobaltLiteKit',
      formats: ['es', 'cjs'],
      fileName: (format) => `cobalt-lite-kit.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        /^radix-ui/,
        /^@radix-ui/,
        /^@base-ui/,
        'tailwindcss',
        'recharts',
        '@tanstack/react-table',
        'embla-carousel-react',
        'react-day-picker',
        'vaul',
        'cmdk',
        'input-otp',
        'react-resizable-panels',
        'sonner',
        'lucide-react',
        'date-fns',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: 'style[extname]',
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [storybookTest({ configDir: path.join(__dirname, '.storybook') })],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }],
          },
        },
      },
    ],
  },
})
