export interface KeywordGroup {
  category: string;
  items: { text: string; href: string; badge?: string }[];
}

export const footerTopicLinks: KeywordGroup[] = [
  {
    category: '品牌与官网',
    items: [
      { text: 'XSUS 官网', href: '/' },
      { text: 'XSUS 机场', href: '/' },
      { text: '十八线小机场', href: '/' },
      { text: '最新线路公告', href: '#announcement' },
      { text: '服务状态监控', href: '#features' },
    ],
  },
  {
    category: '客户端指南',
    items: [
      { text: 'Clash 机场配置', href: '/clash/' },
      { text: 'Clash Verge 教程', href: '/clash/' },
      { text: 'Shadowrocket 小火箭', href: '/shadowrocket/' },
      { text: 'V2Ray 客户端配置', href: '/guide/' },
      { text: 'Trojan 协议订阅', href: '/guide/' },
    ],
  },
  {
    category: '核心节点地区',
    items: [
      { text: '香港节点 (HK)', href: '/nodes/#hk' },
      { text: '台湾节点 (TW)', href: '/nodes/#tw' },
      { text: '日本节点 (JP)', href: '/nodes/#jp' },
      { text: '新加坡节点 (SG)', href: '/nodes/#sg' },
      { text: '美国节点 (US)', href: '/nodes/#us' },
    ],
  },
  {
    category: '热门应用场景',
    items: [
      { text: 'ChatGPT / Claude AI加速', href: '#usecases' },
      { text: 'YouTube 4K 流媒体', href: '#usecases' },
      { text: 'GitHub / 开发者网络', href: '#usecases' },
      { text: '科学上网与网络加速', href: '#pricing' },
      { text: '新手机场选购常见问答', href: '/faq/' },
    ],
  },
];
