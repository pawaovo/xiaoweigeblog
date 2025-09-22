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
      'md:right-[-5rem]',
      'top-[-1rem]', 'right-[-1rem]', 'w-[4rem]', 'h-[4rem]', 'z-1', 'rotate-[-5deg]',

      // back-to-top related classes
      'fixed', '-top-25', 'left-0', 'right-0', 'z-30', 'flex', 'justify-center', 'items-center',
      'transition-all', 'animate-head-shake', 'bg-linear-to-t', 'bg-gradient-from-transparent',
      'bg-gradient-to-zinc', 'bg-transparent', 'mt-5', 'flex-col', 'w-8', 'h-8', 'dark:invert-100',
      'drop-shadow-xl', 'text-size-xs', 'bg-black/80', 'text-white', 'px-2', 'py-1', 'border',
      'rounded', 'top-0',

      // tooltip related classes
      'group', 'relative', 'tooltipped', 'absolute', 'bottom-full', 'left-1/2', 'transform',
      '-translate-x-1/2', 'translate-y-1', 'px-2.5', 'py-1.5', 'whitespace-nowrap',
      'opacity-0', 'invisible', 'duration-300', 'pointer-events-none',
      'z-1000', 'group-hover:opacity-100', 'group-hover:visible', 'group-hover:translate-y-0',
      'dark:bg-white/90', 'dark:text-black', 'cursor-help',

      // settings page related classes
      'shadow', 'grid-cols-3', 'font-extrabold', 'bg-neutral-100', 'dark:bg-neutral-800',
      'hover:bg-neutral-200/50', 'dark:hover:bg-neutral-700/50', 'py-5', 'leading-relaxed',
      'bg-neutral-200/50', 'dark:bg-neutral-700/50', 'py-1', 'px-4', 'h-50', 'overflow-y-auto',
      'right-10', 'text-2xl', 'md:text-2xl', 'text-xl', 'md:text-xl',

      // backlinks related classes
      'related-posts', 'post-content', 'my-5', 'text-base', 'gap-2', 'bg-neutral-200',
      'dark:bg-neutral-700', 'rounded-full', 'text-secondary', 'text-sm', 'my-4', 'list-none',
      'ps-4', 'gap-4',

      // enhanced back-to-top and animations
      'hover:scale-110', 'transition-transform',

      // posts layout related classes
      'posts-item', 'xerox', 'leading-relaxed',

      // pagefind search related classes
      'py-3', 'hr', 'pagefind-exclude'
    ],
  content: {
    filesystem: ['./**/*.{html,md,js}'],
  },
  presets: [
    presetAttributify(),
    presetWind3({
      dark: 'media'
    }),
  ],
})
