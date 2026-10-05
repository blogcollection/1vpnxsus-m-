export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  price: string;
  period: string;
  originalPrice?: string;
  traffic: string;
  devices: string;
  speed: string;
  targetUser: string;
  features: string[];
  ctaText: string;
  accentColor: string;
  headerBg: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: '入门套餐',
    badge: '尝鲜首选',
    isPopular: false,
    price: '¥12.8',
    period: '/月',
    originalPrice: '¥18.8',
    traffic: '80 GB / 月',
    devices: '同时在线 2 台设备',
    speed: '峰值最高 300 Mbps',
    targetUser: '轻度科研、日常搜索与基础社交浏览用户',
    features: [
      '覆盖香港、日本等核心常用节点',
      '支持 Clash / Shadowrocket 等通用订阅',
      '支持 ChatGPT / Claude 等基础 AI 访问',
      '工单与 Telegram 社群在线答疑',
      '每月流量自动重置',
    ],
    ctaText: '立即加入入门套餐',
    accentColor: '#4B2585',
    headerBg: '#6B36B4',
  },
  {
    id: 'standard',
    name: '标准套餐',
    badge: '🔥 热门推荐 · 性价比之选',
    isPopular: true,
    price: '¥25.8',
    period: '/月',
    originalPrice: '¥36.0',
    traffic: '220 GB / 月',
    devices: '同时在线 4 台设备',
    speed: '峰值最高 800 Mbps',
    targetUser: '高频使用 AI、流媒体追剧、跨境工作的主力推荐',
    features: [
      '覆盖香港、台湾、日本、新加坡、美国全量节点',
      '支持多节点自动测速与负载切换',
      '高码率 4K 影音日常流畅缓冲',
      '支持全平台常用客户端一键导入',
      '优先线路工单响应支持',
      '支持年付额外赠送流量',
    ],
    ctaText: '立即抢购标准套餐',
    accentColor: '#F47A00',
    headerBg: '#F47A00',
  },
  {
    id: 'premium',
    name: '畅享套餐',
    badge: '大流量多设备',
    isPopular: false,
    price: '¥48.8',
    period: '/月',
    originalPrice: '¥68.0',
    traffic: '500 GB / 月',
    devices: '同时在线 8 台设备',
    speed: '峰值最高 1000 Mbps',
    targetUser: '多设备家庭、重度下载与团队协同工作',
    features: [
      '全节点极速接入 + 高峰期冗余带宽',
      '支持 8 台多设备家庭或工作室共享',
      '大流量无顾虑：4K 视频、大文件随心下',
      '支持全主流协议与订阅格式',
      '一对一专属 Telegram 运维响应',
      '长期稳定备份节点通道',
    ],
    ctaText: '立即升级畅享套餐',
    accentColor: '#006B2C',
    headerBg: '#4F9E00',
  },
];
