// uno.config.ts
import {
  defineConfig, presetAttributify, presetIcons,
  presetTypography, presetUno, presetWebFonts,
  transformerDirectives, transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // ...
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