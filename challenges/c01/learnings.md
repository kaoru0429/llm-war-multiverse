# C-01 學習與反思 (Learnings)

## 1. 挑戰總結
本挑戰建立了專案的數據基礎，將非結構化的文檔 (`docs/`) 轉化為結構化的數據集 (`data/llm_models.csv`)。

## 2. 遇到的問題與解決方案
*   **問題**: 使用 PowerShell 的 `mkdir` 指令時，無法同時創建多層級或多個目錄 (語法錯誤)。
*   **解決**: 改用逗號分隔或分開執行指令。在未來的自動化腳本中需特別注意跨平台 Shell 的兼容性。

## 3. 關鍵洞察
*   **數據標準化**: 早期定義 schema (如 CSV 的列名) 對後續挑戰至關重要。`Architecture` 欄位的分類 (Dense vs MoE) 直接決定了視覺化的品質。
*   **MoE 的數據特徵**: 在視覺化時，必須區分 Total Parameters 和 Active Parameters，否則無法體現 MoE 的優勢。

## 4. 對後續挑戰的建議
*   **C-02 (前端)**: 可以直接讀取 `data/llm_models.csv` 來生成互動式圖表。
*   **C-03 (API)**: 應將此 CSV 作為初始資料庫的種子數據 (Seed Data)。
