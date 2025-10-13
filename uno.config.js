import { defineConfig, presetWind3, presetAttributify } from 'unocss'

const range = (n, fn) => Array.from({ length: n }, (_, i) => fn(i));

function rangeWithPrefixes(n, base, prefixes = ['']) {
  return prefixes.flatMap(prefix =>
    range(n, i => `${prefix}${base}-${i}`)
  );
}

export default defineConfig({
  content: {
    filesystem: ['./**/*.{html,md,js}'],
  },
  presets: [
    presetAttributify(),
    presetWind3({
      dark: 'media'
    })
  ],
  theme: {
    colors: {
      blockBg: 'var(--block-background-color)',
      bg: 'var(--background-color)',
      textColor: 'var(--text-color)',
      secondary: 'var(--secondary-text-color)'
    },
    fontFamily: {
      mono: ["Courier New", "Courier", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Lucida Console"],
      serif: ["Noto Serif", "Noto Serif SC", "serif"],
      secondary: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"]
    },
    animation: {
      keyframes: {
        fadeIn: '{from { opacity: 0; transform: translateY(1rem); } to { opacity: 1; transform: translateY(0); }}',
        heartBeat: '{0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); }}',
        headShake: '{0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); }}'
      },
      counts: {
        infinite: 'infinite'
      }
    }
  },
  shortcuts: {
    'small-button': 'bg-blockBg px-2 py-1 no-underline hover:no-underline rounded border border-solid border-bg hover:border-textColor transition',
    'round-sticker': 'bg-blockBg rounded-full shadow-sm p-4',
    'tooltip-base': 'absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-1 bg-black/80 text-white px-2.5 py-1.5 rounded text-xs whitespace-nowrap opacity-0 invisible transition-all duration-300 pointer-events-none mb-2 z-1000 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 dark:bg-white/90 dark:text-black'
  },
  safelist: [
      'text-sm', 'text-md', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl',
      'text-base!', 'md:text-size-lg', 'md:text-size-xl', 'md:text-size-2xl',

      // 动画相关
      'animate-heart-beat', 'animate-fade-in', 'animate-head-shake',

      // 工具提示相关
      'group', 'relative', 'tooltipped', 'cursor-help',

      // 渐变和遮罩相关
      'bg-gradient-to-b', 'bg-gradient-to-t', 'from-bg', 'to-transparent',
      'pointer-events-none',

      // 布局和定位
      'fixed', 'absolute', 'relative', 'block', 'inline-block', 'flex', 'flex-col',
      'justify-center', 'items-center', 'hidden', 'invisible', 'visible',

      // 尺寸
      'w-8', 'h-8', 'w-[4rem]', 'h-[4rem]', 'w-[5rem]', 'h-[5rem]', 'md:w-[7rem]', 'md:h-[7rem]',
      'w-[10rem]', 'w-[calc(25%_-_1rem)]', 'w-[calc(50%_-_2rem)]', 'sm:w-full', 'h-50',

      // 位置
      'top-0', '-top-25', 'top-[1rem]', 'top-[2rem]', 'top-[-1rem]', 'left-0', 'right-0', 'right-10',
      'right-[-1rem]', 'right-[-3rem]', 'md:right-[-5rem]',

      // 层级和变换
      'z-1', 'z-20', 'z-30', 'z-1000', 'rotate-[-5deg]',

      // 范围生成的类
      ...range(10, i => `opacity-${i * 10}`),
      ...rangeWithPrefixes(5, 'rotate', ['', '-']),
      ...rangeWithPrefixes(5, 'translate-x', ['', '-']),
      ...rangeWithPrefixes(5, 'translate-y', ['', '-']),

      // 间距和边距
      'px-2', 'py-1', 'px-4', 'py-3', 'py-5', 'px-2.5', 'py-1.5', 'mt-5', 'my-4', 'my-5', 'mb-2',
      'gap-2', 'gap-4', 'ps-4',

      // 背景和边框
      'bg-transparent', 'bg-black/80', 'bg-neutral-100', 'bg-neutral-200', 'bg-neutral-200/50',
      'dark:bg-neutral-800', 'dark:bg-neutral-700', 'dark:bg-neutral-700/50', 'border', 'rounded', 'rounded-full',

      // 文本和字体
      'text-white', 'text-secondary', 'text-sm', 'text-base', 'text-xl', 'text-2xl', 'md:text-xl', 'md:text-2xl',
      'text-size-xs', 'font-extrabold', 'leading-relaxed', 'whitespace-nowrap',

      // 动画和过渡
      'transition-all', 'transition-transform', 'duration-300', 'hover:scale-110', 'hover:no-underline',
      'hover:bg-neutral-200/50', 'dark:hover:bg-neutral-700/50', 'group-hover:opacity-100', 'group-hover:visible', 'group-hover:translate-y-0',

      // 特殊效果
      'dark:invert-100', 'drop-shadow-xl', 'shadow', 'pointer-events-none', 'overflow-y-auto',

      // 专用组件类
      'related-posts', 'post-content', 'posts-item', 'xerox', 'card-header', 'markdown-body', 'line-clamp-2',
      'demo-item', 'demo-card', 'demo-info', 'demo-preview', 'demo-placeholder', 'demo-placeholder-card',
      'hr', 'pagefind-exclude', 'grid-cols-3', 'list-none'
    ]
})
