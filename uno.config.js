import { defineConfig, presetWind3, presetAttributify } from 'unocss'

export default defineConfig({
  safelist: [
      'text-sm',
      'text-md',
      'text-lg',
      'text-xl',
      'text-2xl',
      'text-3xl',
      'text-4xl',
      'text-5xl',

      // rotate -4 to +4 deg
      'rotate-[-3.0deg]',
      'rotate-[-2.0deg]',
      'rotate-[-1.0deg]',
      'rotate-[0.0deg]',
      'rotate-[1.0deg]',
      'rotate-[2.0deg]',
      'rotate-[3.0deg]',

      // opacity from 0.6 to 1.0
      'opacity-[0.6]',
      'opacity-[0.7]',
      'opacity-[0.8]',
      'opacity-[0.9]',
      'opacity-[1.0]',
    ],
  content: {
    filesystem: ['./**/*.{html,md,js}'],
  },
  presets: [
    presetAttributify(),
    presetWind3(),
  ],
})
