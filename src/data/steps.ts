export interface StepItem {
  step: string;
  title: string;
  description: string;
  badge: string;
  iconName: string;
  tips: string;
  color: string;
}

export const setupSteps: StepItem[] = [
  {
    step: '01',
    title: '注册 XSUS 账号',
    description: '使用常用邮箱快速注册，无需复杂实名，10秒内即可激活个人控制台。',
    badge: '第一站 · 快速入园',
    iconName: 'user-plus',
    tips: '建议使用非敏感邮箱，便于随时接收重要节点维护通知。',
    color: '#4B2585',
  },
  {
    step: '02',
    title: '选择适合的套餐',
    description: '根据自己的月度流量和同时在线设备需求，挑选入门、标准或畅享套餐。',
    badge: '第二站 · 挑选门票',
    iconName: 'ticket',
    tips: '支持常用便捷支付方式，即时支付即时开通，无多余等待。',
    color: '#F47A00',
  },
  {
    step: '03',
    title: '一键导入客户端',
    description: '在用户中心复制专属订阅链接，一键导入 Clash、Shadowrocket 或 V2Ray 中。',
    badge: '第三站 · 装备配置',
    iconName: 'download',
    tips: '控制台提供图文与视频分步引导，点一下即可自动拉取节点列表。',
    color: '#4F9E00',
  },
  {
    step: '04',
    title: '开启代理 畅游网络',
    description: '在客户端中选择香港、日本或美国节点，点击开启系统代理，即刻出发！',
    badge: '第四站 · 全球出发',
    iconName: 'rocket',
    tips: '建议日常开启「规则模式 / Rule」，国内流量直连，海外流量走节点。',
    color: '#FFD629',
  },
];
