# Whale Playwright Midscene

## 项目概述
`whale-playwright-midscene` 是一个使用 Playwright 进行测试的项目，同时集成了 `@midscene/web` 相关功能。该项目通过 `pnpm` 进行依赖管理，确保项目的依赖版本一致性和可重复性。

## 依赖说明
### 开发依赖
- `@midscene/web`: ^0.21.2
- `@playwright/test`: ^1.53.2
- `cross-env`: ^7.0.3

### 生产依赖
- `dotenv`: ^17.1.0

### 部分依赖详情
#### 1. `combined-stream`
- 版本: 1.0.8
- 依赖: `delayed-stream` (~1.0.0)
- 支持的 Node 版本: `>= 0.8`

#### 2. `commander`
- 版本: 10.0.1
- 支持的 Node 版本: `>=14`

#### 3. `color-convert`
- 版本: 2.0.1
- 依赖: `color-name` (~1.1.4)
- 支持的 Node 版本: `>=7.0.0`

## 脚本说明
```json
{
  "scripts": {
    "whale": "playwright test --config=playwright.config.ts",
    "whale:cache": "cross-env MIDSCENE_CACHE=true playwright test --config=playwright.config.ts",
    "whale:ui": "playwright test --config=playwright.config.ts --ui",
    "whale:ui:cache": "cross-env MIDSCENE_CACHE=true playwright test --config=playwright.config.ts --ui",
    "postinstall": "pnpm exec playwright install"
  }
}
```
- `whale`: 运行 Playwright 测试，使用 `playwright.config.ts` 作为配置文件。
- `whale:cache`: 在启用缓存的情况下运行 Playwright 测试。
- `whale:ui`: 以 UI 模式运行 Playwright 测试。
- `whale:ui:cache`: 在启用缓存的情况下以 UI 模式运行 Playwright 测试。
- `postinstall`: 在项目安装完成后，执行 `pnpm exec playwright install` 来安装 Playwright 所需的浏览器。

## .env 文件说明
项目使用 `dotenv` 来管理环境变量，你需要在项目根目录下创建一个 `.env` 文件，并添加以下内容：
```plaintext
OPENAI_API_KEY="sk-..."
OPENAI_BASE_URL="https://dashscope.aliyuncs.com/compatible-mode/v1"
MIDSCENE_MODEL_NAME="qwen-vl-max-latest"
MIDSCENE_USE_QWEN_VL=1
MIDSCENE_CACHE=1
```
### 变量解释
- `OPENAI_API_KEY`: OpenAI 的 API 密钥，用于与 OpenAI 服务进行交互。请将 `"sk-..."` 替换为你自己的有效密钥。
- `OPENAI_BASE_URL`: OpenAI 服务的基础 URL。这里使用的是阿里云的兼容模式 URL，如果你使用的是其他服务或有不同的需求，可以修改此 URL。
- `MIDSCENE_MODEL_NAME`: Midscene 使用的模型名称，这里指定为 `"qwen-vl-max-latest"`。
- `MIDSCENE_USE_QWEN_VL`: 是否使用 Qwen-VL 模型，设置为 `1` 表示启用。
- `MIDSCENE_CACHE`: 是否启用缓存，设置为 `1` 表示启用。

## 安装步骤
1. 克隆项目到本地：
```bash
git clone <项目仓库地址>
cd whale-playwright-midscene
```
2. 安装依赖：
```bash
pnpm install
```
安装完成后，`postinstall` 脚本会自动执行，安装 Playwright 所需的浏览器。

## 运行测试
### 普通测试
```bash
pnpm run whale
```

### 启用缓存的测试
```bash
pnpm run whale:cache
```

### UI 模式测试
```bash
pnpm run whale:ui
```

### 启用缓存的 UI 模式测试
```bash
pnpm run whale:ui:cache
```

## 注意事项
- 确保 Node 版本符合项目依赖的要求，部分依赖对 Node 版本有特定的要求。
- 如果在运行测试过程中遇到问题，可以检查 `playwright.config.ts` 配置文件是否正确。
- 请确保 `.env` 文件中的环境变量配置正确，否则可能会导致与 API 服务的交互失败。