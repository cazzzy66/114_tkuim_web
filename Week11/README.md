# Week11 Lab — 報名系統


## 環境需求
- Docker & Docker Compose
- Node.js 18+


## 啟動流程
1. 在 `Week11/docker` 下啟動 MongoDB 容器：


cd Week11/docker
docker compose up -d


## 2.等待容器啟動後

cd ../server
npm install
cp .env.example .env 
npm run dev

## 3.