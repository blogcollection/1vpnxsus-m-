export interface UseCaseItem {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  tags: string[];
  bgColor: string;
  textColor: string;
  accentColor: string;
}

export const useCaseItems: UseCaseItem[] = [
  {
    id: 'ai-tools',
    title: 'AI 生产力工具',
    badge: '效率倍增',
    subtitle: 'ChatGPT / Claude / Midjourney / Cursor',
    description: '提供洁净的海外节点网络出口，稳定连接 OpenAI、Anthropic 等前沿 AI 模型平台，写代码、翻译、查资料不中断。',
    tags: ['ChatGPT 4o', 'Claude 3.7', 'Midjourney', 'GitHub Copilot', 'Gemini'],
    bgColor: '#4B2585',
    textColor: '#FFFFFF',
    accentColor: '#FFD629',
  },
  {
    id: 'media-stream',
    title: '海外优质影音',
    badge: '4K 流畅体验',
    subtitle: 'YouTube / Netflix / Disney+ / Spotify',
    description: '大带宽冗余出口支撑高码率 4K 视频流缓冲，支持香港、台湾、日本等多区官方合规流媒体日常观看与音乐畅听。',
    tags: ['YouTube 4K', 'Netflix 日美港', 'Spotify 音乐', '巴哈姆特动画疯'],
    bgColor: '#F47A00',
    textColor: '#FFFFFF',
    accentColor: '#FFF8EB',
  },
  {
    id: 'daily-browse',
    title: '日常学术与资讯',
    badge: '极速直达',
    subtitle: 'Google / 维基百科 / GitHub / 学术期刊',
    description: '秒开 Google 搜索、Google Scholar、arXiv、海外高校官网与开源代码仓库，为日常科研与工作扫清连接障碍。',
    tags: ['Google 搜索', 'arXiv 学术', 'Wikipedia', 'Notion 同步', 'Stack Overflow'],
    bgColor: '#4F9E00',
    textColor: '#FFFFFF',
    accentColor: '#FFD629',
  },
  {
    id: 'social-network',
    title: '全球社交与电商',
    badge: '实时沟通',
    subtitle: 'X (Twitter) / Telegram / Instagram / Amazon',
    description: '随时跟进全球科技动态与行业资讯，Telegram 即时通讯秒收消息，海外电商后台与跨境独立站管理稳定不掉线。',
    tags: ['X (Twitter)', 'Telegram', 'Instagram', 'Amazon Seller', 'Discord'],
    bgColor: '#FFD629',
    textColor: '#17131F',
    accentColor: '#4B2585',
  },
];
