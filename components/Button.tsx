import { PropsWithChildren } from 'react';

interface Button {
  content: string;
  url: string;
  basicStyle: string;
  hoverStyle: string;
}

export default (
  {
    content,
    url,
    basicStyle,
    hoverStyle
  }: PropsWithChildren<Button>
) => (
  <button className="mdx-button-component mt-8">
    <a
      href={url}
      className={`inline-block px-8 py-2 text-center
      rounded-lg cursor-pointer shadow-[rgba(0,118,255,.39)]
      shadow-lg ${basicStyle} ${hoverStyle}`}
    >
      {content}
    </a>
  </button>
);
