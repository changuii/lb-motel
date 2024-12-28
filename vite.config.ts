import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // 또는 자신의 IP 주소 (예: '192.168.1.100')
    port: 5173, // 원하는 포트 번호
  },
})
