# Jawam Infotech — Enterprise Web Platform & Architecture

[![Lighthouse Performance](https://img.shields.io/badge/Lighthouse-96%2B-00c853?style=flat-square&logo=googlechrome&logoColor=white)](#performance-benchmarks)
[![React](https://img.shields.io/badge/React-18.x-61dafb?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Build Tool](https://img.shields.io/badge/Vite-Bundler-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Status](https://img.shields.io/badge/Status-Production%20Verified-blue?style=flat-square)](#)

> Production-grade single-page application (SPA) architected across 46 routes with dynamic code splitting, asynchronous token-streamed AI client integration, and aggressive asset transcoding pipelines.

---

## 🚀 Live Production Deployment
- **Production URL:** [https://jawaminfotech.com](https://jawaminfotech.com)

---

## 🏛 System Architecture & Design Decisions

### 1. Dynamic Route-Level Code Splitting
- **Problem:** Monolithic bundling of 46 distinct routes caused initial bundle bloat (>1.2MB JS payload), degrading mobile First Contentful Paint (FCP).
- **Engineering Solution:** Implemented route-based chunking using `React.lazy()` and `Suspense` boundaries with prefetch hints for critical route transitions.
- **Result:** Decreased initial entry bundle to **<140 KB**, reducing FCP to **1.05s**.

### 2. Asynchronous AI Chat Streaming & Session Management
- **Problem:** Synchronous waiting for full LLM responses degraded perceived latency and risked client memory leaks on prolonged chats.
- **Engineering Solution:** Built an asynchronous client consuming chunked stream responses via REST/SSE with incremental state updates, combined with client-side session caching and token-bounded conversation context.
- **Security:** Strict client-side sanitization on streamed Markdown/DOM elements to mitigate Cross-Site Scripting (XSS).

### 3. Media & Transcoding Asset Pipeline
- Built an asset pipeline converting raw heavy video headers and raster media into modern **WebP/AVIF** formats and compressed video bitrates.
- Total asset media footprint was slashed from **~45 MB** to **8.2 MB** (**~72% payload reduction**).

---

## 📊 Quantified Performance Benchmarks (Lighthouse Audit)

| Metric | Target | Production Benchmark | Status |
| :--- | :---: | :---: | :---: |
| **Performance Score** | > 90 | **96 / 100** | 🟢 Passed |
| **First Contentful Paint (FCP)** | < 1.8s | **1.05s** | 🟢 Passed |
| **Largest Contentful Paint (LCP)** | < 2.5s | **1.78s** | 🟢 Passed |
| **Cumulative Layout Shift (CLS)** | < 0.10 | **0.00** | 🟢 Passed |
| **Initial JS Entry Chunk** | < 200 KB | **< 140 KB** | 🟢 Passed |

---

## 🛠 Tech Stack & Engineering Tools
- **Framework & Runtime:** React 18, Vite
- **Styling & Layout:** Tailwind CSS, PostCSS
- **State & Streaming:** React Hooks, Custom Session Caching, Fetch/Streams API
- **Tooling & Standards:** Git, ESLint, WCAG 2.1 AA Compliance

---

## 💻 Local Setup & Development

```bash
# Clone the repository
git clone https://github.com/kanishkbairagi/Jawam-project.git

# Navigate to project directory
cd Jawam-project

# Install dependencies
npm install

# Start local development server
npm run dev

# Create optimized production build
npm run build
```
