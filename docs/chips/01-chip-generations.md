# 芯片发展时间轴：一颗芯片里的 CPU / GPU / NPU

> 看盒子之前，先对芯片有概念——**盒子是"果"，芯片是"因"**。同一个盒子品类里装什么芯片，基本决定了它的算力上限、生态和生命周期。
> 本文不再按厂商分表，而是把所有芯片放进**一条 2014–2026 的时间轴**：第一节先讲清每颗芯片的"性质"（CPU / GPU / NPU 的分工），第二节顺着时间看各家代际怎么一环扣一环。
> 数据截至 2026-11-03 检索；官方未公布的标 "—"，存疑的数字标 "约"。TOPS 口径混乱是行业常态，注意每条的备注。

---

## 一、先分清性质：CPU / GPU / NPU 到底是什么

现代芯片很少是"一种"处理器。主流芯片都是 **SoC（System on Chip，片上系统）**——把 CPU、GPU、NPU 连同内存控制器、编解码器等一堆模块封装进同一颗硅片。所以谈"某款芯片的性质"，实际是在问三个问题：**它里面有没有这三样？各占多大面积？哪一样是卖点？**

| 性质 | 全称 | 干什么 | 强项 | 弱项 |
|---|---|---|---|---|
| **CPU** | 中央处理器 | 通用计算：操作系统、应用逻辑、任务调度 | 串行逻辑、分支判断，"什么都能干" | 并行规模小（几核到几十核），跑 AI 又慢又耗电 |
| **GPU** | 图形处理器 | 图像渲染出身，靠成百上千个并行小核吃饭 | 大规模并行矩阵/向量运算——被大模型"挖角"后成了 AI 训练主力 | 通用逻辑弱、功耗高，纯推理的能效比不如 NPU |
| **NPU** | 神经网络处理器 | 只做神经网络的核心运算：矩阵乘加（MAC） | AI 推理能效比最高（TOPS/W 通常领先 GPU 一个量级） | 除了 AI 几乎什么都不会，通用性 ≈ 0 |

一个类比：后厨里，**CPU 是主厨**——什么菜都能做，但一次只做一道；**GPU 是切配军团**——一百个学徒同时切土豆丝，吞吐量惊人；**NPU 是定制寿司机**——只会卷寿司，但一小时三千卷还省电。而**内存带宽是出菜通道的宽度**——通道越宽大家越不堵门（这就是为什么本地大模型先看带宽，而不是先看 TOPS）。

**名字的坑**，看宣传页前先对口径：

- NPU 各家叫法不同：苹果叫 **Neural Engine（NE）**、华为叫**达芬奇 NPU**、地平线叫 **BPU**、算能叫 **TPU**（跟谷歌 TPU 毫无关系）、寒武纪叫 **MLU**、NVIDIA 边缘线叫 **DLA**、Intel 旧称 VPU/GNA。
- 反过来，**Tensor Core** 是 NVIDIA 塞进 GPU 里的 AI 单元——本质是"GPU 里长出的 NPU"；苹果 M5 起也把神经加速器塞回了 GPU 核心。这类"混血"让 NPU 和 GPU 的边界越来越模糊。

**读时间轴的标签约定**（每条芯片名后面的反引号标签）：

- `GPU 训练卡` — 纯 GPU、无 CPU，插在服务器里干训练/推理（V100→B200 这条线）
- `GPU 模组` — 卖点在 GPU，附带 CPU 配套（Jetson 早期、Nano）
- `GPU+NPU SoC` — GPU 为主、内置 NPU/DLA 协处理器（Jetson Xavier 之后）
- `NPU SoC` — NPU 是算力主力，CPU 只负责打杂调度（昇腾 310、算能、地平线、爱芯）
- `CPU+GPU+NPU SoC` — 三样全有，PC/手机芯片的典型形态（Apple M、酷睿 Ultra、骁龙 X、RK3588）

---

## 二、总时间轴：2014 → 2026

### 时代一 · 2014–2017：GPU 单核时代——AI 芯片 = GPU

- **2014 · NVIDIA Jetson TK1** — `GPU 模组`｜Kepler 架构，嵌入式 AI 的"概念验证"机
- **2015–2017 · Jetson TX1 / TX2** — `GPU 模组`｜Maxwell / Pascal，1 / 1.3 TFLOPS，完成模组化与工业化
- **2017-05 · NVIDIA V100** — `GPU 训练卡`｜125 TFLOPS FP16，**首代 Tensor Core**，深度学习训练时代开启。注意 Tensor Core 本质是 GPU 内部集成的 AI 单元——"NPU 化"从这颗芯就开始了

> 这四年没有 NPU 什么事：端侧 AI 靠 GPU 硬跑，又费电又慢。**专用的神经引擎迟早要长出来。**

### 时代二 · 2018–2021：NPU 登陆战——端侧开始长"神经引擎"

- **2018-08 · Jetson AGX Xavier** — `GPU+NPU SoC`｜Volta GPU + 首代 DLA，32 TOPS，NVIDIA 边缘线第一次长出 NPU
- **2018-10 · 华为昇腾 310** — `NPU SoC`｜达芬奇架构，16 TOPS INT8 / 8W，Atlas 200/500 盒子的心脏，国产边缘 AI 的起点
- **2018 · 寒武纪 思元 270** — `NPU SoC`｜128 TOPS INT8，老牌 AI 芯片第一股
- **2018 · 瑞芯微 RK3399Pro** — `CPU+GPU+NPU SoC`｜2.4 TOPS，国产消费级 SoC 第一次塞进 NPU
- **2019-03 · Jetson Nano** — `GPU 模组`｜472 GFLOPS，价格屠夫，教学/创客市场引爆
- **2019 · 地平线 征程 2** — `NPU SoC`｜4 TOPS，车载前装起步；**2019–2021 · 百度昆仑芯 1 代 / 2 代**（128–256 TOPS），互联网自用为主的云端支线
- **2019 · 算能 BM1684** — `NPU SoC`｜17.6 TOPS，编解码之王，32 路解码盒子的心脏
- **2019-08 · 华为昇腾 910** — `NPU 训练卡`｜256 TFLOPS FP16，首代国产云端训练芯片
- **2019-11 · Jetson Xavier NX** — `GPU+NPU SoC`｜21 TOPS，Nano 与 AGX 之间的甜点
- **2020-05 · NVIDIA A100** — `GPU 训练卡`｜312 TFLOPS FP16（dense），"算力基建"的初代，疫情 + 大模型前夜一卡难求
- **2020–2021 · 地平线 征程 3（5 TOPS）/ 旭日 X3** — `NPU SoC`｜机器人开发圈知名（地瓜机器人 R1 等）
- **2020-11 · Apple M1** — `CPU+GPU+NPU SoC`｜8 CPU + 8 GPU + 11 TOPS NE，**统一内存架构开山之作**（68 GB/s）——后面所有本地大模型故事的伏笔
- **2021-07 · 地平线 征程 5** — `NPU SoC`｜128 TOPS，车载大算力首次破百
- **2021 · 算能 BM1684X** — `NPU SoC`｜32 TOPS，1684 的翻倍版，当前出货主力
- **2021-12 · 瑞芯微 RK3588（2022 量产）** — `CPU+GPU+NPU SoC`｜6 TOPS，**生态最省心**，AIoT 盒子的默认选项

> 四年里 NPU 从"噱头"变成"标配"：PC/手机芯片没 NPU 不好意思开发布会；国产盒子芯片（算能、瑞芯微、地平线、爱芯）也在这波里完成原始积累。**今天盒子市场里"国产 NPU 系"这个品类，就是 2018–2021 年埋的种。**

### 时代三 · 2022–2023：大模型前夜——两条线同时点火

- **2022-03 · NVIDIA H100** — `GPU 训练卡`｜990 TFLOPS FP16，Transformer Engine，ChatGPT 时代的硬通货
- **2022-03 · Jetson Orin 家族** — `GPU+NPU SoC`｜Ampere GPU，Nano 40 / NX 100 / AGX 275 TOPS，**今天工业 AI 盒子的默认选型**
- **2021–2022 · 爱芯 AX620A（14.4 TOPS）/ 华为昇腾 310B** — `NPU SoC`｜端侧推理的国产双补位；310B 公开口径 20–200 TOPS 说法混乱，以具体产品卡为准
- **2022-11 · 爱芯 AX650N** — `NPU SoC`｜72.5 TOPS，端侧大模型宣传最热（社区 tok/s 实测稀缺）
- **2022 起 · 摩尔线程 MTT S 系列** — `GPU 训练卡`｜国产消费/专业 GPU，图形 + AI 双线
- **2023-05 · AMD Ryzen 7040（Phoenix）** — `CPU+GPU+NPU SoC`｜XDNA 1 NPU 10 TOPS，x86 阵营首颗内置 NPU
- **2023 · 华为昇腾 910B / 算能 BM1688** — `NPU`｜910B 280–320 TFLOPS FP16（出口管制下的替代主力）；BM1688 32 TOPS INT8 / 16 TFLOPS FP16，SE 系列新主力
- **2023-10 · Apple M3 / 高通骁龙 X Elite 发布** — `CPU+GPU+NPU SoC`｜M3 首代 3nm；X Elite 45 TOPS 首发即过微软 Copilot+ 门槛（40 TOPS），倒逼 x86 两家
- **2023-11 · NVIDIA H200** — `GPU 训练卡`｜算力同 H100，141GB HBM3e + 4.8 TB/s——**"带宽优先"的信号已经写脸上了**
- **2023-12 · Intel Meteor Lake（Core Ultra 100）** — `CPU+GPU+NPU SoC`｜NPU 3 约 11.5 TOPS，首代"AI PC"但 NPU 不及格——起了大早赶了晚集
- **2023-12 · AMD Ryzen 8040（Hawk Point）** — `CPU+GPU+NPU SoC`｜16 TOPS，小幅 refresh

> 大模型把算力饥渴传染到每个角落：数据中心抢 H100，PC 厂抢 Copilot+ 认证，盒子厂抢 Orin 供货。**NPU TOPS 正式取代 CPU 主频，成为发布会的第一屏数字。**

### 时代四 · 2024–2026：军备竞赛——NPU 过线、带宽称王、双线合流

- **2024-03 · NVIDIA B200 / GB200（Blackwell）** — `GPU 训练卡`｜2.25 PFLOPS FP16（dense），双 die 封装 + NVLink-HBI
- **2024-04 · 地平线 征程 6 系列** — `NPU SoC`｜10–560 TOPS 一个架构覆盖辅助驾驶全场景
- **2024-05（iPad 首发）/ 2024-10（Mac）· Apple M4 家族** — `CPU+GPU+NPU SoC`｜**38 TOPS 首次追上 Copilot+ 线**，带宽 120–546 GB/s
- **2024-07 · AMD Ryzen AI 300（Strix Point）** — `CPU+GPU+NPU SoC`｜XDNA 2 NPU 50 TOPS，首个站上 50
- **2024-09 · Intel Lunar Lake（Ultra 200V）** — `CPU+GPU+NPU SoC`｜NPU 4 **48 TOPS**，史上最大单代跃升（约 4 倍），专为轻薄本
- **2024-10 / 2025-01 · Intel Arrow Lake（Ultra 200S/H）** — `CPU+GPU+NPU SoC`｜13 TOPS 原地踏步，桌面线还没想明白 NPU 用来干嘛
- **2024-12 · Jetson Orin Nano/NX Super** — `GPU+NPU SoC`｜官方"解锁"固件，67 / 157 TOPS 免费涨
- **2025-01 · AMD Ryzen AI Max 300（Strix Halo）** — `CPU+GPU+NPU SoC`｜NPU 50 TOPS 平平，但 **128GB 统一内存 + 256 GB/s、96GB 可划显存**——**本地大模型玩家的关键一跃**，当前性价比之王
- **2025 · Jetson AGX Thor** — `GPU+NPU SoC`｜Blackwell 架构下放边缘，最高 2,070 FP4 稀疏 TFLOPS，Physical AI（人形机器人）专用，消费盒子暂无
- **2025-09 · 高通 骁龙 X2 Elite / Extreme** — `CPU+GPU+NPU SoC`｜Hexagon 第 6 代 NPU **80 TOPS**，3nm N3P + 第三代 Oryon CPU
- **2025 · 华为昇腾 910C 规模出货** — `NPU 训练卡`｜约 800 TFLOPS FP16（双 die），96GB HBM2e / 1.8 TB/s，约为 H100 的 40%，但 HBM 容量反超——又是带宽故事
- **2025-10 · Apple M5** — `CPU+GPU+NPU SoC`｜**路线转折：每颗 GPU 核心内置 Neural Accelerator**，ANE 不再是唯一路径——NPU 能力开始"回流" GPU
- **2026-01 · Intel Panther Lake（Ultra 300）/ 高通 X2 Plus** — `CPU+GPU+NPU SoC`｜NPU 5 达 50 TOPS + Intel 18A 工艺首秀；X2 Plus 补齐中端（部分 HP 独占 SKU 85 TOPS）
- **2026-03 / 2026-10 · Apple M5 Pro / Max、M6** — `CPU+GPU+NPU SoC`｜M6 称神经加速"最高达 M4 两倍"，TOPS 未公布，上线未满一个月实测稀缺
- **2026 · NVIDIA Rubin（路线图）** — `GPU 训练卡`｜与 HBM4 绑定的下一代，GTC 2026 公布

> 三个终局信号：**① NPU 门槛被全员跨过之后，战场转向带宽**——Strix Halo、H200、910C 全是带宽故事；**② 边缘吃不上热饭**——Thor 才追上 Blackwell，落后数据中心两年是常态，买 Jetson 盒子本质是在买"两年前的数据中心技术 + 今天的功耗封装"；**③ NPU 与 GPU 的边界开始模糊**——苹果把神经加速器塞回 GPU，M5 之后"这颗芯片的 NPU 在哪"可能就是个错问题了。

---

## 三、怎么读这条时间轴：四条规律

**1. TOPS 是通胀最严重的数字。** 同一代芯片，厂商会同时给三个口径：NPU TOPS、GPU TOPS、平台总算力。Apple 只报 Neural Engine，Intel 爱报平台总算力，NVIDIA 的 Jetson 直接报稀疏 INT8。跨条目比较前先对齐口径——这就是为什么我们在 [规格参数概念手册](../hardware/00-specs-glossary.md) 里单列了一章讲 TOPS 的水分。

**2. 代际节奏不同，买盒子的窗口期就不同。** NVIDIA 数据中心 2 年一代、Jetson 3 年一代、Apple M 系约 18 个月、国产边缘芯片 2–3 年一代。**新品发布后的 6–12 个月是价格最不稳定的窗口**——Strix Halo 盒子官方标价与渠道价差近一半，就是品类溢价期的活样本。

**3. 芯片决定上限，盒子决定下限。** 同一块 RK3588，散热和供电设计好的盒子能满血跑 6 TOPS 不降频，设计差的只有七折；Strix Halo 整机 70–120W 的功耗释放差异，直接拉开 40% 以上的实测性能。**芯片型号只告诉你"天花板在哪"，持续性能（TDP/散热）才告诉你"实际能站多高"。**

**4. 对本地大模型，芯片代际里最重要的不是 TOPS 是带宽。** 回看时间轴：M4 的 NE 只有 38 TOPS，但 120 GB/s 带宽能跑 32B 模型；高通 X2 Elite NPU 80 TOPS 很唬人，可 NPU 跑不了 LLM decode，能看的只有 Extreme 款的 228 GB/s。**decode 速度 ≈ 带宽 ÷ 模型字节数**——选本地大模型芯片时，先看带宽那一栏。

---

## 数据来源

**PC / 消费级**：[laptopmedia M 系对比](https://laptopmedia.com/cn/comparisons/apple-m4-vs-m3-pro-max-vs-m2-pro-max-ultra-vs-m1-pro-max-ultra-the-ultimate-benchmark-comparison/)（2026-03）、[ijiwei 端侧 AI 趋势](https://ijiwei.com/n/1104932)（2026-11 检索）、[新浪 Panther Lake 报道](https://finance.sina.com.cn/tech/discovery/2026-01-15/doc-inhhkrvt3306920.shtml)（2026-01）、[163 NPU6 爆料](https://www.163.com/dy/article/KFHG3T340552OI16.html)（2025-11）、[TechPowerUp XDNA 2](https://www.techpowerup.com/316437/amd-announces-xdna-2-npu-architecture-for-next-gen-strix-point-mobile-processors-arriving-in-2024)（2023-12）、[什么值得买 2026 AI PC 实测汇总](https://post.smzdm.com/p/apq27p90/)（2026-06）、[凤凰网科技 X2 Elite](https://tech.ifeng.com/c/8mvVx6HJrQW)（2025-09）、[C114 X2 Plus](https://www.c114.net.cn/industry/49128.html)（2026-01）

**NVIDIA**：[CSDN AI 芯片分类汇总](https://blog.csdn.net/weixin_41194129/article/details/155787745)（2025-12）、[腾讯云社区 910C vs H100](https://cloud.tencent.com/developer/article/2697481)（2026-06）、[CSDN Jetson 早期演进](https://blog.csdn.net/qq_36245787/article/details/162860505)（2026-07）、[Premio Jetson 入门](https://premioinc.com/blogs/blog/introduction-to-nvidia-jetson)（2026-08 检索）、[网易 Orin 供应报道](https://www.163.com/dy/article/KS5ISO6E05561FZM.html)（2026-05）

**国产**：[新浪《一文看懂华为昇腾芯片》](https://finance.sina.cn/tech/2025-12-01/detail-infzeece6200257.d.html)（2025-11）、[iotdt 国产处理器对比](https://www.iotdt.com/news/xingyezixun/1251.html)（2025-10）、[朗锐创新四方案对比](https://www.loongray.com/hangye/167.html)（2026-06）

## 相关阅读

- [规格参数概念手册](../hardware/00-specs-glossary.md) — TOPS、带宽、显存怎么读
- [NVIDIA 系盒子](../hardware/01-nvidia-jetson-dgx.md) — 第二节 Jetson 时间轴的工程化成品
- [国产 NPU 盒子](../hardware/02-domestic-npu-boxes.md) — 国产脉络芯片的盒子形态
- [通用迷你主机（本地大模型选型）](../hardware/03-minipc-workstations.md) — 把"带宽决定论"用到选购上
