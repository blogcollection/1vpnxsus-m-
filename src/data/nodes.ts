export interface NodeRegion {
  id: string;
  flag: string;
  nameZh: string;
  nameEn: string;
  tag: string;
  latencyRating: string;
  badgeColor: string;
  ticketBg: string;
  textColor: string;
  description: string;
  useFor: string[];
}

export const nodeRegions: NodeRegion[] = [
  {
    id: 'hk',
    flag: '🇭🇰',
    nameZh: '香港',
    nameEn: 'Hong Kong',
    tag: '超低延迟 · 极速直连',
    latencyRating: '⚡ 20~40ms',
    badgeColor: '#F47A00',
    ticketBg: '#4B2585',
    textColor: '#FFFFFF',
    description: '亚太核心枢纽，大陆直连低跳数，日常即时网页与低延迟通讯首选。',
    useFor: ['日常网页秒开', '谷歌学术搜索', '微信/TG海外消息', '亚太游戏联机'],
  },
  {
    id: 'tw',
    flag: '🇹🇼',
    nameZh: '台湾',
    nameEn: 'Taiwan',
    tag: '华语影音 · 繁体生态',
    latencyRating: '⚡ 35~55ms',
    badgeColor: '#FFD629',
    ticketBg: '#6B36B4',
    textColor: '#FFFFFF',
    description: '繁中原生 IP 环境，适合看巴哈姆特、爱奇艺海外版、繁体华语流媒体。',
    useFor: ['巴哈姆特动画疯', '华语限定影视', 'Line 繁体服务', 'Steam 亚太服'],
  },
  {
    id: 'jp',
    flag: '🇯🇵',
    nameZh: '日本',
    nameEn: 'Japan',
    tag: '大宽带 · 优质二次元',
    latencyRating: '⚡ 45~70ms',
    badgeColor: '#4F9E00',
    ticketBg: '#17131F',
    textColor: '#FFFFFF',
    description: '东京优质机房大带宽出口，日区流媒体、DMM、Pixiv 及各类二次元社区。',
    useFor: ['AbemaTV / Nico', 'Pixiv 创作插画', '日区手游联机', 'ChatGPT 常用'],
  },
  {
    id: 'sg',
    flag: '🇸🇬',
    nameZh: '新加坡',
    nameEn: 'Singapore',
    tag: '东南亚核心 · 稳定不挤',
    latencyRating: '⚡ 60~85ms',
    badgeColor: '#F47A00',
    ticketBg: '#006B2C',
    textColor: '#FFFFFF',
    description: '东南亚网络枢纽，高峰期优质分流，海外云服务与 AI 模型访问流畅。',
    useFor: ['TikTok 东南亚', 'Claude AI 对话', '跨境电商控制台', 'Spotify 音乐'],
  },
  {
    id: 'us',
    flag: '🇺🇸',
    nameZh: '美国',
    nameEn: 'United States',
    tag: '海量资源 · 全球服务',
    latencyRating: '⚡ 130~170ms',
    badgeColor: '#FFD629',
    ticketBg: '#4B2585',
    textColor: '#FFFFFF',
    description: '北美西海岸直连骨干，几乎兼容所有海外原生应用、AI 全家桶与开发平台。',
    useFor: ['OpenAI / Claude', 'GitHub / Docker', 'Reddit / YouTube', '美区影视独播'],
  },
];
