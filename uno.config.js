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

      'absolute',
      'right-0',
      'w-[5rem]',
      'h-[5rem]',
      'top-[2rem]',
      'w-[calc(25%_-_1rem)]',
      'w-[calc(50%_-_2rem)]',
      'w-[10rem]',
      'sm:w-full',
      'right-[-3rem]',
      'top-[1rem]',
      'md:w-[7rem]',
      'md:h-[7rem]',
      'md:right-[-5rem]'
    ],
  content: {
    filesystem: ['./**/*.{html,md,js}'],
  },
  presets: [
    presetAttributify(),
    presetWind3(),
  ],
})
