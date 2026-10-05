export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqList: FAQItem[] = [
  {
    id: 'what-is-xsus',
    question: 'XSUS 是什么？',
    answer: 'XSUS（十八线小机场）是一个专为中文互联网用户打造的高性价比网络加速服务平台。我们提供覆盖香港、台湾、日本、新加坡、美国等多地区的优质节点订阅，帮助用户快速、稳定地连接海外网站、学术资源、流媒体及各类 AI 生产力工具。',
    category: '基础了解',
  },
  {
    id: 'is-xsus-vpn',
    question: 'XSUS 是 VPN 吗？',
    answer: '严格来说，XSUS 提供的是基于代理协议（如 Shadowsocks / Vmess / Trojan 等）的机场加速订阅节点，而非传统的单机全流量 VPN。配合 Clash 或 Shadowrocket 等分流客户端，XSUS 能够实现智能规则分流：国内网站直接访问不耗费流量，海外网站才走节点加速，速度更快且更省电。',
    category: '基础了解',
  },
  {
    id: 'what-is-airport',
    question: '机场是什么意思？',
    answer: '在网络加速领域，“机场”是指提供多节点代理服务器订阅服务的平台（由于早期 Shadowsocks 客户端图标为纸飞机，因此衍生出“机场”这一通俗简称）。用户购买订阅后，只需将订阅链接导入客户端，就能一键获取大量不同地区的服务器线路。',
    category: '基础概念',
  },
  {
    id: 'support-clash',
    question: 'XSUS 支持 Clash 吗？',
    answer: '完美支持！XSUS 兼容包括 Clash Verge、Clash for Windows、Clash Meta (Mihomo)、Clash for Android 等在内的所有主流 Clash 内核及衍生版本，控制台提供一键导入与订阅转换。',
    category: '客户端兼容',
  },
  {
    id: 'support-shadowrocket',
    question: 'XSUS 支持 Shadowrocket (小火箭) 吗？',
    answer: '支持。在 iOS 苹果手机或 iPad 上的 Shadowrocket 中，你只需点击 XSUS 用户中心的“一键导入小火箭”，或直接扫描二维码/复制订阅链接，即可一秒完成全部节点的同步与自动更新。',
    category: '客户端兼容',
  },
  {
    id: 'node-regions',
    question: 'XSUS 有哪些节点地区？',
    answer: 'XSUS 核心节点覆盖：🇭🇰 中国香港（低延迟直连）、🇹🇼 中国台湾（华语影音）、🇯🇵 日本（大带宽东京机房）、🇸🇬 新加坡（东南亚枢纽）、🇺🇸 美国（全球云与AI服务）等主流热门地区，满足多样化的地域访问需求。',
    category: '节点线路',
  },
  {
    id: 'how-to-use',
    question: 'XSUS 怎么使用？',
    answer: '仅需简单四步：① 注册 XSUS 账号；② 在官网选购适合的月付/季付/年付套餐；③ 在用户中心复制你的专属订阅链接并导入客户端；④ 选择节点并开启系统代理，即可开始高速浏览。',
    category: '使用教程',
  },
  {
    id: 'suitable-for-chatgpt',
    question: 'XSUS 适合 ChatGPT / Claude 等 AI 工具吗？',
    answer: '非常适合。XSUS 针对 OpenAI、Claude、Gemini、Midjourney 等 AI 平台的域名进行了针对性规则分流优化，推荐使用日本、新加坡或美国原生节点，避免频繁风控提示，保障问答对话连贯顺畅。',
    category: '场景体验',
  },
  {
    id: 'difference-vpn-airport',
    question: '机场和传统 VPN 有什么区别？',
    answer: '传统 VPN 通常是全局虚拟私有网络，所有流量必须强制经过服务器，导致访问国内微信、淘宝等极慢且耗电；而现代机场服务配合规则客户端，拥有强大的分流能力，只加速被墙或海外特定网址，国内流量直连秒开，兼顾速度、省电与隐私。',
    category: '技术对比',
  },
  {
    id: 'beginner-choose',
    question: '新手怎么选择适合自己的机场套餐？',
    answer: '如果只是日常查阅学术资料、看推文、偶尔使用 AI 工具，推荐选择入门套餐（80G/月）；如果经常看 YouTube 4K 视频、Netflix 追剧或重度使用 AI 生产力工具，强烈推荐最具性价比的「标准套餐」（220G/月）；如果是家庭多设备或团队协同，则建议选择「畅享套餐」。',
    category: '套餐选购',
  },
  {
    id: 'supported-devices',
    question: 'XSUS 支持哪些设备？',
    answer: 'XSUS 支持 Windows PC、Apple Mac (macOS)、iPhone / iPad (iOS)、Android 安卓手机/平板、Linux 系统以及家用软路由 OpenWrt 设备。同一个套餐支持多台设备同时在线使用。',
    category: '设备支持',
  },
  {
    id: 'how-to-import-sub',
    question: '订阅链接怎么导入客户端？',
    answer: '登录 XSUS 用户中心后，在「仪表盘」中找到「一键订阅」按钮。你可以选择直接调用已安装的客户端（如 Clash / Shadowrocket），也可以复制订阅 URL，手动粘贴到客户端的「配置/订阅/Profiles」添加栏中并点击更新保存即可。',
    category: '使用教程',
  },
];
