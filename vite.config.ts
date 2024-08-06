import { defineConfig, PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'


interface ModuleFoundation {
  git_source: string
  path: string
}

function feFoundation(mods: ModuleFoundation[]): PluginOption {


  console.log(path.resolve("./tsconfig.json"))

  return {
    name: 'pdc-fe-foundation',
    config(config, { command }) {
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), feFoundation([])],
})
