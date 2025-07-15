import presetWind4 from '@unocss/preset-wind4'
import { defineConfig } from 'unocss'

export default defineConfig({
  content: {
    filesystem: ['./**/*.{html,md,js}'],
  },
  presets: [presetWind4()],
})
