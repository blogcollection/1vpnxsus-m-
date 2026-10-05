export interface SiteConfig {
  siteName: string;
  siteSubtitle: string;
  brandTagline: string;
  domain: string;
  siteUrl: string;
  registerUrl: string;
  loginUrl: string;
  supportUrl: string;
  telegramUrl: string;
  announcementText: string;
  seoTitle: string;
  seoDescription: string;
  themeColors: {
    deepPurple: string;
    brightPurple: string;
    energeticOrange: string;
    brightYellow: string;
    grassGreen: string;
    darkGreen: string;
    creamWhite: string;
    darkText: string;
  };
}

export const siteConfig: SiteConfig = {
  siteName: 'XSUS',
  siteSubtitle: '十八线小机场',
  brandTagline: '轻松连上世界，快一点，也简单一点。',
  domain: 'vpnxsus.xyz',
  siteUrl: 'https://vpnxsus.xyz',
  // 用户可在此处修改注册、登录与客服链接，全站 CTA 统一生效
  registerUrl: '#pricing', // 默认锚点到套餐区；如已有专属注册链接可直接替换例如 'https://vpnxsus.xyz/auth/register'
  loginUrl: '#pricing',
  supportUrl: 'https://t.me/vpnxsus_support',
  telegramUrl: 'https://t.me/vpnxsus_channel',
  announcementText: '⚡ XSUS 今日线路正常 · 新用户可快速开始使用',
  seoTitle: 'XSUS官网 - XSUS机场节点、套餐与使用指南',
  seoDescription: 'XSUS 官网介绍 XSUS 机场套餐、香港、日本、台湾、新加坡、美国等节点地区，并提供 Clash、Shadowrocket、V2Ray 等客户端使用说明与常见问题。',
  themeColors: {
    deepPurple: '#4B2585',
    brightPurple: '#6B36B4',
    energeticOrange: '#F47A00',
    brightYellow: '#FFD629',
    grassGreen: '#4F9E00',
    darkGreen: '#006B2C',
    creamWhite: '#FFF8EB',
    darkText: '#17131F',
  },
};
