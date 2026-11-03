import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/ai-frontier-kb/',
  lang: 'zh-CN',
  title: 'AI Frontier KB',
  description: 'AI 前沿知识体系：概念谱系 × 硬件规格全对比',
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '概念', link: '/concepts/agentos' },
      {
        text: '芯片',
        items: [
          { text: '芯片发展代际速览', link: '/chips/01-chip-generations' },
        ],
      },
      {
        text: '硬件',
        items: [
          { text: '规格参数概念手册', link: '/hardware/00-specs-glossary' },
          { text: 'NVIDIA 系', link: '/hardware/01-nvidia-jetson-dgx' },
          { text: '国产芯片系', link: '/hardware/02-domestic-npu-boxes' },
          { text: '通用迷你主机', link: '/hardware/03-minipc-workstations' },
        ],
      },
      { text: 'GitHub', link: 'https://github.com/wangshuang12138-beep/ai-frontier-kb' },
    ],
    sidebar: {
      '/concepts/': [
        {
          text: '概念谱系',
          items: [{ text: 'AgentOS 解读与全景', link: '/concepts/agentos' }],
        },
      ],
      '/chips/': [
        {
          text: '芯片代际',
          items: [{ text: '芯片发展代际速览', link: '/chips/01-chip-generations' }],
        },
      ],
      '/hardware/': [
        {
          text: '概念基础',
          items: [{ text: '规格参数概念手册', link: '/hardware/00-specs-glossary' }],
        },
        {
          text: '硬件对比',
          items: [
            { text: 'NVIDIA 系：DGX Spark 与 Jetson', link: '/hardware/01-nvidia-jetson-dgx' },
            { text: '国产芯片边缘 AI 盒子', link: '/hardware/02-domestic-npu-boxes' },
            { text: '通用 AI 迷你主机（本地大模型）', link: '/hardware/03-minipc-workstations' },
          ],
        },
      ],
    },
    outline: { level: [2, 3], label: '页面导航' },
    search: { provider: 'local' },
    docFooter: { prev: '上一页', next: '下一页' },
    lastUpdatedText: '最后更新',
    editLink: {
      pattern: 'https://github.com/wangshuang12138-beep/ai-frontier-kb/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },
    footer: {
      message: '数据为快照价，采购前以厂商当期页面为准',
      copyright: 'MIT License · xca & Kimi Claw',
    },
  },
})
