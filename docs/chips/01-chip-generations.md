# 芯片发展时间轴：一颗芯片里的 CPU / GPU / NPU

> 看盒子之前，先对芯片有概念——**盒子是"果"，芯片是"因"**。同一个盒子品类里装什么芯片，基本决定了它的算力上限、生态和生命周期。
> 第一节先讲清每款芯片的"性质"，第二节是一条 2014–2026 的可视化时间轴。
> 数据截至 2026-11-03 检索；官方未公布的标 "—"，存疑标 "约"。

---

## 一、先分清性质：CPU / GPU / NPU 到底是什么

现代芯片很少是"一种"处理器。主流芯片都是 **SoC（System on Chip，片上系统）**——把 CPU、GPU、NPU 连同内存控制器、编解码器等模块封装进同一颗硅片。所以谈"某款芯片的性质"，实际是在问：**它里面有没有这三样？各占多大？哪一样是卖点？**

| 性质 | 全称 | 干什么 | 强项 | 弱项 |
|---|---|---|---|---|
| **CPU** | 中央处理器 | 通用计算：操作系统、应用逻辑、任务调度 | 串行逻辑、分支判断，"什么都能干" | 并行规模小（几核到几十核），跑 AI 又慢又耗电 |
| **GPU** | 图形处理器 | 图像渲染出身，靠成百上千个并行小核吃饭 | 大规模并行矩阵/向量运算——被大模型"挖角"后成了 AI 训练主力 | 通用逻辑弱、功耗高，纯推理能效比不如 NPU |
| **NPU** | 神经网络处理器 | 只做神经网络的核心运算：矩阵乘加 | AI 推理能效比最高（TOPS/W 通常领先 GPU 一个量级） | 除了 AI 几乎什么都不会，通用性 ≈ 0 |

一个类比：后厨里 **CPU 是主厨**（什么菜都能做，但一次一道）、**GPU 是切配军团**（一百个学徒同时切土豆丝，吞吐量惊人）、**NPU 是定制寿司机**（只会卷寿司，但一小时三千卷还省电）。而**内存带宽是出菜通道的宽度**——这就是本地大模型先看带宽、后看 TOPS 的原因。

**名字的坑**：NPU 各家叫法不同——苹果 Neural Engine（NE）、华为达芬奇、地平线 BPU、算能 TPU（与谷歌无关）、寒武纪 MLU、NVIDIA 边缘线 DLA。反过来 **Tensor Core** 是 NVIDIA 塞进 GPU 的 AI 单元——本质是"GPU 里长出的 NPU"，苹果 M5 起也把神经加速器塞回了 GPU。这类"混血"让 NPU 和 GPU 的边界越来越模糊。

---

## 二、总时间轴：2014 → 2026

**图例**（圆点颜色 = 芯片性质）：

<ul class="tl-legend">
  <li><span class="dot d-gpu"></span>GPU 训练卡（纯 GPU，无 CPU）</li>
  <li><span class="dot d-gpum"></span>GPU 模组（卖点在 GPU）</li>
  <li><span class="dot d-gpunpu"></span>GPU+NPU SoC（GPU 为主，内置 NPU）</li>
  <li><span class="dot d-npu"></span>NPU SoC / 训练卡（NPU 是主力）</li>
  <li><span class="dot d-soc"></span>CPU+GPU+NPU SoC（三样全有，PC/手机形态）</li>
</ul>

<div class="chip-tl">

<div class="tl-era tl-era-1">时代一 · 2014–2017｜GPU 单核时代<span class="era-sub">AI 芯片 = GPU，端侧靠 GPU 硬跑，又慢又费电</span></div>

<div class="tl-item t-gpum"><div class="tl-head"><span class="tl-year">2014</span><span class="tl-name">Jetson TK1</span><span class="tl-tag tag-gpum">GPU 模组</span></div><div class="tl-note">嵌入式 AI 的"概念验证"机</div></div>

<div class="tl-item t-gpum"><div class="tl-head"><span class="tl-year">2015–17</span><span class="tl-name">Jetson TX1 / TX2</span><span class="tl-tag tag-gpum">GPU 模组</span></div><div class="tl-note">完成模组化与工业化</div></div>

<div class="tl-item t-gpu"><div class="tl-head"><span class="tl-year">2017-05</span><span class="tl-name">NVIDIA V100</span><span class="tl-tag tag-gpu">GPU 训练卡</span></div><div class="tl-note">125 TFLOPS FP16，首代 Tensor Core——深度学习训练时代开启；Tensor Core 本质是 GPU 内部集成的 AI 单元，"NPU 化"从此开始</div></div>

<div class="tl-era tl-era-2">时代二 · 2018–2021｜NPU 登陆战<span class="era-sub">端侧开始长"神经引擎"；今天国产盒子芯片的种，就是这四年埋的</span></div>

<div class="tl-item t-gpunpu"><div class="tl-head"><span class="tl-year">2018-08</span><span class="tl-name">Jetson AGX Xavier</span><span class="tl-tag tag-gpunpu">GPU+NPU SoC</span></div><div class="tl-note">32 TOPS，NVIDIA 边缘线首代 DLA</div></div>

<div class="tl-item t-npu"><div class="tl-head"><span class="tl-year">2018-10</span><span class="tl-name">华为昇腾 310</span><span class="tl-tag tag-npu">NPU SoC</span></div><div class="tl-note">16 TOPS INT8 / 8W，Atlas 200/500 盒子的心脏，国产边缘 AI 起点</div></div>

<div class="tl-item t-npu"><div class="tl-head"><span class="tl-year">2018</span><span class="tl-name">寒武纪 思元 270</span><span class="tl-tag tag-npu">NPU SoC</span></div><div class="tl-note">128 TOPS INT8，老牌 AI 芯片第一股</div></div>

<div class="tl-item t-soc"><div class="tl-head"><span class="tl-year">2018</span><span class="tl-name">瑞芯微 RK3399Pro</span><span class="tl-tag tag-soc">CPU+GPU+NPU SoC</span></div><div class="tl-note">2.4 TOPS，国产消费级 SoC 第一次塞进 NPU</div></div>

<div class="tl-item t-gpum"><div class="tl-head"><span class="tl-year">2019-03</span><span class="tl-name">Jetson Nano</span><span class="tl-tag tag-gpum">GPU 模组</span></div><div class="tl-note">472 GFLOPS，价格屠夫，教学/创客市场引爆</div></div>

<div class="tl-item t-npu"><div class="tl-head"><span class="tl-year">2019</span><span class="tl-name">地平线 征程 2</span><span class="tl-tag tag-npu">NPU SoC</span></div><div class="tl-note">4 TOPS，车载前装起步（同期百度昆仑芯 1 代，互联网自用云端线）</div></div>

<div class="tl-item t-npu"><div class="tl-head"><span class="tl-year">2019</span><span class="tl-name">算能 BM1684</span><span class="tl-tag tag-npu">NPU SoC</span></div><div class="tl-note">17.6 TOPS，编解码之王，32 路解码盒子的心脏</div></div>

<div class="tl-item t-npu"><div class="tl-head"><span class="tl-year">2019-08</span><span class="tl-name">华为昇腾 910</span><span class="tl-tag tag-npu">NPU 训练卡</span></div><div class="tl-note">256 TFLOPS FP16，首代国产云端训练芯片</div></div>

<div class="tl-item t-gpunpu"><div class="tl-head"><span class="tl-year">2019-11</span><span class="tl-name">Jetson Xavier NX</span><span class="tl-tag tag-gpunpu">GPU+NPU SoC</span></div><div class="tl-note">21 TOPS，Nano 与 AGX 之间的甜点</div></div>

<div class="tl-item t-gpu"><div class="tl-head"><span class="tl-year">2020-05</span><span class="tl-name">NVIDIA A100</span><span class="tl-tag tag-gpu">GPU 训练卡</span></div><div class="tl-note">312 TFLOPS FP16（dense），"算力基建"初代，一卡难求</div></div>

<div class="tl-item t-soc"><div class="tl-head"><span class="tl-year">2020-11</span><span class="tl-name">Apple M1</span><span class="tl-tag tag-soc">CPU+GPU+NPU SoC</span></div><div class="tl-note">11 TOPS NE，**统一内存架构开山之作**（68 GB/s）——所有本地大模型故事的伏笔</div></div>

<div class="tl-item t-npu"><div class="tl-head"><span class="tl-year">2021-07</span><span class="tl-name">地平线 征程 5</span><span class="tl-tag tag-npu">NPU SoC</span></div><div class="tl-note">128 TOPS，车载大算力首次破百</div></div>

<div class="tl-item t-npu"><div class="tl-head"><span class="tl-year">2021</span><span class="tl-name">算能 BM1684X</span><span class="tl-tag tag-npu">NPU SoC</span></div><div class="tl-note">32 TOPS，当前出货主力</div></div>

<div class="tl-item t-soc"><div class="tl-head"><span class="tl-year">2021-12</span><span class="tl-name">瑞芯微 RK3588</span><span class="tl-tag tag-soc">CPU+GPU+NPU SoC</span></div><div class="tl-note">6 TOPS，生态最省心，AIoT 盒子默认选项（2022 量产）</div></div>

<div class="tl-era tl-era-3">时代三 · 2022–2023｜大模型前夜<span class="era-sub">数据中心抢 H100，PC 厂抢 Copilot+ 认证，盒子厂抢 Orin——NPU TOPS 取代主频成为发布会第一屏</span></div>

<div class="tl-item t-gpu"><div class="tl-head"><span class="tl-year">2022-03</span><span class="tl-name">NVIDIA H100</span><span class="tl-tag tag-gpu">GPU 训练卡</span></div><div class="tl-note">990 TFLOPS FP16，Transformer Engine，ChatGPT 时代硬通货</div></div>

<div class="tl-item t-gpunpu"><div class="tl-head"><span class="tl-year">2022-03</span><span class="tl-name">Jetson Orin 家族</span><span class="tl-tag tag-gpunpu">GPU+NPU SoC</span></div><div class="tl-note">40 / 100 / 275 TOPS，今天工业 AI 盒子的默认选型</div></div>

<div class="tl-item t-npu"><div class="tl-head"><span class="tl-year">2022</span><span class="tl-name">昇腾 310B / 爱芯 AX620A</span><span class="tl-tag tag-npu">NPU SoC</span></div><div class="tl-note">国产端侧双补位；310B 公开口径 20–200 TOPS 混乱，以产品卡为准</div></div>

<div class="tl-item t-npu"><div class="tl-head"><span class="tl-year">2022-11</span><span class="tl-name">爱芯 AX650N</span><span class="tl-tag tag-npu">NPU SoC</span></div><div class="tl-note">72.5 TOPS，端侧大模型宣传最热（社区 tok/s 实测稀缺）</div></div>

<div class="tl-item t-gpu"><div class="tl-head"><span class="tl-year">2022 起</span><span class="tl-name">摩尔线程 MTT S 系列</span><span class="tl-tag tag-gpu">GPU 卡</span></div><div class="tl-note">国产消费/专业 GPU，图形 + AI 双线</div></div>

<div class="tl-item t-soc"><div class="tl-head"><span class="tl-year">2023-05</span><span class="tl-name">AMD Ryzen 7040</span><span class="tl-tag tag-soc">CPU+GPU+NPU SoC</span></div><div class="tl-note">10 TOPS，x86 阵营首颗内置 NPU</div></div>

<div class="tl-item t-npu"><div class="tl-head"><span class="tl-year">2023</span><span class="tl-name">华为昇腾 910B</span><span class="tl-tag tag-npu">NPU 训练卡</span></div><div class="tl-note">280–320 TFLOPS FP16，出口管制下的替代主力</div></div>

<div class="tl-item t-soc"><div class="tl-head"><span class="tl-year">2023-10</span><span class="tl-name">Apple M3 / 高通 X Elite 发布</span><span class="tl-tag tag-soc">CPU+GPU+NPU SoC</span></div><div class="tl-note">M3 首代 3nm；X Elite 45 TOPS 首发即过微软 Copilot+ 门槛（40 TOPS），倒逼 x86</div></div>

<div class="tl-item t-gpu"><div class="tl-head"><span class="tl-year">2023-11</span><span class="tl-name">NVIDIA H200</span><span class="tl-tag tag-gpu">GPU 训练卡</span></div><div class="tl-note">算力同 H100，141GB HBM3e + 4.8 TB/s——"带宽优先"信号写脸上了</div></div>

<div class="tl-item t-soc"><div class="tl-head"><span class="tl-year">2023-12</span><span class="tl-name">Intel Meteor Lake</span><span class="tl-tag tag-soc">CPU+GPU+NPU SoC</span></div><div class="tl-note">NPU 约 11.5 TOPS，首代"AI PC"但 NPU 不及格；AMD 8040 同月小幅 refresh 至 16 TOPS</div></div>

<div class="tl-era tl-era-4">时代四 · 2024–2026｜军备竞赛<span class="era-sub">NPU 门槛全员跨过 → 战场转向带宽 → NPU 与 GPU 开始合流</span></div>

<div class="tl-item t-gpu"><div class="tl-head"><span class="tl-year">2024-03</span><span class="tl-name">NVIDIA B200 / GB200</span><span class="tl-tag tag-gpu">GPU 训练卡</span></div><div class="tl-note">2.25 PFLOPS FP16（dense），双 die 封装 + NVLink-HBI</div></div>

<div class="tl-item t-npu"><div class="tl-head"><span class="tl-year">2024-04</span><span class="tl-name">地平线 征程 6 系列</span><span class="tl-tag tag-npu">NPU SoC</span></div><div class="tl-note">10–560 TOPS 一个架构覆盖辅助驾驶全场景</div></div>

<div class="tl-item t-soc"><div class="tl-head"><span class="tl-year">2024-05 / 10</span><span class="tl-name">Apple M4 家族</span><span class="tl-tag tag-soc">CPU+GPU+NPU SoC</span></div><div class="tl-note">38 TOPS 首代大升级，带宽 120–546 GB/s</div></div>

<div class="tl-item t-soc"><div class="tl-head"><span class="tl-year">2024-07</span><span class="tl-name">AMD Strix Point</span><span class="tl-tag tag-soc">CPU+GPU+NPU SoC</span></div><div class="tl-note">XDNA 2 NPU 50 TOPS，首个站上 50</div></div>

<div class="tl-item t-soc"><div class="tl-head"><span class="tl-year">2024-09</span><span class="tl-name">Intel Lunar Lake</span><span class="tl-tag tag-soc">CPU+GPU+NPU SoC</span></div><div class="tl-note">NPU 4 达 48 TOPS，史上最大单代跃升（约 4 倍），专为轻薄本</div></div>

<div class="tl-item t-soc"><div class="tl-head"><span class="tl-year">2024-10</span><span class="tl-name">Intel Arrow Lake</span><span class="tl-tag tag-soc">CPU+GPU+NPU SoC</span></div><div class="tl-note">13 TOPS 原地踏步，桌面线还没想明白 NPU 干嘛用</div></div>

<div class="tl-item t-gpunpu"><div class="tl-head"><span class="tl-year">2024-12</span><span class="tl-name">Jetson Orin Super 系列</span><span class="tl-tag tag-gpunpu">GPU+NPU SoC</span></div><div class="tl-note">官方"解锁"固件，67 / 157 TOPS 免费涨</div></div>

<div class="tl-item t-soc"><div class="tl-head"><span class="tl-year">2025-01</span><span class="tl-name">AMD Strix Halo</span><span class="tl-tag tag-soc">CPU+GPU+NPU SoC</span></div><div class="tl-note">128GB 统一内存 + 256 GB/s、96GB 可划显存——本地大模型玩家的关键一跃，当前性价比之王</div></div>

<div class="tl-item t-gpunpu"><div class="tl-head"><span class="tl-year">2025</span><span class="tl-name">Jetson AGX Thor</span><span class="tl-tag tag-gpunpu">GPU+NPU SoC</span></div><div class="tl-note">Blackwell 架构下放边缘，2,070 FP4 稀疏 TFLOPS，人形机器人专用，消费盒子暂无</div></div>

<div class="tl-item t-soc"><div class="tl-head"><span class="tl-year">2025-09</span><span class="tl-name">高通 骁龙 X2 Elite</span><span class="tl-tag tag-soc">CPU+GPU+NPU SoC</span></div><div class="tl-note">Hexagon 第 6 代 NPU 80 TOPS，3nm N3P</div></div>

<div class="tl-item t-npu"><div class="tl-head"><span class="tl-year">2025</span><span class="tl-name">华为昇腾 910C 规模出货</span><span class="tl-tag tag-npu">NPU 训练卡</span></div><div class="tl-note">约 800 TFLOPS FP16（双 die），96GB HBM2e / 1.8 TB/s——又是带宽故事</div></div>

<div class="tl-item t-soc"><div class="tl-head"><span class="tl-year">2025-10</span><span class="tl-name">Apple M5</span><span class="tl-tag tag-soc">CPU+GPU+NPU SoC</span></div><div class="tl-note">路线转折：每颗 GPU 核心内置 Neural Accelerator，NPU 能力开始"回流" GPU</div></div>

<div class="tl-item t-soc"><div class="tl-head"><span class="tl-year">2026-01</span><span class="tl-name">Intel Panther Lake / 高通 X2 Plus</span><span class="tl-tag tag-soc">CPU+GPU+NPU SoC</span></div><div class="tl-note">NPU 5 达 50 TOPS + Intel 18A 工艺首秀；X2 Plus 补齐中端</div></div>

<div class="tl-item t-soc"><div class="tl-head"><span class="tl-year">2026-03 / 10</span><span class="tl-name">Apple M5 Pro/Max、M6</span><span class="tl-tag tag-soc">CPU+GPU+NPU SoC</span></div><div class="tl-note">M6 称神经加速"最高达 M4 两倍"，TOPS 未公布，实测尚稀缺</div></div>

<div class="tl-item t-gpu"><div class="tl-head"><span class="tl-year">2026</span><span class="tl-name">NVIDIA Rubin（路线图）</span><span class="tl-tag tag-gpu">GPU 训练卡</span></div><div class="tl-note">与 HBM4 绑定的下一代，GTC 2026 公布</div></div>

</div>

**三个终局信号**

1. **NPU 门槛全员跨过之后，战场转向带宽**——Strix Halo、H200、910C 全是带宽故事；TOPS 开始通胀，带宽不会说谎。
2. **边缘吃不上热饭**——Thor 才追上 Blackwell，落后数据中心两年是常态；买 Jetson 盒子本质是买"两年前的数据中心技术 + 今天的功耗封装"。
3. **NPU 与 GPU 的边界开始模糊**——苹果把神经加速器塞回 GPU，M5 之后"这颗芯片的 NPU 在哪"可能就是个错问题了。

---

## 三、四条规律

**1. TOPS 是通胀最严重的数字。** 同一代芯片，厂商会同时给三个口径：NPU TOPS、GPU TOPS、平台总算力。Apple 只报 Neural Engine，Intel 爱报平台总算力，NVIDIA 的 Jetson 直接报稀疏 INT8。跨条目比较前先对齐口径——这就是为什么我们在 [规格参数概念手册](../hardware/00-specs-glossary.md) 里单列了一章讲 TOPS 的水分。

**2. 代际节奏不同，买盒子的窗口期就不同。** NVIDIA 数据中心 2 年一代、Jetson 3 年一代、Apple M 系约 18 个月、国产边缘芯片 2–3 年一代。**新品发布后的 6–12 个月是价格最不稳定的窗口**——Strix Halo 盒子官方标价与渠道价差近一半，就是品类溢价期的活样本。

**3. 芯片决定上限，盒子决定下限。** 同一块 RK3588，散热和供电设计好的盒子能满血跑 6 TOPS 不降频，设计差的只有七折。**芯片型号只告诉你"天花板在哪"，持续性能（TDP/散热）才告诉你"实际能站多高"。**

**4. 对本地大模型，芯片代际里最重要的不是 TOPS 是带宽。** M4 的 NE 只有 38 TOPS，但 120 GB/s 带宽能跑 32B 模型；高通 X2 Elite NPU 80 TOPS 很唬人，可 NPU 跑不了 LLM decode。**decode 速度 ≈ 带宽 ÷ 模型字节数**——选本地大模型芯片时，先看带宽那一栏。

---

## 数据来源

**PC / 消费级**：[laptopmedia M 系对比](https://laptopmedia.com/cn/comparisons/apple-m4-vs-m3-pro-max-vs-m2-pro-max-ultra-vs-m1-pro-max-ultra-the-ultimate-benchmark-comparison/)（2026-03）、[ijiwei 端侧 AI 趋势](https://ijiwei.com/n/1104932)（2026-11 检索）、[新浪 Panther Lake 报道](https://finance.sina.com.cn/tech/discovery/2026-01-15/doc-inhhkrvt3306920.shtml)（2026-01）、[163 NPU6 爆料](https://www.163.com/dy/article/KFHG3T340552OI16.html)（2025-11）、[TechPowerUp XDNA 2](https://www.techpowerup.com/316437/amd-announces-xdna-2-npu-architecture-for-next-gen-strix-point-mobile-processors-arriving-in-2024)（2023-12）、[什么值得买 2026 AI PC 实测汇总](https://post.smzdm.com/p/apq27p90/)（2026-06）、[凤凰网科技 X2 Elite](https://tech.ifeng.com/c/8mvVx6HJrQW)（2025-09）、[C114 X2 Plus](https://www.c114.net.cn/industry/49128.html)（2026-01）

**NVIDIA**：[CSDN AI 芯片分类汇总](https://blog.csdn.net/weixin_41194129/article/details/155787745)（2025-12）、[腾讯云社区 910C vs H100](https://cloud.tencent.com/developer/article/2697481)（2026-06）、[CSDN Jetson 早期演进](https://blog.csdn.net/qq_36245787/article/details/162860505)（2026-07）、[Premio Jetson 入门](https://premioinc.com/blogs/blog/introduction-to-nvidia-jetson)（2026-08 检索）、[网易 Orin 供应报道](https://www.163.com/dy/article/KS5ISO6E05561FZM.html)（2026-05）

**国产**：[新浪《一文看懂华为昇腾芯片》](https://finance.sina.cn/tech/2025-12-01/detail-infzeece6200257.d.html)（2025-11）、[iotdt 国产处理器对比](https://www.iotdt.com/news/xingyezixun/1251.html)（2025-10）、[朗锐创新四方案对比](https://www.loongray.com/hangye/167.html)（2026-06）

## 相关阅读

- [规格参数概念手册](../hardware/00-specs-glossary.md) — TOPS、带宽、显存怎么读
- [NVIDIA 系盒子](../hardware/01-nvidia-jetson-dgx.md) — 时间轴上 Jetson 线的工程化成品
- [国产 NPU 盒子](../hardware/02-domestic-npu-boxes.md) — 国产脉络芯片的盒子形态
- [通用迷你主机（本地大模型选型）](../hardware/03-minipc-workstations.md) — 把"带宽决定论"用到选购上
