---
layout: home

hero:
  name: "AI Frontier KB"
  text: "AI 前沿知识体系"
  tagline: "概念谱系 × 硬件规格全对比 —— 每个关键数字都有来源与检索日期"
  actions:
    - theme: brand
      text: 开始选型 →
      link: /hardware/03-minipc-workstations
    - theme: alt
      text: AgentOS 是什么
      link: /concepts/agentos

features:
  - title: 📐 概念谱系
    details: AgentOS 三层解读、arXiv 学术权威来源、2026 产业全景（vivo / 华为 / Rivet / Agno）
    link: /concepts/agentos
  - title: 🧬 芯片发展代际
    details: NPU 军备竞赛、NVIDIA 数据中心×Jetson 双线、国产芯片三条脉络——盒子是果，芯片是因
    link: /chips/01-chip-generations
  - title: 📖 规格概念手册
    details: TOPS vs TFLOPS、稀疏与稠密、为什么内存带宽决定大模型速度——读规格表之前先读这个
    link: /hardware/00-specs-glossary
  - title: 🟩 NVIDIA 系
    details: DGX Spark / Jetson Thor / AGX Orin / Orin Nano Super，官方口径与社区实测分开标注
    link: /hardware/01-nvidia-jetson-dgx
  - title: 🟥 国产芯片系
    details: 昇腾 / 算能 / RK3588 / 爱芯 / 地平线——编解码之王是谁、谁真支持 7B 大模型
    link: /hardware/02-domestic-npu-boxes
  - title: 🟦 通用迷你主机
    details: Mac mini、Strix Halo 五杰、Intel/高通、树莓派——本地大模型性价比之王在这里
    link: /hardware/03-minipc-workstations
  - title: ⚖️ 数据纪律
    details: 官方宣称与社区实测分开；查不到写「—」；价格是快照，采购前以当期页面为准
    link: /hardware/00-specs-glossary
---

## 三条核心结论

1. **本地大模型性价比之王 = AMD Strix Halo 128GB**（零刻 GTR9 Pro ¥12999 起 / GMKtec EVO-X2 $1799）：96GB 可分配显存跑 70B 量化，120B MoE 流畅。
2. **MoE 模型改变游戏规则**：dense 70B 在 256 GB/s 下只有个位数 tok/s，GPT-OSS-120B 这类 MoE 能到约 40 tok/s——选型前先定模型结构。
3. **TOPS 是营销，带宽是真相**：厂商标称的 TOPS 多为稀疏峰值；LLM decode 速度 ≈ 带宽 ÷ 模型字节数。

## 快速入口

| 需求 | 入口 |
|---|---|
| 建立芯片概念 | [芯片发展代际速览](/chips/01-chip-generations) |
| 为本地 LLM 选机器 | [通用迷你主机 · 对比总表](/hardware/03-minipc-workstations) |
| 安防视频结构化 / 多路推理 | [国产芯片 · 对比总表](/hardware/02-domestic-npu-boxes) |
| 机器人 / CUDA 生态刚需 | [NVIDIA 系 · 对比总表](/hardware/01-nvidia-jetson-dgx) |
| 读不懂参数表 | [规格参数概念手册](/hardware/00-specs-glossary) |
| 写 AgentOS 材料 | [AgentOS 概念解读与全景](/concepts/agentos) |

> 数据核实日期：首轮 2026-11-03 ｜ 维护：xca + Kimi Claw ｜ [GitHub 仓库](https://github.com/wangshuang12138-beep/ai-frontier-kb)
