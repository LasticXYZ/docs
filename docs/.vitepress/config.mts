import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lastics Docs",
  description: "Vitepress Docs for Lastic",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'FAQs', link: 'faqs/what-is-blockspace' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'What is Blockspace?', link: '/what-is-blockspace' }
        ]
      },
      {
        text: 'Examples2',
        items: [
          { text: 'Builder - Getting Started', link: 'builder/getting-started' },
          { text: 'Trader - Index', link: 'trader/index' },
          { text: 'What is Blockspace?', link: '/what-is-blockspace' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://x.com/lastic_xyz' },
      { icon: 'github', link: 'https://github.com/lastic_xyz/lasticUI' }
    ]
  }
})
