import { useEffect, useState } from 'react';

function NotTranslateYet() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl('https://nextjs.org/' + window.location.pathname);
  }, []);

  return <div>
    <h1>這個頁面還沒翻譯 😭</h1>
    <p>
      你可以前往
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="mx-2 text-[#0070f3] hover:underline"
      >
        {url}
      </a>
      查看原文版。
    </p>
    <p>
      如果你願意幫助我們，請提交 Pull Request 到
      <a
        href="https://github.com/yuaanlin/nextjs.tw"
        target="_blank"
        rel="noreferrer"
        className="mx-2 text-[#0070f3] hover:underline"
      >
        中文翻譯的 GitHub 儲存庫
      </a> 協助我們翻譯這篇文章。
    </p>
  </div>;
}

export default NotTranslateYet;
