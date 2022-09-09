import routes from '../LearnRoutes.json';
import { useRouter } from 'next/router';
import { Key, PropsWithChildren } from 'react';
import Link from 'next/link';

function LearnLayout(props: PropsWithChildren<{}>) {
  return (
    <div className="mx-auto container mt-8 pb-32 z-20 flex">
      <aside
        className="z-10 h-screen sticky hidden
         md:flex md:flex-col md:w-[300px] md:min-w-[300px] md:mr-4 md:pr-5"
      >
        <LearnMenu />
      </aside>
      <div className="w-full overflow-hidden docs">
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
                } inline-block my-2 text-sm`}
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
  return (
    <div className="pb-6">
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
