---
title: 智能体（Agent）产品收费方案调研
---
> 📊 网页版（商务简约风单页）：[pricing.html](/ai-frontier-kb/pricing.html)

# 智能体（Agent）产品收费方案调研

> 调研日期：2026-11-06 ｜ 数据为**快照价**，订阅前以官方页面为准
> "智能体"此处分两类：**通用 Agent 订阅产品**（ChatGPT/Claude/Gemini/Grok/Manus 及国产对标）与 **企业级 Agent 构建平台**（Copilot Studio/Agentforce/扣子等）

## 一、收费模式速览

| 模式 | 说明 | 代表 |
|---|---|---|
| 订阅分档 | 月费换使用额度倍数（×2/×5/×20），不承诺具体 token 数 | ChatGPT、Claude、Gemini、Grok |
| 积分制 | 每次任务扣积分，复杂任务扣更多 | Manus、扣子专业版 |
| 按结果付费 | 按"成功对话/任务"计费，不按 token | Salesforce Agentforce |
| 消息量计费 | 月费含 N 条消息，超额按条 | Copilot Studio |
| 资源点/算力点 | 平台内统一货币，模型/插件/知识库分别定价 | 扣子 |

---

## 二、国外通用 Agent 订阅

### OpenAI ChatGPT

| 档位 | 月费（US） | 备注 |
|---|---|---|
| Free | $0 | 基础模型，额度受限 |
| Go | — | 仅在印度等市场测试（₹399/月量级），未全球铺开 |
| Plus | $19.99 | 主力档；曾因 Astra 算力压力暂停新订阅 |
| Pro | $200 | 约 10× Plus 额度；模型全家桶 + 深度研究 |
| Pro Max | $500？ | **传闻**（TestingCatalog 2026-09-24 爆料），未官宣 |
| Business / Enterprise | $30/人起 / 定制 | |

来源：[openai.com/chatgpt/pricing](https://openai.com/chatgpt/pricing/)（Pro Max 传闻经 [钛媒体 2026-09-24](https://www.tmtpost.com/agent/ai-article?id=20559)，**官方宣称与传闻分开**）

### Anthropic Claude

| 档位 | 月费（US） | 备注 |
|---|---|---|
| Free | $0 | |
| Pro | $20 | |
| Max 5× | $100 | |
| Max 20× | $200 | 编码/重度用户，含 Claude Code |
| Team Standard / Premium | $30 / $150 每人 | 年付价更低 |
| Enterprise | 定制 | |

来源：[anthropic.com/pricing](https://www.anthropic.com/pricing)（经 [blakecrosley.com 2026-09-03 核验](https://blakecrosley.com/zh-Hans/blog/codex-vs-claude-code-2026)）

### Google Gemini

| 档位 | 月费（US） | 备注 |
|---|---|---|
| Free | $0 | 2026-10-09 起仅限 Flash-Lite 模型 |
| AI Plus | $4.99 | 2× 免费额度 + 400GB 存储 |
| AI Pro | $19.99 | Gemini 4 Argon（10-13 GA）+ 1M 上下文 + 5TB |
| AI Ultra 5× | $99.99 | 5× Pro 额度 + Gemini Agent（美区）+ Flow 10,000 积分 |
| AI Ultra 20× | $199.99 | 20× Pro + Deep Think + Flow 25,000 积分 |

来源：[one.google.com/ai](https://one.google.com/ai)（经 [TierFacts 2026-10-20 逐档读价](https://tierfacts.com/pricing/google-ai)、[aipricecompare.org 2026-10-26](https://aipricecompare.org/providers/gemini.html)）

### xAI Grok

2026-10-12 起改版为 **The X Subscription**，SuperGrok 系列对老用户保留、新用户不可购：

| 档位 | 月费（US） | 备注 |
|---|---|---|
| Free | $0 | 限额 Chat + 图片 |
| Plus | $8 | 带 X 认证标，轻度 AI 使用 |
| Premium | $30 | 含原 SuperGrok + Cursor Pro + X Premium+（原合计 $90） |
| Super | $100 | |
| Ultra | $200 | 取代原 SuperGrok Heavy（$300） |

付费档含 API 入口但用量单独计费。来源：[grok.com/plans](https://grok.com/plans)（经 [gravity.fast 2026-10-22 逐档读价](https://gravity.fast/blog/grok-pricing-explained/)）

### Manus（通用 Agent 代表作）

| 档位 | 月费 | 积分 | 说明 |
|---|---|---|---|
| Free | $0 | 300/日 | |
| Standard | $20 | 4,000 | |
| Customizable | $40 | 8,000 | |
| Extended | $200 | 40,000 | |
| Team | $40/用户 | — | 最低 2 席 |

复杂任务单次消耗 500–900 积分；年付省约 17%。来源：[manus.im/pricing](https://manus.im/pricing)（经 [getaiperks.com 2026-04-26 整理](https://www.getaiperks.com/zh/ai/manus-ai-pricing)）

---

## 三、企业级 Agent 平台（国外）

### Microsoft Copilot Studio

| 项目 | 价格 | 备注 |
|---|---|---|
| 基础包 | $200/月 | 含 25,000 条消息 |
| 超额消息 | $0.01/条 | |

来源：[microsoft.com Copilot Studio 定价](https://www.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-studio#Pricing)

### Salesforce Agentforce

| 项目 | 价格 | 备注 |
|---|---|---|
| Flex Credits | $2/次成功对话 | 按结果付费的行业标杆；额度包年约 $25,000 起 |

来源：[salesforce.com Agentforce](https://www.salesforce.com/agentforce/pricing/)

### Google Vertex AI Agent Builder / Agentspace

按底层模型 token + 平台使用费组合计费，Agentspace 另有按用户席位报价（约 $30–45/用户/月区间，**未核验到当期官方数字，以页面为准**）。来源：[cloud.google.com Vertex AI 定价](https://cloud.google.com/vertex-ai/generative-ai/pricing)

---

## 四、国内 Agent 平台

### 字节扣子 Coze（专业版）—— 资源点制

| 项目 | 价格 |
|---|---|
| 免费额度 | 每日 500 资源点 |
| 资源包 | ¥110 = 110,000 点（约 ¥0.001/点） |
| 智能体调用 | 2 点/次（≈¥0.002/次） |
| 插件调用 | ¥0.01/次 |
| 知识库存储 | 免费 10GB，超额 ¥1/GB/月（或 1.5 点/GB/小时） |

来源：[coze.cn 定价](https://www.coze.cn/pricing)（经 [扣子专业版计费规则官方公众号文档](http://mp.weixin.qq.com/s?__biz=MjM5MTk2NjU3MQ==&mid=2247484541&idx=1&sn=8683acf1294c1d7dc31db5923d8bfb1b) 整理）

### 扣子空间（Agent 成品，对标 Manus）

2025-04-19 发布时全量免费，借免费策略直接卡位 Manus（当时 Manus 收费 $39 起）。**当前是否已转付费未核验到官方页面，以 [coze.cn](https://www.coze.cn) 当期为准**。来源：[扣子空间发布报道](http://mp.weixin.qq.com/s?__biz=MzU0MzkwMzQ5NQ==&mid=2247513536&idx=1&sn=1f4f62fd278a14dd407c63f8062e00e0)

### Dify（开源自托管 + 云服务）

| 档位 | 月费 | 备注 |
|---|---|---|
| 开源自托管 | 免费 | 模型 token 费自理 |
| Cloud Professional | $59 | |
| Cloud Team | $159 | |
| Enterprise | 定制 | |

来源：[dify.ai/pricing](https://dify.ai/pricing)

### 其他国内平台

| 平台 | 模式 | 状态 |
|---|---|---|
| 腾讯元器 | 免费 + 流量扶持 | 官方定价页未检索到明确收费档（2026-11-06），写"—" |
| 百度千帆 AppBuilder | 按底层模型 token + 应用发布免费 | [qianfan 平台](https://cloud.baidu.com/product/wenxinworkshop) |
| 阿里百炼 | 按模型 token；智能体编排本身不收平台费 | [百炼](https://bailian.console.aliyun.com/) |
| 讯飞星火智能体 | — | 未核验，以 [xinghuo.xfyun.cn](https://xinghuo.xfyun.cn/) 为准 |

---

## 五、官方定价链接汇总

| 产品 | 官方定价页 | 检索日期 |
|---|---|---|
| ChatGPT | https://openai.com/chatgpt/pricing/ | 2026-11-06 |
| Claude | https://www.anthropic.com/pricing | 2026-11-06 |
| Gemini | https://one.google.com/ai | 2026-11-06 |
| Grok | https://grok.com/plans | 2026-11-06 |
| Manus | https://manus.im/pricing | 2026-11-06 |
| Copilot Studio | https://www.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-studio#Pricing | 2026-11-06 |
| Agentforce | https://www.salesforce.com/agentforce/pricing/ | 2026-11-06 |
| 扣子 Coze | https://www.coze.cn/pricing | 2026-11-06 |
| Dify | https://dify.ai/pricing | 2026-11-06 |
| 腾讯元器 | https://yuanqi.tencent.com/ | 2026-11-06（未检索到收费档） |

> 对比与差异分析见 [AI 服务定价对比与差异分析](/economics/02-comparison-analysis)
