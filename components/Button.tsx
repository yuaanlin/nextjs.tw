import { PropsWithChildren } from 'react';
export default ({children, content, url}: PropsWithChildren<{content: string, url: string}>) => (
  <button>
    <a href={url} className="inline-block px-8 py-2 mt-8 text-white text-center bg-[#0070f3] rounded-lg cursor-pointer shadow-[rgba(0,118,255,.39)] shadow-lg hover:opacity-90">
      {content}
    </a>
  </button>
)