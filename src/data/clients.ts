export interface ClientItem {
  id: string;
  name: string;
  platform: string;
  badge: string;
  description: string;
  color: string;
  recommendedFor: string;
  protocols: string[];
}

export const clientItems: ClientItem[] = [
  {
    id: 'clash-verge',
    name: 'Clash Verge',
    platform: 'Windows / macOS / Linux',
    badge: '电脑端首选',
    description: '现代开源跨平台客户端，界面极简优雅，内存占用低，支持智能分流规则与快捷托盘切换。',
    color: '#4B2585',
    recommendedFor: 'PC / Mac / Linux 电脑日常办公',
    protocols: ['Shadowsocks', 'Vmess', 'Trojan', 'Hysteria2'],
  },
  {
    id: 'clash-meta',
    name: 'Clash Meta / Mihomo',
    platform: 'Windows / Android / OpenWrt',
    badge: '硬核高性能',
    description: '全新内核协议支持，多核并发处理更强，适合追求高吞吐量与自定义规则的进阶用户。',
    color: '#6B36B4',
    recommendedFor: '软路由 / Android 手机 / 高性能玩家',
    protocols: ['Vmess', 'Vless', 'Trojan', 'Snell'],
  },
  {
    id: 'shadowrocket',
    name: 'Shadowrocket (小火箭)',
    platform: 'iOS (iPhone / iPad)',
    badge: '苹果手机利器',
    description: 'iOS 生态中最经典的代理软件，扫码一键导入节点，自动分流，耗电控制优异。',
    color: '#F47A00',
    recommendedFor: 'iPhone / iPad 移动端主力工具',
    protocols: ['SS', 'SSR', 'Vmess', 'Trojan', 'Vless'],
  },
  {
    id: 'v2ray',
    name: 'V2Ray / V2rayN / V2rayNG',
    platform: 'Windows / Android',
    badge: '经典通用工具',
    description: '老牌经典客户端，底层通用稳定，兼容各类网络复杂环境与自定义节点参数。',
    color: '#4F9E00',
    recommendedFor: '安卓手机 / Windows 备用工具',
    protocols: ['Vmess', 'Shadowsocks', 'Socks5'],
  },
  {
    id: 'trojan',
    name: 'Trojan / Sing-Box',
    platform: '全平台 Universal',
    badge: '极速穿透',
    description: '伪装为标准 HTTPS 流量，抗干扰能力强，跨平台通用核心支持最新的现代混淆协议。',
    color: '#FFD629',
    recommendedFor: '高抗干扰需求 / 现代极客玩家',
    protocols: ['Trojan-GFW', 'Sing-Box Core', 'Hysteria'],
  },
];
