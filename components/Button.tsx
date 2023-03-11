import { PropsWithChildren } from 'react';
import Link from 'next/link';

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
  <Link
    href={url}
    className="mdx-component mt-8"
  >
    <a
      className={`inline-block px-8 py-2 text-center
      rounded-lg cursor-pointer shadow-[rgba(0,118,255,.39)]
      shadow-lg ${basicStyle} ${hoverStyle}`}
    >
      {content}
    </a>
  </Link>
);
