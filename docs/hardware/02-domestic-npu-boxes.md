---
title: 国产芯片边缘 AI 盒子
description: 昇腾 / 算能 / RK3588 / 爱芯 / 地平线——编解码之王、端侧大模型真相、生态成熟度
---

# 国产芯片边缘 AI 算力盒子/开发板规格对比

> 检索与核实日期：2026-11-03 ｜ 币种：未注明者为人民币（¥）
> 国产 NPU 的 TOPS 普遍为 INT8 稠密或 INT4 口径，跨厂商比较时务必看精度列。

## 品类概览（约 200 字）

国产边缘 AI 盒子分四派：**华为昇腾**（CANN 生态，行业与开发者两头吃）、**算能 SOPHON**（安防视频分析起家，编解码路数最猛，BM1688 开始支持大模型）、**瑞芯微 RK3588 生态**（开源社区最繁荣，6 TOPS NPU 胜在便宜量大）、**爱芯/地平线**（视觉算法公司下场，芯片+算法打包）。与 NVIDIA 系相比，国产盒子的共同特点是：单颗 TOPS 不高（6–72）、内存带宽小（几十 GB/s 量级，RK3588 仅 17 GB/s 级）、大模型能力靠 INT4 量化和"芯片+编译器"硬撑；真正能干活的场景是**视频结构化、多路推理、端侧小模型**。2025–2026 的新变量是 BM1688、爱芯 AX650N、地瓜 S600 开始把"端侧 7B 大模型"作为卖点。

---

## 1. 华为昇腾系列

### 1.1 Atlas 200I DK A2（开发者套件）

| 字段 | 规格 |
|---|---|
| AI 算力 | **20 TOPS INT8**（昇腾 310B，官方口径） |
| CPU | 8 核 Arm（A55 系，官方未在商城页标注型号） |
| 内存 | 4GB LPDDR4x（—带宽未公开） |
| 视频编解码 | 支持 20 路视频解码（京东商品标题口径） |
| 网络/接口 | 千兆网口、USB、MIPI 摄像头接口、40Pin GPIO |
| 操作系统 | openEuler / Ubuntu + **CANN** |
| 大模型能力 | 官方定位视觉/语音推理，无 LLM 宣称 |
| 参考价格 | 华为云商城第三方（全爱科技 QAK 版）**¥1199**；淘宝第三方 ¥1369–4443 |

来源：[华为云商城 listing](https://marketplace.huaweicloud.com/contents/ab856ec3-07c5-4d7f-af48-d443e3e1a7a5)、[京东商品标题](https://www.jd.com/)（2026-11-03 检索）

### 1.2 Atlas 500 A2 / Atlas 500 智能小站（边缘行业站）

边缘侧整机（防尘防水、宽温），面向园区/交通/电力场景。**官方规格页本次未抓取成功（数据缺口）**；第三方电商参考：Atlas 500 A2 淘宝约 ¥10070，老款 Atlas 500（昇腾 310）约 ¥13999。算力与路数以华为企业业务官网当期彩页为准。

## 2. 算能 SOPHON（SE 系列微服务器）

### 2.1 SE7（BM1684X）—— 视频分析主力

| 字段 | 规格 |
|---|---|
| AI 算力 | **32 TOPS INT8 / 16 TFLOPS FP16（BF16）/ 2 TFLOPS FP32**（官方） |
| CPU | 8 核 Arm Cortex-A53 @ 2.3GHz |
| 内存 | 16GB DDR4 + 64GB eMMC |
| 视频编解码 | **官方：32 路全高清解码 + 12 路全高清编码**；实测可同析 16 路 1080P |
| 网络/接口 | 双千兆、HDMI、USB、Type-C 调试；工业版可选 Wi-Fi/4G/5G |
| 功耗 | 17W 级（迷你款） |
| 尺寸形态 | 迷你款 104.5×85×39.5mm（口袋级）；另有工业级 IP40 / 宽温 −40~60℃ 版本 |
| 操作系统 | Linux + **SOPHON SDK（BMNNSDK）** |
| 大模型能力 | BM1684X 支持 Transformer 类模型 INT8/FP16 推理；7B LLM 需高度量化，非官方主推 |
| 参考价格 | 官方商城在线购买（sophon.cn 未公开标价）；第三方集成商整机约数千元级 |

来源：[SOPHON 官网产品页](https://cloud.sophgo.com/developer/cloudSpace/index?lang=CN)、[物联网世界 深算工场报道](https://mobile.iotworld.com.cn/View.aspx/News-0122e2e84fe69137)、[迪维欧 DG-638 整机](https://www.diveo.com.cn/?post_type=products&page_id=9582)（2026-11-03 检索）

### 2.2 SE9（BM1688 / CV186AH）—— 大模型新推手

| 字段 | 规格（SE9 16 路款） |
|---|---|
| AI 算力 | **BM1688：32 TOPS INT8 / 16 TFLOPS FP16（官方口径）**；部分资料标 16 TOPS INT8，注意区分精度；SE9-8（CV186AH）：8 TOPS |
| CPU | 8 核 Arm Cortex-A53 @ 1.6GHz |
| 内存 | 8GB 或 16GB + 64GB eMMC |
| 视频编解码 | **官方：16 路全高清智能分析 + 16 路解码 + 10 路编码** |
| 网络/接口 | 双千兆、双 USB3.0、HDMI、Type-C、**CAN/RS485/RS232/DI/DO**（工业向） |
| 功耗 | 15W 级；机身厚 30mm 嵌入式 |
| 操作系统 | Linux + SOPHON SDK |
| 大模型能力 | 算能官方将 BM1688 定位"支持大模型推理"的新一代 TPU；7B LLM INT8 量化可跑（社区口径，速度待实测数据） |
| 参考价格 | 官网在线购买（未公开标价） |

来源：[SOPHON 官网](https://sophon.cn/support/issues/20/23.html)、[物联网世界](https://mobile.iotworld.com.cn/View.aspx/News-0122e2e84fe69137)（2026-11-03 检索）

### 2.3 SE5（BM1684）/ SE8 多芯服务器（简列）

- **SE5-16**（BM1684）：上一代视频分析盒，16 路 1080P 分析档位，sophon-demo 有逐模型实测（SCRFD INT8 4batch 约 5ms/张）。算力官方口径 17.6 TOPS INT8（本次未抓到官网页，**待核实**）。
- **SE8**：x86 主机 + 多颗 BM1684X 板卡（288 路 / 416 路视频分析型号），面向机房级安防。

来源：[sophon-demo 官方仓库](https://gitcode.com/sophgo/sophon-demo/tree/release/sample/SCRFD)（2026-11-03 检索）

## 3. 瑞芯微 RK3588 / RK3576 生态盒子

| 字段 | RK3588 代表整机 | RK3576 新品 |
|---|---|---|
| 代表产品 | Orange Pi 5 Plus（淘宝 ¥1420 起）、Radxa ROCK 5B、Firefly、官方 EVB | 明远智睿等工控板（CAM-3576Q38 约 ¥1738） |
| AI 算力 | **6 TOPS INT8 NPU**（三核架构，官方） | **6 TOPS INT8**（官方口径，第三方板卡宣传一致） |
| CPU | 4×Cortex-A76 + 4×Cortex-A55 | 8 核（Cortex-A72/A53 组合，第三方资料口径） |
| GPU | Mali-G610 MP4 | Mali 系 |
| 视频编解码 | **8K@60 H.265/VP9 解码、8K@30 编码**（官方） | 8K 解码（板卡宣传"8K 120 编解码"，以瑞芯微官方为准） |
| 网络 | 双千兆（Orange Pi 5 Plus） | 双千兆 |
| 操作系统 | Android / Debian / Armbian + **RKNNToolkit** |
| 大模型能力 | 社区：RKLLM 可跑 1.5B–3B 小模型（Q4 量化），7B 需要姿态管理预期 |
| 参考价格 | 板卡 ¥600–1500；整机 ¥1400–2500 | 开发板 ¥68 起（定金/裸板价，需核）至 ¥1700+ |

来源：[淘宝 8K 主板类目页](https://guangtao.taobao.com/product-98f50bda6c9ebb3c1f04a61fbf242585b3fef2c491b31c188834ba9b4d7c5001.html)（2026-07-28 快照，2026-11-03 检索）

**点评**：RK3588 是"最便宜的多路视频 AI 盒子"，生态（Armbian 等）最成熟；但 6 TOPS 和十几 GB/s 内存带宽决定了它不适合大模型。

## 4. 爱芯元智 AX 系列（以 Sipeed M4N-Dock 为整机代表）

| 字段 | 规格 |
|---|---|
| AI 算力 | **AX650N：72 TOPS INT4 / 18 TOPS INT8**（官方口径） |
| CPU | 8 核 Cortex-A55 @ 1.7GHz |
| 内存 | 64bit LPDDR4x（容量随配置） |
| 视频编解码 | **8K@60 解码**（官方） |
| 网络/接口 | 千兆、USB、MIPI、M.2 |
| 操作系统 | Linux + **Pulsar 工具链** |
| 大模型能力 | 爱芯官方推动 AX650N 跑端侧多模态/大模型（视觉为主）；LLM 能力社区有实验，无官方数字 |
| 参考价格 | M4N-Dock 开发板约 ¥1000+ 档（官方店铺价格本次未抓取，**数据缺口**） |

来源：[Sipeed 官方 Wiki（M4N-Dock）](https://github.com/sipeed/sipeed_wiki/blob/main/docs/hardware/zh/maixIV/m4ndock/m4ndock.md)、[UNIStream README（AX650N 指标汇总）](https://github.com/UNIStream-Server/UNIStream/blob/main/README.md)（2026-11-03 检索）

## 5. 地平线（Horizon Robotics / 地瓜机器人）

| 产品线 | 规格要点 |
|---|---|
| 旭日 X3（RDK X3） | **5 TOPS BPU**；开发板数百元级（京东 X3M 模组在售），生态 OpenExplorer |
| 旭日 X5（RDK X5，2025 量产） | 10 TOPS 级 BPU，面向机器人+视觉（官方口径） |
| 地瓜机器人 S600 | **560 TOPS INT8**（机器人主控，2026 年发布口径），与黑芝麻等平台竞争机器人大脑 |
| 旭日 X7 | 官方预告 2026 年底推出 |

来源：[36 氪报道](https://www.36kr.com/p/3757535175983876)、[京东 X3M 商品页](https://ic-item.jd.com/10038884242673.html)（2026-11-03 检索）

## 6. 其他国产边缘产品（简列）

- **晶晨 A311D2（Khadas VIM4 等）**：5 TOPS NPU 档，电视盒子血统，社区活跃，AI 为附加能力，本次不展开。
- **寒武纪思元 220（MLU220）**：早期边缘推理卡（8 TOPS 档），市场声量已小。
- **百度 EdgeBoard**：基于赛灵思 Zynq 的方案，legacy，已被自研昆仑/飞桨一体机路线替代。
- **云天励飞 DeepEdge10 大模型推理盒**：官方主打"自研大模型推理"，本次未抓取到公开规格页（**数据缺口**）。
- **海康/大华/宇视行业 AI 盒**：规格（路数/算力）不公开报价体系，需走行业渠道询价（**数据缺口**，选型时直接要彩页）。
- **全志科技**：端侧 AI SoC 以低功耗语音/视觉为主，无突出算力盒子单品。

---

## 国产芯片对比总表

| 芯片/平台 | TOPS（口径） | 内存带宽 | 视频编解码 | 功耗 | 生态工具链 | 生态成熟度 | 参考价位 |
|---|---|---|---|---|---|---|---|
| 昇腾 310B（Atlas 200I DK A2） | 20 INT8 | — | 20 路解码（商品页口径） | ~25W | CANN | ★★★★ | ¥1199 |
| BM1684X（SE7） | 32 INT8 / 16 FP16 | — | **32 解 + 12 编** | 17W | SOPHON SDK | ★★★★ | 数千元（整机） |
| BM1688（SE9） | 32 INT8 / 16 FP16 | — | 16 分析/16 解/10 编 | 15W | SOPHON SDK | ★★★ | 数千元（整机） |
| RK3588 | 6 INT8 | ~17 GB/s 级 | 8K60 解/8K30 编 | 5–20W | RKNNToolkit | ★★★★★ | ¥600–2500 |
| AX650N | 72 INT4 / 18 INT8 | — | 8K60 解 | ~15W | Pulsar | ★★★ | ¥1000+ |
| 旭日 X3 / X5 | 5 / 10 BPU | — | 1080P 多路 | 5–10W | OpenExplorer | ★★★ | 数百–数千 |
| 地瓜 S600 | 560 INT8 | — | — | 数十 W | 地瓜 RDK | ★★ | 机器人整机配套 |

**关键发现**：
1. **编解码之王是算能**（BM1684X 32 路解码 + 12 路编码），安防视频结构化首选。
2. **"端侧大模型"宣传最热的是 BM1688 与爱芯 AX650N**，但社区实测 tok/s 数据稀缺，采购前务必索样验证。
3. **生态最省心是 RK3588**（文档/社区/系统镜像最全），华为 CANN 上限最高但学习曲线陡。
4. 与 NVIDIA Jetson 同价位相比，国产盒子胜在**视频路数/功耗比与本土服务**，输在**大模型生态与算力透明度**。
