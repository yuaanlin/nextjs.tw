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
   ```
   git clone git@github.com:YourName/nextjs.tw.git
   ```
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

To maintain the consistency of the coding style, this project have enabled the [ESLint](https://eslint.org/) rules which helps us to contribute this project with same coding style. For example, the indent width. If you are using vscode, consider reading [this article](https://www.robinwieruch.de/vscode-eslint/)  to learn how to use ESLint in vscode.


## Fork
1. 請在本專案點選右上角 [Fork](https://github.com/yuaanlin/nextjs.tw/fork)，然後點選 Create fork！

   _建立完成後代表已經複製一份到你的帳號底_

2. 到自己的repo把剛Fork下來的專案clone到你的本機端
   ```
   git clone git@github.com:YourName/nextjs.tw.git
   ```
3. 設定第二組遠端儲存庫位址
   ```
   git remote add nextjstw https://github.com/yuaanlin/nextjs.tw.git 
   ```
4. 查看目前的 origin 遠端資訊，確認是從自己的repo clone下來，並確認已添右第二組遠端儲存庫位址
   ```
   git remote -v
   ```
   ```
   nextjstw        https://github.com/yuaanlin/nextjs.tw.git (fetch)
   nextjstw        https://github.com/yuaanlin/nextjs.tw.git (push)
   origin  git@github.com:YourName/nextjs.tw.git (fetch)
   origin  git@github.com:YourName/nextjs.tw.git (push)
   ```
5. 在每次修改檔案前，請先進行 git pull 動作，確保所有檔案為最新狀態
   ```
   git pull nextjstw
   ```
   如果pull完發現有更新，請先進行merge
   ```
   git merge nextjstw/main
   ```
6. 現在可以來開始開源開發工作了，到本專案 Issues 認領任務，避免與其他人編譯同一份文件
7. 修改完檔案後再推回自己專案
   ```
   git add .
   git commit -m "<填寫版本資訊>"
   git push
   ```
8. 回到自己repo看到更新了你剛才push的修改檔案，這時候我們可以發送 PR了

   點選上方 Pull requests

   接下來點擊 New pull request

   _注意: 請務必確認所有修改的內容_

   然後確定一下上方要發 Pull Request 的 目標 repo 分支以及自己的 repo 分支

   如果確認沒問題就可以按下 Create pull request