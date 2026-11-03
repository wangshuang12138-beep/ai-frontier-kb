---
title: 通用 AI 迷你主机（本地大模型选型）
description: Mac mini、Strix Halo 五杰、Intel/高通、树莓派——本地大模型性价比之王与对比总表
---

# 通用平台 AI 迷你主机/桌面工作站/开发套件规格对比

> 检索与核实日期：2026-11-03 ｜ 币种：未注明者为人民币（¥），美元为 $，英镑 £
> 本文件覆盖 x86/ARM 通用芯片（Apple M 系、AMD Strix Halo、Intel、Qualcomm）与轻量套件（Raspberry Pi + Hailo）。

## 品类概览（约 200 字）

与"专用 NPU 盒子"（Jetson/昇腾/算能）不同，**通用平台跑 AI 的核心变量是内存带宽**：LLM 每生成一个 token 要把全部权重过一遍内存，decode 速度 ≈ 带宽 ÷ 模型字节数。因此 2025–2026 年的明星是 **AMD Ryzen AI Max+ 395（Strix Halo）**——128GB LPDDR5x 统一内存可划 96GB 给 iGPU，带宽 256 GB/s，一万出头就能本地跑 70B 量化模型，被社区称为"本地大模型性价比之王"；Apple Mac mini M4 则以 ¥4499 起提供最便宜的 16GB 统一内存入口；Intel Lunar Lake/Qualcomm X Elite 的 NPU（45–48 TOPS）适合 Copilot+ PC 类轻负载；Raspberry Pi + AI HAT+ 是百元级视觉 AI 教具。

---

## 1. Apple Mac mini（M4 / M4 Pro）

### 1.1 Mac mini M4（2024）

| 字段 | 规格 |
|---|---|
| 发布时间 | 2024-10-29（2024-11 上市） |
| AI 算力 | 16 核 Neural Engine **38 TOPS**；GPU 硬件光追（无官方 TFLOPS） |
| 处理器 | M4：10 核 CPU（4P+6E），台积电 N3E 第二代 3nm，约 280 亿晶体管 |
| GPU | 10 核 Apple 自研 GPU |
| 内存 | 16/24/32GB 统一内存 LPDDR5X，**带宽 120 GB/s** |
| 存储 | 256GB 起步（2026-05 起 256GB 入门款官方下架，起售配置变 16GB+512GB ¥5999） |
| 视频编解码 | H.264/HEVC/ProRes/ProRes RAW 硬件加速，**新增 AV1 硬解**；可带 2×6K + 1×5K |
| 网络 | 千兆（可选 10GbE）、Wi-Fi 6E、蓝牙 5.3 |
| 扩展接口 | 前 2×USB-C（USB 3）+ 3.5mm；后 3×雷雳4、HDMI、网口 |
| 功耗 | 典型负载 10–20W |
| 尺寸形态 | **127×127×50mm**（史上最小 Mac mini，类似 Apple TV 大小） |
| 操作系统 | macOS Sequoia+（Apple Intelligence） |
| 大模型能力 | 社区 llama.cpp：16GB 跑 7B–8B Q4 流畅（数十 tok/s），32GB 可跑 14B–32B 量化（带宽是上限） |
| 参考价格 | 发布价 **¥4499 起（16+256）**（教育优惠 ¥3749）；2026-04 京东促销叠加国补低至 ¥3805 |

来源：[Cloud Atlas 文档（引苹果官方规格页）](http://cloud-atlas.readthedocs.io/zh-cn/latest/apple/macos/mac_mini_2024.html)、[什么值得买 2026-05-06](https://post.smzdm.com/p/a034rl59)、[中关村在线 2026-04-25](https://pc.zol.com.cn/1170/11706460.html)（2026-11-03 检索）

### 1.2 Mac mini M4 Pro / Mac Studio 参考

| 字段 | M4 Pro（Mac mini） | M4 Max（Mac Studio，上位参考） |
|---|---|---|
| AI 算力 | NE 38 TOPS（同代 NE） | NE 38 TOPS，GPU 规模×4 |
| 处理器 | 最高 14 核 CPU（10P+4E） | 16 核 CPU（12P+4E） |
| GPU | 最高 20 核 | 40 核 |
| 内存 | 24/48GB（早期资料另有 64GB 档位，以苹果官网为准），**带宽 273 GB/s** | 36–128GB，**带宽 546 GB/s** |
| 扩展 | 雷雳5（TB5）×3 | 雷雳5 |
| 大模型能力 | 48GB 可跑 32B 级量化；社区甜点 | **官方/社区：128GB 跑 70B 级量化从容** |
| 参考价格 | 以苹果官网为准（本次未单独核实国行价） | 美版 $3499 起（128GB 档更高） |

来源：[mickeyzzc 博客（M4 家族规格表，引苹果官网）](https://blog.mickeyzzc.tech/posts/iot/cpu-selection-guide/)、[Free.Yun 在 Mac 上部署 AI](https://free.yun/doc/ai/209/)（2026-11-03 检索）

> **换代提醒**：M5 世代 Mac mini 预计 2026 年内发布（WWDC 2026 后铺货），传闻带宽 150 GB/s+、NE 50+ TOPS——均为**非官方供应链消息**，采购前以苹果官网为准。

## 2. AMD Strix Halo（Ryzen AI Max+ 395）迷你主机——本文件主角

共性规格（平台级）：16 核 Zen 5（32 线程，最高 5.1GHz）+ Radeon 8060S（40CU RDNA 3.5）+ XDNA2 NPU **50 TOPS**（平台总算力官方口径 126 TOPS）；统一内存 **128GB LPDDR5X-8000、带宽 256 GB/s**，最高可划 **96GB（Windows）/112GB（Linux）给 GPU**；TSMC 4nm。

### 2.1 零刻 Beelink GTR9 Pro（国内规格最满）

| 字段 | 规格 |
|---|---|
| 发布时间 | 2025-05 官宣，2025-08-11 上市 |
| 处理器/算力 | Ryzen AI Max+ 395；另有 2026-09-28 新增 **AI Max+ PRO 495 版（Radeon 8065S，131 TOPS，可分配 96GB 显存）** |
| 内存 | 128GB LPDDR5X-8000（PRO 495 版为 DDR5 8533MT/s） |
| 存储 | 2×M.2 2280 PCIe 4.0×4（128G+2T / 128G+4T / PRO 495 128G+2T） |
| 网络 | **双 10GbE（Intel E610）+ Wi-Fi 7（MT7925, 160MHz, BT5.4）** |
| 扩展接口 | 前：指纹开机键、3.5mm、SD 4.0、USB-C 10Gbps；后：2×USB4 40Gbps、DP 2.1、HDMI 2.1 FRL、2×USB-A 10Gbps；四屏 8K 输出 |
| 特色 | 内置 **230W 电源**（无需外置适配器）；MSC 2.0 散热支持 **140W 性能释放**；AI 拾音降噪芯片 B1 + 4 麦克风阵列 + 双扬声器（AI 语音交互） |
| 尺寸形态 | 180×180×90.8mm 全金属 |
| 操作系统 | Windows 11 Pro |
| 大模型能力 | 官方宣称可跑 70B 级模型；社区实测（llmrun 估算口径）：**7B Q4_K_M 约 40 tok/s，14B 约 20 tok/s**，prefill 527 tok/s |
| 参考价格 | **128G+2T ¥12999**（2025-08）；128G+4T 官方定价 ¥28599（2026-07），**ZOL 渠道参考价已降至 ¥14699**（2026-09，价差大、购买前务必比价）；PRO 495 版 ¥29998（2026-09）；海外 $1985 MSRP / £1899 |

来源：[IT之家 2025-08-11](https://www.ithome.com/0/874/596.htm)、[IT之家 2026-07-06](https://www.ithome.com/0/973/239.htm)、[IT之家 2026-09-28](https://www.ithome.com/1/007/973.htm)、[llmrun 设备页](https://llmrun.dev/device/beelink-gtr9-pro-128gb)、[notebookcheck 2025-08-11](https://www.notebookcheck.net/Beelink-releases-GTR9-Pro-mini-PC-with-AMD-Ryzen-AI-Max-395-and-up-to-128-GB-RAM.1084563.0.html)、[Total Group](https://totalgroup.co.uk/ai/hardware/beelink-gtr9-pro/)、[中关村在线扬州渠道价 2026-09-24](https://detail.zol.com.cn/2148/2147413/price.shtml?via=touch-bottom)（2026-11-03 检索）

### 2.2 Framework Desktop（模块化标杆）

| 字段 | 规格 |
|---|---|
| 发布时间 | 2025-02 官宣，2025-07 开售 |
| 处理器 | Ryzen AI Max+ 395（也有 Max 385 32GB 基础款） |
| 内存 | 128GB LPDDR5X-8000（256 GB/s；Linux 下可划 **112GB 给 GPU**） |
| 存储 | 2×M.2 NVMe |
| 网络 | **5GbE + Wi-Fi 7** |
| 扩展接口 | 2×USB4、DP 2.1、HDMI 2.1；主板可拆出当独立 Mini-ITX 主板 |
| 功耗 | 400W 内置电源，4.5L 机箱 |
| 操作系统 | Windows / Linux |
| 大模型能力 | llmrun：7B Q4 约 40 tok/s 级；70B Q4_K_M 仅约 3.6 tok/s（慢，可跑不可用）；**GPT-OSS 120B（MoE 激活 5.1B）约 41 tok/s**——MoE 模型是 Strix Halo 的正确打开方式 |
| 参考价格 | **128GB 整机 $1999 MSRP**；主板单卖 $799/$1299/$1699 |

来源：[llmrun Framework Desktop 页](https://llmrun.dev/)、[Total Group 对比页](https://totalgroup.co.uk/ai/hardware/beelink-gtr9-pro/)（2026-11-03 检索）

### 2.3 GMKtec EVO-X2（极摩客）

| 字段 | 规格 |
|---|---|
| 处理器 | Ryzen AI Max+ 395 |
| 内存 | 128GB LPDDR5X-8000 板载 + 2TB PCIe 4.0 |
| 网络 | 2.5GbE（单口）+ Wi-Fi 7 |
| 视频输出 | HDMI 2.1 FRL + DP 1.4 HBR3，四屏 |
| 功耗 | TDP 45–120W 可调 |
| 操作系统 | Windows 11 Pro |
| 大模型能力 | 媒体评测宣称"235B 大模型可跑"（指 MoE 量化），具体 tok/s 未给出——谨慎采信 |
| 参考价格 | **$1799 MSRP（128GB 版）**，为同配置官方定价最低档；国内首发曾报 ¥14999，媒体盘点 Strix Halo 机型 ¥9999–14999 区间 |

来源：[Total Group](https://totalgroup.co.uk/ai/hardware/beelink-gtr9-pro/)、[头条评测](https://www.toutiao.com/article/7541374558096343571/)（2026-11-03 检索）

### 2.4 HP Z2 Mini G1a（一线品牌工作站）

| 字段 | 规格 |
|---|---|
| 发布时间 | CES 2025 官宣，2025-07-28 国内上市 |
| 处理器 | Ryzen AI Max+ **PRO** 395（可下选 Max Pro 380/385/390） |
| 内存 | 最高 128GB LPDDR5X-8533 **ECC**，**可划 96GB 给 GPU** |
| 存储 | 双 M.2 2280 PCIe 4.0×4，最高 8TB（支持 RAID） |
| 网络 | 2.5GbE + Wi-Fi 7（MT7925 系） |
| 扩展接口 | 2×雷电4、3×USB-A 3.2G2、2×USB2.0、2×miniDP 2.1、USB-C（视频）、四屏 |
| 功耗 | 内置 300W 电源（92% 能效） |
| 尺寸形态 | 85.5×168×200mm，2.9L，可立可卧可挂显示器 |
| 特色 | **ISV 认证（Adobe/Autodesk 等）+ 13 项 MIL-STD-810H 军标 + 3 年上门**——同类唯一 |
| 大模型能力 | StorageReview 实测**无需独显跑 GPT-OSS 120B** |
| 参考价格 | 国行首发 **¥21999（128G+2T）**；美国 B&H 顶配 $3342.65 |

来源：[惠普中国官网](https://www.hp.com/cn-zh/workstations/z2-mini-a.html)、[快科技 2025-07-28](https://news.mydrivers.com/1/1064/1064788.htm)、[网易 2025-08-06](https://www.163.com/dy/article/K69U015T0511A1HU.html)、[StorageReview 中文版](https://www.storagereview.com/zh-CN/review/hp-z2-mini-g1a-review-running-gpt-oss-120b-without-a-discrete-gpu)（2026-11-03 检索）

### 2.5 MINISFORUM MS-S1 Max（铭凡）

| 字段 | 规格 |
|---|---|
| 处理器 | Ryzen AI Max+ 395 |
| 内存 | 128GB 统一内存 |
| 网络 | **双 10GbE + Wi-Fi 7** |
| 扩展 | USB4 v2 |
| 大模型能力 | 与 GTR9 Pro 同平台，性能同级 |
| 参考价格 | **$2299 MSRP**；美国 Micro Center 128G+2T 约 $3879 |

来源：[llmrun 成本对比表](https://llmrun.dev/)、[Total Group](https://totalgroup.co.uk/ai/hardware/beelink-gtr9-pro/)（2026-11-03 检索）

## 3. Intel 酷睿 Ultra 迷你主机（Lunar Lake / Arrow Lake）

- **Lunar Lake（Core Ultra 200V 系）**：NPU **48 TOPS**（满足 Copilot+ PC 40 TOPS 线），平台总算力约 120 TOPS（CPU+GPU+NPU 官方口径）；内存封装于 CPU（16/32GB LPDDR5X），带宽约 135 GB/s 级。代表机型：Beelink/零刻/GMKtec 的 Ultra 7 258V/288V 迷你主机，国内约 ¥3500–6000。
- **Arrow Lake-H（Core Ultra 200H / 后续 300H）**：NPU 约 13–16 TOPS（平台算力靠 GPU），主打游戏/创作，AI 非卖点。GMKtec EVO-T2S（Core Ultra X7 358H、64GB、10G 网口 + Oculink）等为媒体热炒机型。
- **定位**：LLM 玩家不建议选 Intel——带宽与可分配显存都不如 Strix Halo；适合"要一台安静省电的办公机 + 轻量本地 AI"的人。

（本节数据来自 Intel 官方口径与媒体报道交叉，具体机型规格以厂商页面为准，本次未逐台核验。）

## 4. Qualcomm 系

- **Snapdragon X Elite（X1E-78-100 等）**：12 核 Oryon、Adreno X1 GPU 约 3.8 TFLOPS、Hexagon NPU **45 TOPS**、内存带宽约 135 GB/s（16GB LPDDR5X-8448）——规格与 M4 基础款对位（来源：[Jugomobile 基准对比](https://cn.jugomobile.com/apple-m4%E4%B8%8Esnapdragon-x-elite%EF%BC%9A%E5%9F%BA%E5%87%86%E6%AF%94%E8%BE%83/)；2026-11-03 检索）。
- **Windows Dev Kit**：2024-10 上市 $599，官方渠道 2025 年起已停售（社区共识，非官方公告），库存/二手渠道可见。
- **Thundercomm 创通联达 TurboX 系列（C8550/C6490）**：面向机器人/边缘 AI 的骁龙系盒子，官方规格页本次未抓取（**数据缺口**）。

## 5. Raspberry Pi 5 + AI HAT+（百元级视觉 AI）

| 字段 | 规格 |
|---|---|
| 主机 | Raspberry Pi 5（4/8/16GB，PCIe Gen3；16GB 版淘宝约 ¥1754） |
| AI HAT+（2024-10-24 发布） | **13 TOPS（Hailo-8L）$70 / 26 TOPS（Hailo-8）$110**；国内微雪 Hailo-8 套件 ¥1288，社区渠道约 ¥580/¥900 两档 |
| AI HAT+ 2（2026-01-19 发布） | **Hailo-10H 40 TOPS INT4 + 8GB 板载内存，$130**；官方明确支持 **6B 参数级 LLM/VLM** 本地推理（文档聊天等生成式任务）——老版 HAT+ 仅 CV 不支持 LLM |
| 软件 | Raspberry Pi OS 原生 rpicam-apps 集成；HailoRT + TensorFlow/PyTorch/ONNX |
| 大模型能力 | HAT+ 2：6B LLM 端侧（官方）；HAT+：目标检测/分割/姿态估计多路并发 |
| 定位 | 教具/创客/轻量视觉，不是大模型机器 |

来源：[Raspberry Pi 官方博客 2024-10-24](https://www.raspberrypi.com/news/raspberry-pi-ai-hat/)、[iThome.tw 2026-01-19](https://www.ithome.com.tw/news/173446)、[微雪 Hailo-8 套件](https://www.waveshare.net/shop/Hailo-8-Acce-A.htm)、[Pi 官方中文文档](https://pidoc.cn/docs/accessories/ai-hat-plus)、[淘宝 Pi5 16GB 报价](https://www.taobao.com/list/item/Nis1TFAzR0VpY3VuZHl0ajE3V0lUZz09.htm)（2026-11-03 检索）

## 6. 其他

- **LattePanda Sigma/Mu**：x86 开发板（Windows/Linux），Sigma 为 13 代酷睿+RTX 可选形态，AI 非主打，本次不展开。
- **带独显的迷你 AI 工作站（RTX 4060/4070 ITX、雷电 eGPU）**：带宽 273–2560 GB/s（PCIe 4.0 x8–x16），跑 7B–32B 飞快，但显存 8–16GB 是硬顶，跑不了大模型；与 Strix Halo 是"速度 vs 容量"的取舍。
- **矿卡改装 AI 盒子（P106/588 魔改、特斯拉 P40/M40 外置盒）**：百元到千元级"妖机"，无保修、驱动魔改、稳定性抽奖，**仅适合折腾，不适合任何生产/商务场景**。

---

## 对比总表（按本地大模型体验排序）

| 产品 | NPU TOPS | 内存/带宽 | 可跑模型规模（量化后） | 价格 | 一句话 |
|---|---|---|---|---|---|
| Mac Studio M4 Max | 38 | 128GB / 546 GB/s | 70B 从容 | $3499+ | 带宽天花板，贵 |
| HP Z2 Mini G1a | 50 | 128GB / 256 GB/s | 70B 可跑 / 120B MoE | ¥21999 | ISV+军标，企业税 |
| 零刻 GTR9 Pro | 50（平台126） | 128GB / 256 GB/s | 同上 | **¥12999** | 双万兆+内置电源，全能 |
| Framework Desktop | 50 | 128GB / 256 GB/s | 同上 | $1999 | 模块化+可玩性 |
| GMKtec EVO-X2 | 50 | 128GB / 256 GB/s | 同上 | $1799 | 同配置最低价 |
| MINISFORUM MS-S1 Max | 50 | 128GB / 256 GB/s | 同上 | $2299 | 双万兆 |
| Mac mini M4 Pro | 38 | 48GB / 273 GB/s | 32B 级 | 以官网为准 | 安静省心小钢炮 |
| Mac mini M4 | 38 | 16–32GB / 120 GB/s | 7B–14B | **¥4499 起** | 最便宜统一内存入场券 |
| Intel Ultra 7 258V 机型 | 48 | 16–32GB / ~135 GB/s | 7B–13B 轻量 | ¥3500–6000 | 办公顺手，AI 凑合 |
| Snapdragon X Elite 机型 | 45 | 16GB / 135 GB/s | 7B 轻量 | — | Dev Kit 已停售 |
| Pi 5 + AI HAT+ 2 | 40（INT4） | 8GB 板载 + Pi 内存 | **6B LLM** | $130（不含 Pi） | 百元级生成式 AI 教具 |

**三条关键结论**：
1. **本地大模型性价比之王 = 零刻 GTR9 Pro / GMKtec EVO-X2（Strix Halo 128GB）**：¥12999 或 $1799 拿到 96GB 可分配显存 + 256 GB/s，70B Q4 能跑、120B MoE 好用；同价位 NVIDIA 只有 8GB 的 Orin。
2. **MoE 模型改变游戏规则**： dense 70B 在 256 GB/s 下只有个位数 tok/s，而 GPT-OSS-120B 这类 MoE（激活参数小）能到 40 tok/s——选型前先定模型结构。
3. **Mac mini M4 是最低成本入场券**（¥4499 + 国补常到 ¥3800），16GB 跑 8B 流畅，适合先跑起来再决定要不要上万把块的 Strix Halo。
