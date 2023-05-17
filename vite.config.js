import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isProduction = process.env.NODE_ENV === 'production'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //github 저장소 이름
  // base: '/ttt-12'
  base: isProduction ? '/ttt-12' : '/'

})
