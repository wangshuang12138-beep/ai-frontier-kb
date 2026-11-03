# AI Frontier KB · AI 前沿知识体系

一个持续维护的 AI 前沿知识库：**概念谱系**（AgentOS 等）+ **硬件规格全对比**（AI 盒子 / 边缘算力 / 本地大模型主机）。

维护者：xca + Kimi Claw ｜ 数据核实日期见各文件头部（首轮：2026-11-03）

## 目录导航

| 路径 | 内容 | 适合谁 |
|---|---|---|
| [concepts/agentos.md](concepts/agentos.md) | AgentOS 三层概念解读、学术权威定义谱系（arXiv 引用）、2026 产业全景（vivo/华为/Rivet/Agno） | 写材料、做汇报、建话语体系 |
| [hardware/00-specs-glossary.md](hardware/00-specs-glossary.md) | 规格参数概念手册：TOPS vs TFLOPS、稀疏/稠密、内存带宽为何决定大模型速度、统一内存 vs 显存 | 读任何规格表之前先读这个 |
| [hardware/01-nvidia-jetson-dgx.md](hardware/01-nvidia-jetson-dgx.md) | NVIDIA 系：DGX Spark / Jetson Thor / AGX Orin / Orin NX / Orin Nano Super | CUDA 生态刚需、机器人 |
| [hardware/02-domestic-npu-boxes.md](hardware/02-domestic-npu-boxes.md) | 国产芯片：华为昇腾 / 算能 SOPHON / 瑞芯微 RK3588 / 爱芯 AX650N / 地平线 | 安防视频结构化、信创、多路推理 |
| [hardware/03-minipc-workstations.md](hardware/03-minipc-workstations.md) | 通用平台：Mac mini M4/M4 Pro、Strix Halo 五杰（GTR9 Pro/Framework/EVO-X2/Z2 Mini/MS-S1 Max）、Intel/Qualcomm、树莓派 AI HAT+ | 本地大模型选型 |

## 阅读顺序建议

1. 没硬件背景 → 先 `00-specs-glossary.md`（30 个概念）
2. 为本地 LLM 选机器 → 直接 `03-minipc-workstations.md` 末尾「对比总表」
3. 写 AgentOS 相关报告 → `concepts/agentos.md` 拿 arXiv 编号和 Gartner 口径

## 数据纪律

- 每个关键数字附来源 URL 与检索日期；官方宣称与社区实测分开标注；查不到写 "—"，严禁编造
- 价格为快照价（注明日期），电商价格波动大，采购前以当期页面为准
- NVIDIA/厂商的 TOPS 常为稀疏峰值，跨品牌比较请看「内存带宽」列——它才是 LLM decode 的硬指标

## 更新计划

- 季度复核价格与新型号（T3000/T2000 Thor 模组、Mac mini M5、AI HAT+ 2 国行价等待补）
- 补充：运营商 AI 机顶盒/白牌大模型盒子、国产 7B-14B 端侧大模型盒子（云天励飞 DeepEdge10 等）

## License

MIT（内容可自由引用，欢迎提 PR 纠正数据）
