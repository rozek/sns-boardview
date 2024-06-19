import { defineConfig } from 'vite'
import dts  from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
  build: {  	
  	lib: {
  		entry:   path.resolve(__dirname, 'src/sns-boardview.ts'),
  		name:    'sns-boardview',
  		formats: ['es']
  	},
  	minify: false,
  	rollupOptions: {
  		external: ['javascript-interface-library','htm','preact','htm/preact','hyperactiv','protoux','shareable-note-stickers','svelte-coordinate-conversion'],
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  },
  plugins: [
    dts({ insertTypesEntry: true }),
  ],
})