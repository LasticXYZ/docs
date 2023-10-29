import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lastics Docs",
  description: "Vitepress Docs for Lastic",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'FAQs', link: '/faqs' }
    ],

    sidebar: [
      {
        text: 'FAQs',
        items: [
          { text: 'What is Blockspace?', link: '/faqs/what-is-blockspace' },
          { text: 'What is a Blockspace Marketplace?', link: '/faqs/what-is-a-blockspace-marketplace' },
          { text: 'What is Coretime on Polkadot?', link: '/faqs/what-is-coretime-on-polkadot' },
          { text: 'What can the Blockspace be used for?', link: '/faqs/what-can-blockspace-be-used-for' },
          { text: 'Who will be able to buy and sell blockspace on Lastic?', link: '/faqs/who-will-be-able-to-buy-and-sell' },
          { text: 'When will Lastic launch?', link: '/faqs/when-will-lastic-launch' }
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
