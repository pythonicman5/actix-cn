let { actix } = require ('./category/actix.js')

module.exports = {
    title: 'Actix中文',
    description: 'Actix：Rust的强大的Actor系统和有趣的Web框架',
    head: [
      ['link', { rel: 'icon', href: `/favicon.ico` }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
      ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    serviceWorker: true,
    theme: 'vue',
    themeConfig: {
        repo: 'actix-cn/actix-cn',
        docsDir: 'docs',
        displayAllHeaders: true,
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新', 
        docsDir: 'docs',
        sidebarDepth: 0,
        search: true,
        searchMaxSuggestions: 11,
        nav: [
          { text: '文档', link: '/document/' },
          { text: '社区', link: '/community/' },
          { text: '源码', link: '/code/' },
          { text: '论坛', link: 'https://github.com/rustlang-cn/forum/issues' },
        ],
        sidebar: {
          '/document/': actix('文档'),
        }
    }
}

