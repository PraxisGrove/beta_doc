import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Praxis Grove",
  description: "Where Soul Takes Root!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '加入社区', link: '/joinus' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PraxisGrove' }
    ]
  }
})
