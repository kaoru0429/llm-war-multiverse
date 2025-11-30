---
title: Anthropic 分析：反 OpenAI 的 DNA
date: 2025-11-30
tags: [faction, anthropic, claude, mcp]
---

# Anthropic: "死都不跟 ChatGPT 一樣"

Anthropic 的每一項技術決策，本質上都是對 OpenAI 哲學的反叛。

## 1. 2021 大出走：價值觀的分裂

**"Walked away from millions"**
2021 年，Dario Amodei 帶領 15 名員工（佔當時 OpenAI 10%）離開，放棄了數百萬美元的股權。
- **原因**: 不滿 OpenAI 在接受微軟投資後轉向 "Fast AI" (速度優先於安全)。
- **結果**: 2025 年，Anthropic 的 7 位創辦人**全部還在**；而 OpenAI 的創辦團隊幾乎分崩離析。

## 2. Claude 的架構定位

**密集型 Transformer + Constitutional AI**
與其他 MoE 模型不同，Claude（特別是 Sonnet 4.5）依然保持著某種「密集型精品」的特質（儘管有分析指出其實質已採納 MoE 效率優勢）。

- **Constitutional AI**: 安全不是事後補丁 (RLHF)，而是從訓練開始就內建的「憲法」。
- **Hybrid Reasoning**: Sonnet 4.5 引入雙模式系統（快速推理 vs 深度思考），在不改變架構的前提下平衡效能。
- **應用定位**: 專業場景、長文檔分析、需要高信任度的任務。

## 3. 生態系統革命：MCP + Skills

Anthropic 選擇了 **開放標準** 而非 **封閉平台**，徹底區隔於 OpenAI 的 Custom GPTs。

### Model Context Protocol (MCP)
- **理念**: "N+M 而非 N×M"。AI 連接工具的 USB 標準。
- **開放性**: 任何模型都能用，不綁定 Claude。
- **現狀**: 2025 年已有數百個 MCP Servers (GitHub, Zapier, Notion, Filesystem)。

### Skills
- **自動化**: 自動識別並啟用需要的專業知識，無需手動切換 GPT。
- **可攜性**: 一次開發，跨 Claude 產品線通用。

**對比 OpenAI**：
| 特性 | Claude (MCP) | ChatGPT (GPTs) |
| :-- | :-- | :-- |
| **開放性** | ✅ 開放標準 | ❌ 封閉平台 |
| **控制權** | ✅ 開發者自行託管 | ❌ 平台審核 |
| **穩定性** | ✅ 長期協議承諾 | ❌ 策略頻繁變動 |

## 4. 結論
Claude 的「保守」（拒絕回答、強調安全）在 Agentic 時代變成了優勢。長時間運行的 Agent 需要的是**可信任**與**可控性**，這正是 Anthropic 從第一天就堅持的 DNA。