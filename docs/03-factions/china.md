---
title: 中國勢力分析：Moonshot vs DeepSeek
date: 2025-11-30
tags: [faction, china, deepseek, kimi]
---

# 中國勢力：Moonshot vs DeepSeek

根據最新的效能資料和基準測試，中國模型在 2025 年已成為全球 AI 架構戰爭中的關鍵力量。

## 1. Moonshot vs DeepSeek：誰更強？

根據最新的效能資料和基準測試，**沒有絕對的勝者** — 兩者的優勢取決於具體的應用場景。

### 推理和多步驟問題解決
**Moonshot AI（Kimi K2 Thinking）在此領域表現更優。**
- **人類最後的考試 (Humanity's Last Exam)**: Kimi K2 Thinking 達到 **44.9%**，超越 GPT-5 的 41.7% 和 Claude Sonnet 4.5 的 32.0%。
- **BrowseComp**: Kimi K2 達到 **60.2%**，領先 GPT-5 的 54.9%。
- **HMMT 2025 (數學競賽)**: Kimi K2 達到 96.7%，超越 GPT-5 的 95.1%。

**DeepSeek R1** 則專注於推理任務，通過強化學習訓練，在複雜問題求解、數學和編碼上表現出色。

### 編碼和軟體工程
**GPT-5 在此領域略佔優勢，但 Kimi K2 緊隨其後。**
- **SWE-bench Verified**: GPT-5 (74.9%) > Kimi K2 (71.3%)。
- **LiveCodeBench v6**: Kimi K2 (53.7%) > DeepSeek V3 (46.9%) > GPT-4.1 (44.7%)。

### 成本效率：壓倒性優勢
**Moonshot AI 的 Kimi K2 具有壓倒性優勢。**
- **訓練成本**: 僅為 **460 萬美元**。
- **API 定價**: 每百萬輸入令牌 0.15 美元，輸出 2.50 美元 — 比 OpenAI 和 Anthropic 便宜 6-10 倍。
- **DeepSeek**: 推理成本約為 OpenAI 模型成本的 2%。

### DeepSeek 版本對比
- **DeepSeek V3**: 通用型語言模型，適合快速回應任務 (內容創作、對話)，使用高效的 Mixture-of-Experts 架構。
- **DeepSeek R1**: 專注推理模型，通過強化學習訓練，回應速度較慢但推理深度高。

---

## 2. 多模態與自訂能力

### Moonshot Kimi-VL
**更全面的視覺語言整合。**
- **MoE 視覺語言模型**: 128K 擴展上下文，僅啟動 2.8B 參數。
- **MoonViT**: 原生解析度視覺編碼器，InfoVQA 83.2 分。
- **應用**: 線上搜尋、深度思考、多模態推理。

### DeepSeek Janus Pro
**專注於雙向多模態生成。**
- **7B 參數多模態模型**: 解耦架構。
- **生成能力**: 支援文字到圖像生成 (384x384)。
- **微調生態**: 提供更成熟的 LoRA、SFT 工具鏈，適合自訂訓練。

### 選擇建議
| 需求 | 推薦 |
| :-- | :-- |
| **視覺理解/長文檔** | Moonshot Kimi-VL |
| **文生圖 + 理解** | DeepSeek Janus Pro |
| **自訂微調** | DeepSeek (生態完善) |
| **API 整合** | Kimi K2 Thinking (OpenAI 相容) |

---

## 3. Perplexity 戰場：整合與退場

### Moonshot 的進場 (2025.11)
Perplexity 整合 Kimi K2 Thinking，這是一個戰略里程碑：
- **唯一中國國產模型**: 與 GPT-5.1 同時加入。
- **後訓練合作**: CEO Aravind Srinivas 表示將使用 Kimi K2 進行後訓練。
- **商業考量**: 平衡成本結構，提供差異化選擇。

### DeepSeek 的「退場」 (2025.03-08)
DeepSeek 曾暫時從 Perplexity 移除，原因包括：
1. **商業衝突**: 免費強大的 R1 威脅到 Perplexity 的高階訂閱 (Max) 價值。
2. **去審查化成本**: 自行託管並移除審查 (R1-1776) 的成本過高。
3. **場景不適配**: DeepSeek 專注深度推理 (慢)，與 Perplexity 的快速搜尋 (RAG) 場景衝突。

**結論**: Moonshot 留在 Perplexity 是因為其成本效益與搜尋場景的適配性；DeepSeek 的「退場」則是戰術性調整。

---

## 4. 關鍵數據總結

| 指標 | DeepSeek V3 | Kimi K2 | 備註 |
| :-- | :-- | :-- | :-- |
| **架構** | MoE (671B/37B) | MoE (1T/32B) | 超稀疏設計 |
| **訓練成本** | **$5.5M** | **$4.6M** | 僅為西方模型的 1-5% |
| **API 定價** | 極低 (ChatGPT 的 2%) | 極低 (ChatGPT 的 10%) | 顛覆商業模式 |
| **社群** | GitHub 活躍，微調資源多 | 社群情感佳，API 易用 | |