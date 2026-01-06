# 學習任務與進度追蹤系統  
Study Task & Progress Tracker

## 一、專案簡介
本專案為一套全端網頁應用系統，目的在於協助使用者管理學習相關任務，
包含課堂作業、期末報告、考試準備與專題進度追蹤。

系統提供視覺化前端介面，並透過後端 RESTful API 與資料庫進行串接，
實作完整的 CRUD（Create、Read、Update、Delete）功能。

---

## 二、系統功能
- 新增學習任務（Create）
- 查詢所有 / 單一學習任務（Read）
- 更新任務內容與進度狀態（Update）
- 刪除已完成或不需要的任務（Delete）
- 任務進度狀態管理：
  - pending（尚未開始）
  - in-progress（進行中）
  - completed（已完成）

---

## 三、技術選型
### 前端（Frontend）
- React
- Vite
- JavaScript
- CSS / UI Framework（可自行選用）

### 後端（Backend）
- Node.js
- Express
- MongoDB（使用 Mongoose）
- RESTful API 架構

### 其他工具
- Git / GitHub（版本控制）
- Docker（MongoDB 容器）
- Postman（API 測試）

---

## 四、系統架構說明
前端透過 HTTP Request 呼叫後端 API，
後端負責處理商業邏輯並與 MongoDB 資料庫進行資料存取，
再將結果以 JSON 格式回傳至前端顯示。

