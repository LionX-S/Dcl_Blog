// uno.config.ts
import {
  defineConfig, presetAttributify, presetIcons,
  presetTypography, presetUno, presetWebFonts,
  transformerDirectives, transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // 导航栏item
    {
      nav_container: 'flex-none h-full leading-18',
      nav_item: 'w-32 list-none hover:bg-slate-3',
      icon_babel_time: 'w-30 text-center bg-blue-200 border-rounded color-blue-500 font-300 font-size-3.5'
    }
  ],
  theme: {
    colors: {
      // ...
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      // 图标集并且按需引入
      collections: {
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default)
      },
      // 图标设置同一样式
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
        'width': '1rem',
        'height': '1rem',
      }
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})