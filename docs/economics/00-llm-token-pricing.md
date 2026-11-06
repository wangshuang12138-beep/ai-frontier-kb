---
title: 大模型 API Token 计费方案调研
---
> 📊 网页版（商务简约风单页）：[pricing.html](https://wangshuang12138-beep.github.io/ai-frontier-kb/pricing.html)

# 大模型 API Token 计费方案调研

> 调研日期：2026-11-06 ｜ 数据为**快照价**，采购/选型前以厂商当期页面为准
> 计价单位统一为**每百万 tokens（1M tokens）**，输入/输出分开；美元为国际站口径，人民币为国内站口径（未做汇率折算，避免引入误差）
> 检索纪律：每个关键数字附来源与检索日期；官方口径与第三方核验分开标注

## 一、计费模式速览

| 模式 | 说明 | 代表厂商 |
|---|---|---|
| 纯按量 | 输入/输出分价，按实际消耗计费 | OpenAI、Anthropic、Kimi、MiniMax |
| 按输入长度阶梯 | 输入越长单价越高（如 ≤32K / >32K 两档） | 豆包 1.6、GLM-5.1、GPT-5.5（>272K 加价） |
| 峰谷分时 | 高峰时段加价、非高峰半价 | DeepSeek（业界唯一） |
| 缓存分层 | 缓存命中价 = 输入价的 2%–10% | DeepSeek、OpenAI、Anthropic、Kimi、豆包 |
| Batch 折扣 | 异步批量调用 5 折 | Anthropic、Gemini、阿里百炼 |
| 订阅套餐 | 月度 Token Plan，批发价换零售价 | 腾讯云 TokenHub、MiniMax Token Plan |

---

## 二、国外厂商

### OpenAI

| 模型 | 输入 | 输出 | 缓存输入 | 备注 |
|---|---|---|---|---|
| GPT-5.6 Sol（旗舰） | $4.00 | $20.00 | $0.40 | 促销价至少至 2026-11-21 |
| GPT-5.6 Terra | $2.00 | $12.00 | — | |
| GPT-5.6 Luna | $0.20 | $1.20 | — | 轻量档 |
| GPT-5.5 | $4.00 | $24.00 | $0.40 | >272K 上下文阶梯涨至 $8/$36 |

来源：官方定价页 [openai.com/api/pricing](https://openai.com/api/pricing/)（经 [elser.ai 2026-09-03 整理](https://www.elser.ai/zh/news/gpt-5-6-pricing)、[evolink.ai 2026-04-26](https://evolink.ai/zh/blog/gpt-5-5-api-pricing-guide-2026) 交叉核验）

### Anthropic（Claude）

| 模型 | 输入 | 输出 | 缓存读 | 备注 |
|---|---|---|---|---|
| Claude Fable 5.1 | $10.00 | $50.00 | $0.25 | 最高档 |
| Claude Opus 5.5 | $4.00 | $20.00 | $0.20 | 旗舰（2026-10-07 缓存降价） |
| Claude Opus 5 | $5.00 | $25.00 | — | 上代旗舰 |
| Claude Sonnet 5.5 / 5 | $2.00 | $10.00 | $0.10 | 主力档 |
| Claude Haiku 5.5 | $0.10 | $0.50 | — | 轻量 |
| Claude Haiku 4.5 | $1.00 | $5.00 | — | |

Batch API 一律半价。来源：[anthropic.com/pricing](https://www.anthropic.com/pricing)（经 [benchlm.ai 2026-11-04 同步](https://benchlm.ai/anthropic/api-pricing)）

### Google（Gemini）

| 模型 | 输入 | 输出 | 备注 |
|---|---|---|---|
| Gemini 4 Argon | $2.00 | $10.00 | 发布促销价，至 2026-11-30 |
| Gemini 3.1 Pro | $2.00 | $12.00 | |
| Gemini 3.8 Flash | $0.75 | $3.75 | 半价促销至 2026-12-31 |
| Gemini 3 Flash Preview | $0.50 | $3.00 | |
| Gemini 2.5 Flash-Lite | $0.10 | $0.40 | |

Batch API 5 折；上下文缓存最高省 90%。来源：[ai.google.dev/gemini-api/docs/pricing](https://ai.google.dev/gemini-api/docs/pricing)（经 [costgoat.com 2026-10-19](https://costgoat.com/pricing/gemini-api) 整理）

### xAI（Grok）

| 模型 | 输入 | 输出 | 备注 |
|---|---|---|---|
| grok-4.7（<200K 上下文） | $2.00 | $6.00 | 订阅含 API 入口但用量单独按标准价计费 |

来源：[x.ai/api](https://x.ai/api)（经 [gravity.fast 2026-10-22 读价](https://gravity.fast/blog/grok-pricing-explained/)）

---

## 三、国内厂商

### DeepSeek（深度求索）—— 唯一的峰谷分时计价

| 模型 | 非高峰（输入/输出） | 高峰（输入/输出） | 缓存命中 |
|---|---|---|---|
| deepseek-v4-pro | $0.66 / $1.98 | $1.32 / $3.96 | 非高峰 $0.02 级 |
| deepseek-flash | $0.15 / $0.60 | $0.30 / $1.20 | 非高峰 $0.003 |

- 高峰定义：北京时间周一至周五 09:00–12:00、14:00–18:00（法定节假日除外），非高峰半价
- Search/Fetch 工具调用：每 1,000 次成功请求 $0.75
- 来源：[api-docs.deepseek.com/quick_start/pricing](https://api-docs.deepseek.com/zh-cn/quick_start/pricing)（经 [datalearner.com 2026-11-01 核验](https://www.datalearner.com/blog/deepseek-v4-api-pricing-peak-off-peak)）

### Kimi（月之暗面）

| 模型 | 输入 | 输出 | 缓存命中 |
|---|---|---|---|
| Kimi K3.1 Pro（1M 上下文） | $2.00 | $10.00 | $0.20 |
| Kimi K3 | ¥20.00 | ¥100.00 | ¥2.00 |
| Kimi K2.6 / K2.7 Code | $0.95 | $4.00 | — |

注意：K2 系列 2026-10-31 起对新用户关闭，计划 2026 年 12 月底退役。来源：[platform.moonshot.cn/docs/pricing](https://platform.moonshot.cn/docs/pricing)（经 [benchlm.ai 2026-10-28](https://benchlm.ai/moonshot/api-pricing)、[tokenprice.rolechatai.com 2026-04-20](https://tokenprice.rolechatai.com/zh/api-pricing)）

### 阿里（百炼平台 / 通义千问）

| 模型 | 输入 | 输出 | 备注 |
|---|---|---|---|
| qwen3.8-max | ¥12.00 | ¥36.00 | ≤1M 上下文，Batch 半价 |
| qwen3-max | ¥2.50 | ¥10.00 | |
| qwen-plus | ¥0.80 | ¥2.00 | 近似值，以页面为准 |
| qwen-turbo | ¥0.30 | ¥0.60 | |
| qwen-long | ≈¥0.50 | ≈¥2.00 | 长上下文 |

新用户每个模型 100 万 tokens 免费（90 天）。来源：[help.aliyun.com 模型定价](https://help.aliyun.com/zh/model-studio/model-pricing)（官方文档，2026-07-28 更新；经 [开发者社区 2026-10-15](https://developer.aliyun.com/article/1771148) 整理）

### 智谱（BigModel 平台）

| 模型 | 输入 | 输出 | 缓存命中 | 备注 |
|---|---|---|---|---|
| GLM-5.3（1M 上下文旗舰） | ¥8.00 | ¥28.00 | ¥2.00 | 2026-08-21 上架 |
| GLM-5.2 | ¥8.00 | ¥28.00 | ¥2.00 | |
| GLM-5.3-Flash | ¥0.80（限时五折 ¥0.40） | ¥2.80（五折 ¥1.40） | 五折 ¥0.115 | 原生多模态 |
| GLM-4.6 | ≈$0.43 | ≈$1.74 | — | 第三方核验价，以官方页为准 |
| GLM-4.7-Flash | 免费 | 免费 | 免费 | 200K 上下文 |

来源：[open.bigmodel.cn/pricing](https://open.bigmodel.cn/pricing)（官方；GLM-4.6 美元价经 [aiapiprices.com 2026-06-27 核验](https://aiapiprices.com/glm-4-6-pricing/)）

### 字节（火山方舟 / 豆包）

| 模型 | 输入 | 输出 | 缓存命中 |
|---|---|---|---|
| Doubao-Seed-Evolving（Coding & Agent 旗舰） | ¥6.00 | ¥30.00 | ¥1.20 |
| Doubao-Seed-2.1 Pro | ¥6.00 | ¥30.00 | ¥1.20 |
| Doubao-Seed-1.6（0–32K 输入区间） | ¥0.80 | ¥8.00 | — |

- 1.6 首创**按输入长度区间统一定价**：思考/多模态/基础模型同价，≤32K 输入 + ≤200 token 输出的"特惠区"输出降至 ¥2
- 首次开通语言模型每个模型赠 50 万 tokens
- 来源：[volcengine.com 豆包定价](https://www.volcengine.com/product/doubao)（官方；[2025-06-11 发布报道](https://wallstreetcn.com/articles/3748910)）

### 腾讯（混元 / TokenHub）

| 模型 | 输入 | 输出 | 缓存命中 |
|---|---|---|---|
| 混元 Hy3（2026-07-06 发布，Apache 2.0 开源） | ¥1.00 | ¥4.00 | ¥0.25 |

**Token Plan 订阅**（月度预付费，批发价约为按量的 2–5 折）：

| 档位 | Hy 专属 | 通用（含 GLM/Kimi/MiniMax/DeepSeek） |
|---|---|---|
| Lite | ¥28 | ¥39 |
| Standard | ¥78 | ¥99 |
| Pro | ¥238 | ¥299 |
| Max | ¥468 | ¥599 |

来源：[cloud.tencent.com 混元定价文档](https://cloud.tencent.com/document/product/1729)（经 [2026-07-28 发布报道](https://bot.taobao.com/tool-today_discovery/detail/6c38f2ace1c40e04ab1ddcdc1a498476.html)、[万云信息 2026-08-28 渠道核验](https://www.wanyuna.com/post/921.html)）

### MiniMax

| 模型 | 输入 | 输出 | 缓存读取 | 备注 |
|---|---|---|---|---|
| MiniMax-M3 ≤512K（"永久五折"） | ¥3.15 | ¥12.60 | ¥0.63 | 刊例价 ¥6.30/¥25.20 |
| MiniMax-M3 >512K | ¥6.30 | ¥25.20 | ¥1.26 | 长输入加价 |
| M3.1-Flash | ¥1.00 | — | — | 轻量 |

- `service_tier=priority` 优先档按 1.5 倍计费
- 海外按量口径：M3 约 $0.30/$1.20（OpenRouter 路由价低约 21%）
- 来源：[platform.minimax.cn 定价概览](https://platform.minimax.cn/docs/pricing/overview)（官方文档，2026-11-05 快照）

### 百度（千帆平台）

百度千帆官方按"元/千 tokens"计价。第三方整理口径：ERNIE 4.5 Turbo ≈ ¥0.02/¥0.09、ERNIE Speed/Lite/Tiny 免费档存在；各档价格与换算建议以官方页为准。来源：[cloud.baidu.com 千帆定价](https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya)（经 [apirank.vip 2026-10-12](https://apirank.vip/zh/providers/baidu/) 整理，**未逐档核验，标注为待确认**）

---

## 四、官方定价链接汇总

| 厂商 | 官方定价页 | 检索日期 |
|---|---|---|
| OpenAI | https://openai.com/api/pricing/ | 2026-11-06 |
| Anthropic | https://www.anthropic.com/pricing | 2026-11-06 |
| Google Gemini | https://ai.google.dev/gemini-api/docs/pricing | 2026-11-06 |
| xAI | https://x.ai/api | 2026-11-06 |
| DeepSeek | https://api-docs.deepseek.com/zh-cn/quick_start/pricing | 2026-11-06 |
| Kimi | https://platform.moonshot.cn/docs/pricing | 2026-11-06 |
| 阿里百炼 | https://help.aliyun.com/zh/model-studio/model-pricing | 2026-11-06 |
| 智谱 BigModel | https://open.bigmodel.cn/pricing | 2026-11-06 |
| 火山方舟（豆包） | https://www.volcengine.com/product/doubao | 2026-11-06 |
| 腾讯混元 | https://cloud.tencent.com/document/product/1729 | 2026-11-06 |
| MiniMax | https://platform.minimax.cn/docs/pricing/overview | 2026-11-06 |
| 百度千帆 | https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya | 2026-11-06 |

> 对比与差异分析见 [AI 服务定价对比与差异分析](/economics/02-comparison-analysis)
