---
title: Meta 分析：Llama 4 的華麗轉身
date: 2025-11-30
tags: [faction, meta, llama, moe]
---

# Meta: Llama 4 的 MoE 革命

> "We were wrong." — Meta 在轉向 MoE 後的坦白。

## 1. Llama 4 的轉向 (2025.04)

**從密集型到 MoE 的全面投降**
在 Llama 3 時代，Meta 為了「穩定性與簡單性」堅持使用 Dense 架構。然而，Llama 4 的發布標誌著這一堅持的結束。

**Llama 4 模型規格**:
- **Llama 4 Scout**: 109B 總參數 / 17B 啟動 (16 專家)。
- **Llama 4 Maverick**: **400B 總參數** / 17B 啟動 (**128 專家**)。

## 2. 為什麼轉向？

**數據不會說謊**：
- **成本削減**: 相比 Llama 3，Llama 4 的 MoE 架構將計算成本降低了 **83%**。
- **效能飛躍**: Maverick 達到了 GPT-4 級別的性能，但每 Token 成本僅為其 **1/9**。

Meta 意識到，在 Agentic 時代，繼續堅持密集型架構是不可持續的。MoE 提供的「專家分工」與「低推理成本」是開源模型保持競爭力的唯一路徑。

## 3. 開源生態的王者

Meta 的策略依然是 **"算力換生態"**，但在 Llama 4 之後，這個生態變得更加高效：
- **Maverick**: 定義了開源 MoE 的標準。
- **Scout**: 成為代碼與長上下文任務的首選輕量級模型。

Meta 的轉身證明了：**MoE 已經從「可選優化」變成了「行業標準」。**