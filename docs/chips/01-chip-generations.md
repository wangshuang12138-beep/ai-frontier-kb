# 芯片发展代际速览：盒子之下的那层"因"

> 看盒子之前，先对芯片有概念——**盒子是"果"，芯片是"因"**。同一个盒子品类里装什么芯片，基本决定了它的算力上限、生态和生命周期。
> 本文按厂商梳理 AI 芯片的代际演进，三张表分别覆盖：**PC/消费级芯片**、**NVIDIA 两条线**（数据中心训练 + 边缘 Jetson）、**国产边缘 AI 芯片**。
> 数据截至 2026-11-03 检索；官方未公布的标 "—"，存疑的数字标 "约"。TOPS 口径混乱是行业常态，注意每行的备注。

---

## 一、PC / 消费级芯片：NPU 军备竞赛的四家

过去三年 PC 芯片的主线：CPU 挤牙膏，**NPU（神经网络处理器）从 10 TOPS 卷到 80 TOPS**。微软 Copilot+ PC 认证门槛是 NPU ≥ 40 TOPS——这个数字就是这场军备竞赛的刻度线。

### Apple M 系列（Mac mini / Mac Studio 的那颗芯）

| 代际 | 发布时间 | 制程 | Neural Engine | 统一内存带宽 | 备注 |
|---|---|---|---|---|---|
| M1 / Pro / Max / Ultra | 2020-11 / 2021 / 2022-03 | TSMC 5nm | 11 TOPS（Ultra 22） | 68 / 200 / 400 / 800 GB/s | 统一内存架构的开山之作 |
| M2 / Pro / Max / Ultra | 2022-06 起 | 5nm 二代 | 15.8 TOPS（Ultra 31.6） | 100 / 200 / 400 / 800 GB/s | — |
| M3 / Pro / Max | 2023-10 | TSMC 3nm | 官方未公布（约 18） | 100 / 150 / 300-400 GB/s | 3nm 首代 |
| M4 / Pro / Max | 2024-05（iPad 首发）/ 2024-10（Mac） | N3E | **38 TOPS** | 120 / 273 / 410-546 GB/s | 首次追上 Copilot+ 门槛 |
| M5 / Pro / Max | 2025-10（14" MBP 首发）/ 2026-03 | 改良 3nm | 官方未公布；转向 **GPU 内嵌神经加速器** | **153 GB/s**（基础款） | 每 GPU 核心内置 Neural Accelerator，ANE 不再是唯一路径 |
| M6 | 2026-10（MacBook Pro） | — | 官方称"最高达 M4 的 2 倍"，TOPS 未公布 | — | 上线未满一个月，第三方实测数据还很少 |

来源：[laptopmedia M 系对比](https://laptopmedia.com/cn/comparisons/apple-m4-vs-m3-pro-max-vs-m2-pro-max-ultra-vs-m1-pro-max-ultra-the-ultimate-benchmark-comparison/)（2026-03）、[jia.je M2 回顾](https://jia.je/hardware/2026/07/06/apple-m2/)（2026-07）、[localaimaster Mac 芯片盘点](https://localaimaster.com/blog/macbook-neo-a18-pro-vs-m6-which-one-is-actually-best-for-running-local-llms/)（2026-10），2026-11-03 检索。

### Intel Core Ultra（Meteor Lake 起）

| 代际 | 发布时间 | NPU 版本 | NPU TOPS | 平台总算力 | 制程 | 备注 |
|---|---|---|---|---|---|---|
| Meteor Lake（Ultra 100） | 2023-12 | NPU 3 | 约 11.5 | 约 34 | Intel 4 | 首代"AI PC"，NPU 算力不及格 |
| Lunar Lake（Ultra 200V） | 2024-09 | NPU 4 | **48** | 120+ | TSMC N3B | 史上最大单代跃升（4 倍），专为轻薄本 |
| Arrow Lake（Ultra 200S/H） | 2024-10 / 2025-01 | NPU 3 | 13 | 约 99 | TSMC N3B | 桌面/性能本线，NPU 原地踏步 |
| Panther Lake（Ultra 300） | 2026-01（CES） | NPU 5 | **50** | 约 180 | **Intel 18A** | 英特尔 18A 工艺首秀，回归自家制程 |
| Nova Lake | 路线图中 | NPU 6 | 74（爆料） | — | — | 截至发稿未正式上市 |

来源：[ijiwei 端侧 AI 趋势](https://ijiwei.com/n/1104932)（2026-11 检索）、[新浪 Panther Lake 发布报道](https://finance.sina.com.cn/tech/discovery/2026-01-15/doc-inhhkrvt3306920.shtml)（2026-01）、[163 NPU6 爆料](https://www.163.com/dy/article/KFHG3T340552OI16.html)（2025-11）。

### AMD Ryzen AI

| 代际 | 发布时间 | NPU 架构 | NPU TOPS | 备注 |
|---|---|---|---|---|
| Ryzen 7040 Phoenix | 2023-05 | XDNA 1 | 10 | x86 阵营首个内置 NPU |
| Ryzen 8040 Hawk Point | 2023-12 发布，2024 上市 | XDNA 1 | 16 | 小幅 refresh |
| Ryzen AI 300 Strix Point | 2024-07 | XDNA 2 | 50（HX 375 为 55） | 首个站上 50 TOPS |
| **Ryzen AI Max 300 Strix Halo** | 2025-01（CES） | XDNA 2 | 50 | **本地大玩家的关键：128GB 统一内存 + 256 GB/s，96GB 可划为显存** |
| Ryzen AI 400（Gorgon Point） | 2025 末–2026 | — | 50–60 | Strix Point 优化版 |

来源：[TechPowerUp XDNA 2 发布](https://www.techpowerup.com/316437/amd-announces-xdna-2-npu-architecture-for-next-gen-strix-point-mobile-processors-arriving-in-2024)（2023-12）、[什么值得买 2026 AI PC 实测汇总](https://post.smzdm.com/p/apq27p90/)（2026-06）。

### Qualcomm 骁龙 X（Windows on Arm）

| 代际 | 发布时间 | NPU | NPU TOPS | 备注 |
|---|---|---|---|---|
| 8cx Gen 2 / Gen 3 | 2020 / 2021-12 | 早期 Hexagon | 29（Gen 3 平台口径） | 雷声大雨点小，生态没起来 |
| Snapdragon X Elite / Plus | 2023-10 发布，2024-06 上市 | Hexagon（第 5 代） | **45** | 首发即过 Copilot+ 线，倒逼 x86 |
| Snapdragon X2 Elite / Extreme | 2025-09-24 | Hexagon（第 6 代） | **80** | 3nm N3P + 第三代 Oryon CPU；LPDDR5x-9523 |
| Snapdragon X2 Plus | 2026-01 披露 | Hexagon | 80（部分 HP 独占 SKU 85） | 补齐中端 |

来源：[凤凰网科技 X2 Elite 发布](https://tech.ifeng.com/c/8mvVx6HJrQW)（2025-09）、[C114 X2 Plus 曝光](https://www.c114.net.cn/industry/49128.html)（2026-01）、[CSDN X2 Elite 规格汇总](https://blog.csdn.net/weixin_38498942/article/details/160982187)（2026-05）。

---

## 二、NVIDIA：数据中心与边缘两条并行的时间线

### 数据中心线（训练/推理的"战略纵深"）

这条线决定了**边缘芯片的技术下放节奏**——Jetson 用的 GPU 架构永远落后数据中心一到两代，因为要先保数据中心供货。

| 架构 | 旗舰 | 发布 | FP16 算力（约） | 标志性意义 |
|---|---|---|---|---|
| Volta | V100 | 2017-05 | 125 TFLOPS | **首代 Tensor Core**，深度学习训练时代开启 |
| Ampere | A100 | 2020-05 | 312 TFLOPS（dense） | 疫情+大模型前夜，一卡难求的初代"算力基建" |
| Hopper | H100 | 2022-03 | 990 TFLOPS | Transformer Engine，ChatGPT 时代的硬通货 |
| Hopper  refresh | H200 | 2023-11 | 同 H100 | 141GB HBM3e，带宽 4.8 TB/s |
| Blackwell | B200 / GB200 | 2024-03 发布 | 2.25 PFLOPS（dense）/ 4.5 PFLOPS（稀疏） | 双 die 封装 + NVLink-HBI |
| Rubin | — | 2026 路线 | — | 2026 GTC 公布的下一代，与 HBM4 绑定 |

来源：[CSDN AI 芯片分类汇总](https://blog.csdn.net/weixin_41194129/article/details/155787745)（2025-12）、[腾讯云社区 910C vs H100 对比](https://cloud.tencent.com/developer/article/2697481)（2026-06）。

### 边缘线 Jetson（机器人/盒子用的就是这条线）

| 代际 | 发布时间 | GPU 架构 | 算力（INT8 TOPS / FP16） | 备注 |
|---|---|---|---|---|
| TK1 | 2014 | Kepler | — | 嵌入式 AI 的"概念验证" |
| TX1 / TX2 | 2015 / 2017 | Maxwell / Pascal | 1 / 1.3 TFLOPS | 模组化与工业化 |
| Jetson Nano | 2019-03 | Maxwell | 472 GFLOPS | 价格屠夫，教学/创客市场引爆 |
| AGX Xavier | 2018-08 | Volta | 32 TOPS | 首代 DLA（深度学习加速器） |
| Xavier NX | 2019-11 | Volta | 21 TOPS | Nano 与 AGX 之间的甜点 |
| **Jetson Orin 家族** | 2022-03 | **Ampere** | Nano 40 / NX 100 / AGX 275 | 今天工业 AI 盒子的默认选型 |
| Orin Nano Super / NX Super | 2024-12 | Ampere | 67 / 157 | 官方"解锁"固件，免费涨算力 |
| **Jetson AGX Thor** | 2025 | **Blackwell** | 最高 2,070 FP4 稀疏 TFLOPS | Physical AI（人形机器人）专用，消费盒子暂无 |

来源：[CSDN Jetson 早期演进](https://blog.csdn.net/qq_36245787/article/details/162860505)（2026-07）、[Premio Jetson 入门](https://premioinc.com/blogs/blog/introduction-to-nvidia-jetson)（2026-08 检索）、[网易 Orin 供应报道](https://www.163.com/dy/article/KS5ISO6E05561FZM.html)（2026-05）。

**注意边缘线落后数据中心两代**：2022 年的 Orin 用 Ampere（数据中心 2020 年的架构），2025 年的 Thor 才追上 Blackwell（数据中心 2024 年）。买 Jetson 盒子本质上是在买"两年前的数据中心技术 + 今天的功耗封装"。

---

## 三、国产边缘 AI 芯片

国产芯片的三条脉络：**华为昇腾**（全栈自主，政企市场）、**安防/工业系**（算能、瑞芯微、地平线、爱芯，靠盒子生态打市场）、**云端训练系**（昇腾 910 系、寒武纪、百度昆仑，受出口管制倒逼）。

### 华为昇腾（达芬奇架构）

| 芯片 | 发布 | 定位 | 算力（约） | 备注 |
|---|---|---|---|---|
| 昇腾 310 | 2018-10 | 边缘推理 | 16 TOPS INT8 / 8W | Atlas 200/500 盒子的心脏 |
| 昇腾 310P | 2021 | 推理卡 | 88 TOPS INT8 | Atlas 300I Pro |
| 昇腾 310B | 2022 | 边缘推理 SoC | 公开口径 20–200 TOPS 说法不一 | 以具体产品卡为准，宣传口径混乱 |
| 昇腾 910 | 2019-08 | 云端训练 | 256 TFLOPS FP16 | 首代国产训练芯片 |
| 昇腾 910B | 2023 | 云端训练 | 280–320 TFLOPS FP16，64GB HBM2e | 出口管制下的替代主力 |
| 昇腾 910C | 2025 规模出货 | 云端训练 | 约 800 TFLOPS FP16（双 die），96GB HBM2e / 1.8 TB/s | 约为 H100 的 40%（FP16），HBM 容量反超 |

来源：[新浪《一文看懂华为昇腾芯片》](https://finance.sina.cn/tech/2025-12-01/detail-infzeece6200257.d.html)（2025-11）、[腾讯云社区 910C 分析](https://cloud.tencent.com/developer/article/2697481)（2026-06）、[iotdt 国产处理器对比](https://www.iotdt.com/news/xingyezixun/1251.html)（2025-10）。

### 安防/工业系盒子芯片（你盒子里最可能装的几颗）

| 厂商 | 芯片 | 发布 | INT8 TOPS | 一句定位 |
|---|---|---|---|---|
| 算能 | BM1684 | 2019 | 17.6 | 编解码之王，32 路解码盒子的心脏 |
| 算能 | BM1684X | 2021 | 32 | 1684 的算力翻倍版，当前出货主力 |
| 算能 | BM1688 | 2023 | 32（FP16 16 TFLOPS） | SE 系列新主力，端侧大模型宣传最热 |
| 瑞芯微 | RK3399Pro | 2018 | 2.4 | 国产 NPU 开山，已被 3588 全面替代 |
| 瑞芯微 | **RK3588** | 2021-12 发布 / 2022 量产 | 6 | **生态最省心**，AIoT 盒子默认选项 |
| 瑞芯微 | RK3576 | 2024 | 6 | 3588 的低成本姊妹 |
| 地平线 | 征程 2 | 2019 | 4 | 车载前装起步 |
| 地平线 | 征程 3 / 旭日 X3 | 2020 / 2022 | 5 | 机器人开发圈知名（地瓜机器人 R1 等） |
| 地平线 | 征程 5 | 2021-07 | **128** | 车载大算力破百 |
| 地平线 | 征程 6 系列 | 2024-04 | 10–560（家族） | 一个架构覆盖辅助驾驶全场景 |
| 爱芯 | AX620A | 2021 | 14.4 | 端侧视觉 |
| 爱芯 | **AX650N** | 2022-11 | 72.5 | 端侧大模型宣传最热（社区 tok/s 实测稀缺） |
| 晶晨 | A311D / A311D2 | 2019 / 2021 | 5 | 电视盒子系边缘 AI |

来源：[朗锐创新四方案对比](https://www.loongray.com/hangye/167.html)（2026-06）、[iotdt 国产处理器对比](https://www.iotdt.com/news/xingyezixun/1251.html)（2025-10）。

### 云端训练系（了解坐标即可）

| 厂商 | 芯片 | 时间 | 算力（约） | 备注 |
|---|---|---|---|---|
| 寒武纪 | 思元 270 | 2018 | 128 TOPS INT8 | 老牌 AI 芯片第一股 |
| 寒武纪 | 思元 220 | 2019 | 8 TOPS | 边缘推理 |
| 寒武纪 | 思元 370 | 2021 | 256 TOPS | 云端推理 |
| 百度 | 昆仑芯 1 代 / 2 代 | 2020 / 2021 | 128–256 TOPS | 互联网自用为主 |
| 摩尔线程 | MTT S 系列 | 2022 起 | — | 国产消费/专业 GPU，图形+AI 双线 |

---

## 四、怎么读这三张表：四条规律

**1. TOPS 是通胀最严重的数字。** 同一代芯片，厂商会同时给三个口径：NPU TOPS、GPU TOPS、平台总算力。Apple 只报 Neural Engine，Intel 爱报平台总算力，NVIDIA 的 Jetson 直接报稀疏 INT8。跨表比较前先对齐口径——这就是为什么我们在 [规格参数概念手册](../hardware/00-specs-glossary.md) 里单列了一章讲 TOPS 的水分。

**2. 代际节奏不同，买盒子的窗口期就不同。** NVIDIA 数据中心 2 年一代、Jetson 3 年一代、Apple M 系约 18 个月、国产边缘芯片 2-3 年一代。**新品发布后的 6-12 个月是价格最不稳定的窗口**——Strix Halo 盒子官方标价与渠道价差近一半，就是品类溢价期的活样本。

**3. 芯片决定上限，盒子决定下限。** 同一块 RK3588，散热和供电设计好的盒子能满血跑 6 TOPS 不降频，设计差的只能跑出七折；Strix Halo 整机 70-120W 的功耗释放差异，直接拉开 40% 以上的实测性能。**看盒子参数时，芯片型号只告诉你"天花板在哪"，持续性能（TDP/散热）才告诉你"你实际能站多高"。**

**4. 对本地大模型，芯片代际里最重要的不是 TOPS 是带宽。** 回看第一张表：M4 的 NE 只有 38 TOPS，但 120 GB/s 带宽能跑 32B 模型；高通 X2 Elite NPU 80 TOPS 很唬人，可 NPU 跑不了 LLM decode，带宽只有 Extreme 款的 228 GB/s 能看。**decode 速度 ≈ 带宽 ÷ 模型字节数**——选本地大模型芯片时，先看内存带宽那一列。

---

## 相关阅读

- [规格参数概念手册](../hardware/00-specs-glossary.md) — TOPS、带宽、显存怎么读
- [通用迷你主机（本地大模型选型）](../hardware/03-minipc-workstations.md) — 把"带宽决定论"用到选购上
- [国产 NPU 盒子](../hardware/02-domestic-npu-boxes.md) — 第三节芯片的工程化成品
