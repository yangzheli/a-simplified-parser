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
      { text: 'Blog', link: 'https://yangzheli.github.io' }
    ],
    locales: {
      '/': {
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        sidebar: [
          ['/zh/introduce', '介绍'],
          ['/zh/solution', '思路'],
          ['/zh/lexical', '词法分析'],
          ['/zh/syntax', '语法分析'],
          ['/zh/summary', '总结']
        ]
      }
    },
    sidebarDepth: 2,
    repo: 'yangzheli/a-simplified-parser',
    repoLabel: 'Github',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    lastUpdated: '上次更新',
    nextLinks: true,
    prevLinks: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '.vuepress/public'
      }
    }
  }
}