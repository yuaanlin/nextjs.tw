import Link from 'next/link';
import { Key } from 'react';
import type { NestedsetProps } from './type';

interface Props extends NestedsetProps {
  pathname: string
}

// 用現在的pathname內容有沒有includes該項目的path來做樣式判斷
const Nestedset = ({ item, level, pathname }: Props) => {
  if(item.children) {
    return (
      <>
        {
          item.index ? <h4
            className={
              `${item.index ? 'my-1 mt-5 text-[0.79em] font-semibold' : ''}`
            }>
            { item.title }
          </h4> : <Link href={item.path} passHref>
            <a
              className={`${level === 1 && pathname.includes(item.path)
                ? 'font-bold' : ''
              } inline-block my-2 text-sm`}
            >{item.title}</a>
          </Link>
        }
        { item.children && <NestedsetUL item={item} level={level} pathname={pathname} />}
      </>
    );
  }
  if(item.path) {
    return (<NestedsetLI item={item} level={level} pathname={pathname} />);
  }
  return (<></>);
};

const NestedsetUL = ({ item, level=0, pathname }: Props) => {
  return (
    <ul
      className={`
      ${level > 0 ? `level-${level}` : ''} 
      ${level === 1 && !pathname.includes(item.path)
        ? 'max-h-0 overflow-hidden' : 'max-h-fit'}
      pl-4
      `}>
      { item.children.map((item: any, key: Key | null | undefined) => (
        <Nestedset key={key} item={item} level={level + 1} pathname={pathname} />
      )) }
    </ul>
  );
};

const NestedsetLI = ({ item, level=0, pathname }: Props) => {
  return (
    <li
      className={`${level > 0 ? `level-${level}` : ''}
          my-4 text-sm text-[#444]
          ${pathname === item.path ? 'font-semibold' : ''}
        `}
    >
      <Link href={item.path} passHref>
        <a className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-[#0070f3] mr-2" />
          {item.title}
        </a>
      </Link>
    </li>
  );
};

export { Nestedset as default, NestedsetUL, NestedsetLI };
