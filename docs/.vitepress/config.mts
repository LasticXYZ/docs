import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Lastic Docs",
  description: "Documentation and FAQs for Lastic",
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
        text: 'Coretime on Polkadot',
        items: [
          { text: 'What is Coretime?', link: '/coretime/what-is-coretime' },
          { text: 'What is the Coretime Chain?', link: '/coretime-on-polkadot/coretime-chain' },
          { text: 'What is Bulk Coretime?', link: '/coretime-on-polkadot/bulk-coretime' },
          { text: 'What is Instantaneous Coretime?', link: '/coretime-on-polkadot/instantaneous-coretime' },
          { text: 'What is the Instantaneous Pool?', link: '/coretime-on-polkadot/insta-pool' },
          { text: 'How much is Coretime?', link: '/coretime-on-polkadot/how-much' },
          { text: 'What is a timeslice?', link: '/coretime-on-polkadot/timeslice' },
          { text: 'What are renewals?', link: '/coretime-on-polkadot/renewals' },
          { text: 'What is the lead-in period?', link: '/coretime-on-polkadot/leadin-period' }
        ]
      },
      {
        text: 'Dive deeper',
        items: [
          { text: 'Blockspace Basics', link: '/blockspace-basics' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://x.com/lastic_xyz' },
      { icon: 'github', link: 'https://github.com/lastic_xyz/lasticUI' }
    ]
  }
})
