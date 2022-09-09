import routes from '../LearnRoutes.json';
import { useRouter } from 'next/router';
import { Key, PropsWithChildren } from 'react';
import Link from 'next/link';
function LearnLayout(props: PropsWithChildren<{}>) {
  return (
    <div className="mx-auto container pb-32 pt-16 z-20 flex">
      <aside className="z-10 w-72 pt-12 md:block">
        <p className="opacity-50">
          這裡會放分數<br/>但現在還沒有 👷
        </p>
        <LearnMenu />
      </aside>
      <div className="w-full md:pl-72 docs">
        {props.children}
      </div>
    </div>
  );
}

type NestedsetProps = {
  item: any | undefined;
  level: number;
}

const LearnMenu = () => {
  const { pathname } = useRouter();
  // 用現在的pathname內容有沒有includes該項目的path來做樣式判斷
  const Nestedset = ({ item, level }: NestedsetProps) => {
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
                } inline-block my-1 text-[0.88em]`}
              >{item.title}</a>
            </Link>
          }
          { item.children && <NestedsetUL item={item} level={level} />}
        </>
      );
    }
    if(item.path) {
      return (<NestedsetLI item={item} level={level}/>);
    }
    return (<></>);
  };

  const NestedsetUL = ({ item, level=0 }: NestedsetProps) => {
    return (
      <ul
        className={`
      ${level > 0 ? `level-${level}` : ''} 
      ${level === 1 && !pathname.includes(item.path)
        ? 'max-h-0 overflow-hidden' : 'max-h-fit'}
      pl-4
      `}>
        { item.children.map((item: any, key: Key | null | undefined) => (
          <Nestedset key={key} item={item} level={level + 1} />
        )) }
      </ul>
    );
  };

  const NestedsetLI = ({ item, level=0 }: NestedsetProps) => {
    return (
      <li
        className={`${level > 0 ? `level-${level}` : ''}
          my-1 text-[0.88em] text-[#444]
          ${pathname === item.path ? 'font-semibold' : ''}
        `}
      >
        <Link href={item.path} passHref>
          <a>{item.title}</a>
        </Link>
      </li>
    );
  };
  return (
    <div className="overflow-y-auto pb-6">
      {
        routes.map((item, key) => (
          <div className="heading" key={key}>
            <Nestedset item={item} level={0} />
          </div>
        ))
      }
    </div>
  );
};

export default LearnLayout;
