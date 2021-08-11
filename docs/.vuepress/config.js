module.exports = {
  title: 'A simplified parser',
  description: 'Just playing around',
  base: '/a-simplified-parser/',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' }
        ]
      },
      { text: 'Github', link: 'https://github.com/yangzheli/a-simplified-parser.git' },
    ],
    sidebar: 'auto',
    sidebarDepth: 2,
    nextLinks: true,
    prevLinks: true
  }
}