import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {  	
  	lib: {
  		entry:   path.resolve(__dirname, 'src/SNS_BoardView.ts'),
  		name:    'sns-boardview',
  		formats: ['es']
  	},
  	minify: true,
  	rollupOptions: {
  		external: ['javascript-interface-library','htm','preact','protoux','shareable-note-stickers','svelte-coordinate-conversion'],
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  },
})