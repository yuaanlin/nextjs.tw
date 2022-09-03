function Footer() {
  return (
    <div className="w-screen bg-stone-50 py-24 flex">
      <div className="container mx-auto">
        <img src="/vercel.svg" alt="vercel" className="w-24" />
        <p className="text-stone-400 mt-4 text-sm">
          Copyright © 2022 Vercel, Inc. All rights reserved.
        </p>
        <p className="text-stone-400 mt-6 text-sm">
          本網站為社群維護的繁體中文 Next.js
          官方文件，所有翻譯內容由開源社群經由 GitHub 提交，遵循 MIT
          開源授權協議。
        </p>
        <p className="text-stone-400 my-3 text-sm">
          網站原始內容來自 Next.js 官方網站，版權歸 Vercel 公司及 nextjs.org
          網站所有。
        </p>
        <p className="text-stone-400 my-3 text-sm">
          本網站與 nextjs.org 無任何關聯，請將任何問題反應至
          <a
            href="https://github.com/yuaanlin/nextjs.tw"
            target="_blank"
            rel="noreferrer"
            className="mx-2 text-[#0070f3] hover:underline"
          >
            中文翻譯的 GitHub 儲存庫
          </a>
          。
        </p>
      </div>
    </div>
  );
}

export default Footer;
