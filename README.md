# 浪浪小舖電商平台

![首圖](https://i.imgur.com/hg9zomC.png)

### 使用技術

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)

# 😸 浪浪小舖 Loves dog & cat | 電商網站

- [網站前台](https://asiating.github.io/week6_vite/#/)
- [網站後台](https://asiating.github.io/week6_vite/#/admin/products)

## ⭐ 作品簡介

#### 作品說明

為了能讓浪浪能有更好的生活，而有了這個網站的啟發，希望客戶能有同樣的愛心來一起幫助流浪貓狗，或者購買自家毛孩的周邊商品!

> 希望您有一顆愛浪浪的心，他們都是非常可愛的。

## ⭐ 專案說明
### 使用技術

1. **技術堆疊：**
   這是一個使用 `Vue.js` 和 `Vite` 建置的網站，以提供高效的前端開發和更好的性能。
2. **路由管理：**
   專案使用 `Vue Router` 來管理前端應用程式的路由，以確保流暢的頁面切換。
3. **狀態管理：**
   利用 `pinia` 來有效地管理和共享應用程式中的狀態。
4. **API路徑統一管理：**
   通過統一的配置 `.env` 文件，有效地管理整個應用程式中的API路徑，以提高程式碼的可維護性。
5. **布局和樣式：**
   使用 `Bootstrap 5` 和 `Sass` 實現網站的布局，以及進行樣式的擴展和自定義。前後台均有 `RWD`，最小可支援375px的螢幕尺寸。
6. **動畫效果：** 使用 `AOS` 增加頁面動畫效果，提升使用者體驗。
7. **UI元件庫：**
   整合了 `Bootstrap Icons`、`Swiper`和`Vue Loading Overlay`，以實現的良好的使用者體驗。
8. **後台管理系統：**
    開發了一個基礎的後台管理系統，提供管理者取得訂單通知，查看和管理訂單、建立產品、建立優惠券等功能。

### 前台

- **電商展示：** 首頁、產品列表、產品詳細介紹、、推薦商品、商品全站搜尋、分類檢索
- **關於品牌：** 關於品牌故事及精神
- **常見問題：** 購物說明、退換貨政策
- **電商購物車：** 加入購物車、刪除、修改數量、使用優惠券、送出訂單
- **搜索：** 產品查詢

### 後台

- 管理者登入
- **產品管理：** 新增、刪除、編輯、查閱商品、多張商品上傳、排序商品圖片
- **優惠券管理：** 新增、刪除、編輯、查閱優惠券、表單驗證
- **訂單管理：** 刪除、編輯、查閱訂單、勾選商品進度使否付款

---


## 畫面展示 - 前台

### ⭐ 首頁 ⭐

#### 中小型尺寸折疊菜單樣式

![表頭](https://i.imgur.com/ua6f1mT.gif)

#### 商品輪播介紹

![首頁輪播](https://i.imgur.com/4Ks8p6n.gif)

#### 客戶評價

![客戶評價](https://i.imgur.com/4tJzx7V.png)

### ⭐ 商品頁 ⭐

#### 商品頁加入購物車功能以及動畫效果

![加入購物車功能](https://i.imgur.com/2az4tSi.gif)


### ⭐ 購物車 ⭐

#### 使用優惠券

![使用優惠券](https://i.imgur.com/rPnge8T.gif)



#### 訂購資訊驗證

![訂購資訊驗證](https://i.imgur.com/tp5BAFZ.png)


## 畫面展示 - 後台

### ⭐ 商品管理 ⭐

![商品管理1](https://i.imgur.com/pg2dwbY.png)

![商品管理2](https://i.imgur.com/9xv2gT3.png)

### ⭐ 訂單管理 ⭐

#### 更改訂單狀態或是資訊

![商品管理1](https://i.imgur.com/62XCdgA.gif)


### ⭐ 優惠管理 ⭐

#### 表單驗證 : 依照優惠券種類來給予限制並避免不合理的輸入

![表單驗證](https://i.imgur.com/gGLf08j.png)

#### 使用日期選擇器套件來處理優惠期限

![日期選擇器](https://i.imgur.com/cn25zBr.png)



Node.js 版本建議為：18.17.1 以上

## 安裝與使用

以下將會引導你如何安裝此專案到你的電腦上。

### 取得專案

```bash
git clone https://github.com/hexschool/vite-template.git
```

### 移動到專案資料夾

```bash
cd vite-template
```

## 環境變數

請將 `.env.example` 複製一份並命名為 `.env`，並將裡面的環境變數設定為你的值。

```bash
cp .env.example .env
```

### 安裝套件

```bash
npm install
```

### 啟動開發環境

```bash
npm run dev
```

### 打包專案

```bash
npm run build
```

### 部署專案

```bash
npm run deploy
```

## 套件

以下是已經安裝在專案中的套件。

- axios (^1.6.5)
- bootstrap (^5.3.2)
- bootstrap-icons (^1.11.3)
- dotenv (^16.3.1)
- pinia (^2.1.7)
- vue (^3.3.11)
- vue-router (^4.2.5)
- @vitejs/plugin-vue (^4.5.2)
- eslint (^8.49.0)
- eslint-config-standard (^^17.1.0)
- eslint-import-resolver-alias (^1.1.2)
- eslint-plugin-import (^2.29.1)
- eslint-plugin-n (^16.6.2)
- eslint-plugin-promise (^6.1.1)
- eslint-plugin-vue (^9.20.1)
- gh-pages (^6.1.1)
- sass (^1.69.7)
- vite (^5.0.10)
- vite-plugin-eslint (^1.8.1)

## 資料夾結構

- `.vscode`：Visual Studio Code 的設定檔
- `dist`：打包後的檔案
- `public`：公開的靜態檔案
- `src`：專案的程式碼
  - `assets`：靜態檔案
  - `components`：元件
  - `router`：路由
  - `store`：狀態管理
  - `views`：頁面
  - `App.vue`：根元件
  - `main.js`：進入點
- `.env.example`：環境變數範本
- `.eslintrc.js`：ESLint 設定檔
- `.gitignore`：Git 忽略檔案
- `.nvmrc`：Node.js 版本
- `index.html`：進入點 HTML
- `package-lock.json`：套件版本鎖定
- `package.json`：專案資訊
- `README.md`：專案說明
- `vite.config.js`：Vite 設定檔

## gh-pages 部署說明

內建預設是使用 gh-pages 進行部署，因此只需要在專案根目錄下執行以下指令即可。

```bash
npm run deploy
```

（請記得將 `.env` 中的 `REPOSITORY_NAME` 改為你的專案名稱即可。）
# week6_vite
