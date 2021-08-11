module.exports = {
  title: 'A simplified parser',
  description: 'A simplified parser',
  base: '/a-simplified-parser/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'A simplified parser',
      description: 'A simplified parser'
    },
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/' }
        ]
      },
      { text: 'Blog', link: 'https://yangzheli.github.io' },
      { text: 'Github', link: 'https://github.com/yangzheli/a-simplified-parser.git' },
    ],
    locales: {
      '/': {
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        sidebar: [
          ['/zh/test', '测试']
        ]
      }
    },
    sidebarDepth: 2,
    nextLinks: true,
    prevLinks: true
  }
}