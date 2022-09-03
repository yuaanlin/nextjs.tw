# nextjs.tw

繁體中文版 Next.js 官方文檔及教學。

> NOTE: This is a COMMUNITY PROJECT, not associated with Vercel or nextjs.org .
> 這是一個由社群維護的開源專案，和 Vercel 公司或 nextjs.org 沒有任何關聯。

👷 Work in progress.

## Developing

To develop locally:

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your
   own GitHub account and then
   [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device.

2. Create a new branch:
   ```
   git checkout -b MY_BRANCH_NAME
   ```
3. Enable pnpm:
   ```
   corepack enable pnpm
   ```
4. Install the dependencies with [pnpm](https://pnpm.io/):
   ```
   pnpm install
   ```
5. Start developing and watch for code changes:
   ```
   pnpm dev
   ```
6. In a new terminal, run `pnpm types` to compile declaration files from
   TypeScript.

   _Note: You may need to repeat this step if your types get outdated._

## ESLint

為了維護程式碼風格一致性，這個專案已經開啟了 [ESLint](https://eslint.org/) 規則來確保所有協助我們翻譯的開發者都可以使用相同的程式碼風格進行開發，例如縮進的寬度。如果你目前是使用 vscode，你可以閱讀 [這篇文章](https://www.robinwieruch.de/vscode-eslint/) 來學習如何在 vscode 裡面使用 eslint。

To maintain the consistency of the coding style, this project have enabled the [ESLint](https://eslint.org/) rules which helps us to contribute this project with same coding style. For example, the indent width. If you are using vscode, consider reading [this article](https://www.robinwieruch.de/vscode-eslint/) to learn how to use ESLint in vscode.
