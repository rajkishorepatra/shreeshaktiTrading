import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  vite: {
    server: {
        fs: {
            allow: ["/Users/91784/node_modules/swiper/modules"]
        }
    }
},
})
