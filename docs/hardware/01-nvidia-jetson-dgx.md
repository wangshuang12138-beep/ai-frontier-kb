---
title: NVIDIA 系：DGX Spark 与 Jetson 家族
description: DGX Spark / Jetson Thor / AGX Orin / Orin NX / Orin Nano Super 全规格对比，官方口径与社区实测分开
---

# NVIDIA 系 AI 算力盒子/边缘计算平台规格对比

> 检索与核实日期：2026-11-03 ｜ 币种：未注明者为人民币（¥），美元为 $
> 数据标注规则：官方宣称与社区实测分开标注；查不到写 "—"。

## 品类概览（约 200 字）

NVIDIA 系是边缘 AI 算力盒子的事实标准：CUDA 生态无可替代，产品线从 $249 的入门开发套件一路排到 $3999 的桌面"个人超算"。2025 年两条大线：一是 **DGX Spark / RTX Spark**（GB10 Grace Blackwell 超级芯片），把 128GB 统一内存塞进桌面尺寸，主打"本地跑 200B 大模型"；二是 **Jetson Thor**（T5000/T4000 模组），2070 FP4 TFLOPS 稀疏算力瞄准机器人/物理 AI。注意一个关键概念：**官方标称的 PFLOPS/TOPS 多是 FP4 稀疏口径，而大模型 decode 速度由内存带宽决定**——DGX Spark 与 Thor 的 273 GB/s 带宽才是真实性能锚点，这正是它们跑大模型不如纸面算力好看的原因。

---

## 1. NVIDIA DGX Spark（桌面个人超算）

| 字段 | 规格 |
|---|---|
| 发布时间 | CES 2025 发布（代号 Project DIGITS），2025-03-20 开放预订，2025-10-15 正式开售 |
| AI 算力 | **1 PFLOP FP4（稀疏，官方口径，约 1000 TOPS）**；FP32 约 31 TFLOPS（官方） |
| 处理器 | GB10 Grace Blackwell 超级芯片：20 核 Arm（10×Cortex-X925 + 10×Cortex-A725），CPU-GPU 间 NVLink-C2C 600 GB/s 互联 |
| GPU | Blackwell 架构，约 6144 CUDA 核（与 RTX 5070 同核数）+ 第五代 Tensor Core |
| 内存 | 128GB LPDDR5X 统一内存（CPU/GPU 共享），**带宽 273 GB/s**（256-bit @ 9400MT/s，部分媒体测得 273–301 GB/s） |
| 存储 | 4TB NVMe（预订唯一配置）；1TB 版为华硕等伙伴机型（ASUS Ascent GX10 $2999） |
| 视频编解码 | —（媒体引擎非卖点，官方未重点标注） |
| 网络 | ConnectX-7 100GbE（机身双 QSFP 口，可双机直连），Wi-Fi 7 |
| 扩展接口 | 2×雷电5（TB5）、USB、HDMI 等 |
| 功耗 | 整机约 140W（媒体/播客口径；个别社区评测称满载更高） |
| 尺寸形态 | 迷你桌面主机（NUC 大小），标准电源供电 |
| 操作系统 | DGX OS（基于 Ubuntu Linux，预装 NVIDIA AI 软件栈 + CUDA + NIM 微服务） |
| 大模型能力 | **官方：单机可推理最高 200B 参数模型、微调 70B 模型；双机互联（256GB）可跑 405B FP4**。社区质疑点：273 GB/s 带宽下 decode 速度受限，实测 tok/s 明显低于纸面算力预期；有开发者用定制引擎在 180B 模型上跑到约 72 tok/s（播客口径，未独立验证） |
| 参考价格 | **$3999（4TB 版）**；双机 bundle $8049；国内电商现货 **¥32999 起**（部分高配近 ¥5 万） |

来源：[快科技 2025-03-20](https://news.mydrivers.com/blog/20250320.htm)、[videocardz 2025-03-19](https://videocardz.com/newz/nvidia-renames-project-digits-to-dgx-spark-mini-pc-with-gb10-grace-blackwell-superchip-to-launch-at-3999)、[陀螺科技 2025-10-20](https://www.tuoluo.cn/article/detail-10126040.html)、[腾讯新闻《微型计算机》2025-11-02](https://news.qq.com/rain/a/20251102A04HFJ00)（2026-11-03 检索）

**点评**：买它本质上是买 128GB 统一内存 + CUDA 生态 + 100GbE 出厂互联。对比 AMD Strix Halo 机型（128GB、256 GB/s），DGX Spark 带宽接近、价格高出一截，优势在软件栈与多机扩展；纯推理性价比不如 Strix Halo 系。

## 2. NVIDIA Jetson AGX Thor（机器人/物理 AI 平台）

| 字段 | 规格（开发者套件，T5000 模组） |
|---|---|
| 发布时间 | 2025-08-25 发布并全球上市（含中国） |
| AI 算力 | **2070 TFLOPS FP4（稀疏，官方）/ 1035 TFLOPS FP8（官方）**；能效较 AGX Orin 提升 3.5 倍 |
| 处理器 | 14 核 Arm Neoverse-V3AE 64 位 CPU |
| GPU | Blackwell 架构，**2560 CUDA 核 + 96 个第五代 Tensor Core**（支持 MIG、Transformer 引擎） |
| 内存 | 128GB LPDDR5X，**带宽 273 GB/s** |
| 存储 | —（载板 NVMe，官方未单列容量） |
| 视频编解码 | —（官方未单列路数） |
| 网络 | 最多 4×25GbE，另有 GbE、CAN、HDMI、DisplayPort、USB 3.2/USB-C |
| 功耗 | 40W–130W 可配置（套件整机供电 140W） |
| 尺寸形态 | 机器人载板 + 主动散热模组 |
| 操作系统 | Jetson Linux / JetPack（CUDA 全栈） |
| 大模型能力 | 官方：可实时运行 LLM、VLM、VLA（视觉-语言-动作）模型；社区实测 70B 模型权重约 35GB，闲鱼/社区称其为"最优雅本地 AI 方案"之一（非严谨测试） |
| 参考价格 | **开发者套件 $3499（约 ¥2.5 万）**；T5000 模组千片单价 $2999；T4000 模组（1536 CUDA/64 Tensor/12 核 CPU/1200 FP4 TFLOPS）同步发售。国内渠道：微雪 ¥42155、iCEasy ¥42399、淘宝第三方 ¥38599–45938 |

来源：[界面新闻 2025-08-26](https://m.jiemian.com/article/13243993.html)、[芯查查 2025-08-28](https://www.xcc.com/news/detail/5573102)、[经济观察网 2025-08-26](http://m.eeo.com.cn/2025/0826/747790.shtml)、[微软 MSN/IT之家 2025-08-26](https://www.msn.cn/zh-cn/%E6%8A%80%E6%9C%AF/%E7%A1%AC%E4%BB%B6%E5%92%8C%E8%AE%BE%E5%A4%87/%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%9C%80%E5%BC%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%8A%AF%E7%89%87-jetson-thor-%E5%8F%91%E5%B8%83-%E6%9C%80%E9%AB%98-128-gb-%E6%98%BE%E5%AD%98/ar-AA1LcwFg)、[微雪官方店](https://www.waveshare.net/shop/Jetson-AGX-Thor-Developer-Kit.htm)、[iCEasy 2026-11-02 报价](https://www.iceasy.com/product/1950144336908992513)（2026-11-03 检索）

**点评**：与 DGX Spark 同样 128GB/273 GB/s，但便宜了 $500、功耗上限更低、I/O 为机器人优化（CAN、25GbE）。2026 年 7 月 NVIDIA 又发布了 T3000/T2000 中端 Thor 模组（细节本次未抓取到官网页面，**数据缺口**）。

## 3. Jetson AGX Orin 64GB（上代旗舰，仍大量在役）

| 字段 | 规格 |
|---|---|
| 发布时间 | 2022-03 发布（2023 量产爬坡） |
| AI 算力 | **275 TOPS INT8（稀疏，官方）** |
| 处理器 | 12 核 Arm Cortex-A78AE |
| GPU | 2048 核 Ampere 架构 + 64 个 Tensor Core |
| 内存 | 64GB LPDDR5，**带宽 204.8 GB/s** |
| 存储 | 开发套件配 1TB SSD（第三方套装） |
| 网络 | GbE；载板可扩 |
| 功耗 | 15W–60W 可配置 |
| 操作系统 | JetPack（Ubuntu + CUDA） |
| 大模型能力 | 社区：可跑 7B–13B 量化模型；70B 需重度量化或 offload，体验有限 |
| 参考价格 | 官方定价 $1999 档；**京东自营 ¥15299（2025-04 促销价）**；淘宝第三方约 ¥15500；海外零售商加价明显（RobotShop CA $7735，仅供参考） |

来源：[什么值得买 2025-04-21](https://www.smzdm.com/p/146172285/)、[京东报价页](https://www.jd.com/jiage/670325386084715e40a.html)、[淘宝第三方](https://www.taobao.com/list/item/Y3JQT1hSZ2RldkVVdGZFcDhhUlZ0QT09.htm)（2026-11-03 检索）

## 4. Jetson Orin NX 16GB（Super 模式后免费提性能）

| 字段 | 规格 |
|---|---|
| AI 算力 | **157 TOPS INT8（Super 模式，官方）**；原版 100 TOPS |
| 处理器 | 8 核 Arm Cortex-A78AE |
| GPU | 1024 核 Ampere + 32 Tensor Core |
| 内存 | 16GB LPDDR5，**102.4 GB/s** |
| 功耗 | 10W–25W |
| 大模型能力 | 社区：7B Q4 可实时对话（约 10 tok/s 量级） |
| 参考价格 | 模组官方 $699 档；开发套件第三方约 ¥3000–4000（京东有"算力 157Tops"套装在售） |

来源：[京东报价页](https://www.jd.com/jiage/1320f70335d1fec3aa9e.html)（2026-11-03 检索）；TOPS 为 NVIDIA 官方 Super 模式口径。

## 5. Jetson Orin Nano Super 8GB（入门爆款，$249）

| 字段 | 规格 |
|---|---|
| 发布时间 | 2023 原款；**2024-12 Super 模式推送 + 降价至 $249** |
| AI 算力 | **67 TOPS INT8（Super 模式，官方）**；原版 40 TOPS |
| 处理器 | 6 核 Arm Cortex-A78AE |
| GPU | 1024 核 Ampere + 32 Tensor Core |
| 内存 | 8GB LPDDR5，**102 GB/s（Super 模式从 68 提至 102）** |
| 功耗 | 7W–25W |
| 大模型能力 | 官方/社区：可跑 Llama 3.1 8B、Llama 3.2 Vision 等，速度约 5–10 tok/s（社区实测口径） |
| 参考价格 | **官方 $249（套件）**；国内淘宝套装约 ¥5743，AliExpress 第三方加价明显（$756，囤货炒作，不建议） |

来源：[京东报价页](https://www.jd.com/jiage/652e279be1a8be4ab37.html)、[淘宝第三方](https://www.taobao.com/list/item/Nis1TFAzR0VpY3VuZHl0ajE3V0lUZz09.htm)、[AliExpress  listings](https://www.aliexpress.com/item/1005012061726703.html)（2026-11-03 检索）

## 6. Seeed reComputer 等第三方载板生态

Seeed（矽递）reComputer J 系列 / A 系列为 Jetson Orin 模组 + 自研载板的成品盒子，规格随所配模组（Orin Nano/NX/AGX）而定，工业级外壳与接口是卖点。**本次未逐型号抓取官网规格页（数据缺口）**，选型时以 seeedstudio.com 当期页面为准。

---

## 对比总表

| 产品 | AI 算力（官方口径） | 内存/带宽 | 功耗 | 价格（官方/在售） | 一句话定位 |
|---|---|---|---|---|---|
| DGX Spark | 1000 TOPS FP4 稀疏 | 128GB / 273 GB/s | ~140W | $3999 / 国行 ¥32999+ | 桌面个人超算，CUDA 生态 + 双机 405B |
| Jetson AGX Thor (T5000) | 2070 FP4 / 1035 FP8 TFLOPS 稀疏 | 128GB / 273 GB/s | 40–130W | $3499 / 国内 ¥3.9万–4.6万 | 机器人/物理 AI 首选 |
| Jetson AGX Orin 64GB | 275 TOPS INT8 | 64GB / 204.8 GB/s | 15–60W | ¥15299（京东自营史低） | 上代旗舰，视觉/多路推理主力 |
| Jetson Orin NX 16GB Super | 157 TOPS INT8 | 16GB / 102.4 GB/s | 10–25W | 套件约 ¥3000–4000 | 中端嵌入式甜点 |
| Jetson Orin Nano Super | 67 TOPS INT8 | 8GB / 102 GB/s | 7–25W | $249 官方 / 国内溢价 | 入门开发套件之王 |

**关键提醒**：NVIDIA 官方 TOPS/TFLOPS 多为 INT8 或 FP4 **稀疏**峰值；跑 LLM 的 decode 速度 ≈ 带宽 ÷ 模型字节数 × 效率（见 `01-specs-glossary.md`），上表中"带宽"才是本地大模型体验的硬指标。
