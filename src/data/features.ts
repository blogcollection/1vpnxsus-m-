export interface FeatureZone {
  number: string;
  title: string;
  subtitle: string;
  highlightList: string[];
  description: string;
  bgColor: string;
  textColor: string;
  badgeText: string;
  iconName: string;
}

export const featureZones: FeatureZone[] = [
  {
    number: '01',
    title: '常用地区',
    subtitle: '核心亚太与欧美主流节点覆盖',
    highlightList: ['香港 HK', '台湾 TW', '日本 JP', '新加坡 SG', '美国 US'],
    description: '针对大陆网络环境优化的骨干直连与低延迟中继线路，无论是看油管、玩游戏还是办公，总有合适节点快速连通。',
    bgColor: '#4B2585',
    textColor: '#FFFFFF',
    badgeText: 'REGION ZONE',
    iconName: 'globe',
  },
  {
    number: '02',
    title: '多客户端',
    subtitle: '适配主流开源及第三方代理软件',
    highlightList: ['Clash Verge', 'Clash Meta', 'Shadowrocket', 'V2Ray', 'Trojan'],
    description: '标准通用订阅格式，完美兼容 Windows、macOS、iOS、Android、Linux 等全平台主流工具，不捆绑专有私有客户端。',
    bgColor: '#F47A00',
    textColor: '#FFFFFF',
    badgeText: 'APP COMPATIBLE',
    iconName: 'devices',
  },
  {
    number: '03',
    title: '日常够用',
    subtitle: '满足高频学习、娱乐与工作场景',
    highlightList: ['影音流媒体', '社交媒体', 'AI 生产力工具', '海外优质网站'],
    description: '拒绝虚假夸大宣传，坚持提供真实充足的带宽与高可用节点，日常刷推、查论文、看 4K、调用 ChatGPT 丝滑顺畅。',
    bgColor: '#4F9E00',
    textColor: '#FFFFFF',
    badgeText: 'DAILY POWERFUL',
    iconName: 'zap',
  },
  {
    number: '04',
    title: '简单上手',
    subtitle: '新手 3 分钟即可完成从注册到连接',
    highlightList: ['注册账号', '挑选套餐', '一键导入订阅', '开启代理连接'],
    description: '告别繁琐的手动配置参数，控制台提供一键复制订阅链接与多客户端图文教程，零基础小白也能迅速开启加速之旅。',
    bgColor: '#FFD629',
    textColor: '#17131F',
    badgeText: 'EASY START',
    iconName: 'sparkles',
  },
];
