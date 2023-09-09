import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Acco.Design",
  description: "简单而灵活地搭建出强大的产品～",
  themeConfig: {
    nav: [
      { text: '指引', link: '/guide/' },
      { text: '技术方案', link: '/solution/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指引',
          items: [
            { text: '简介', link: '/guide/' },
            { text: '起步', link: '/guide/started' },
            { text: 'Git 提交规范', link: '/guide/git-standard' },
            { text: 'TypeScript 集成', link: '/guide/typescript' },
            { text: '代码检查与代码规范', link: '/guide/code-norm' },
            { text: 'VitePress 搭建项目文档', link: '/guide/docs' },
          ],
        },
      ],
      '/solution/': [
        {
          text: '技术方案',
          items: [{ text: '总览', link: '/solution/' }],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/fitgrace/uma-alioth' }],
  }
})
