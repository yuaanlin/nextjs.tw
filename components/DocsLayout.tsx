import TopNav from './TopNav';
import SearchInput from './Input/SearchInput';
import { routes } from './DocsRoutes';
import { Key, PropsWithChildren } from 'react';
import Link from 'next/link';

function DocsLayout(props: PropsWithChildren<{}>) {
  return <div className="w-screen">
    <TopNav/>
    <div className="mx-auto container docs mt-8 pb-32 z-20 flex">
      <aside
        className="z-10 h-screen sticky hidden
         md:flex md:flex-col md:w-[300px] md:min-w-[300px] md:mr-4 md:pr-5"
      >
        <SearchInput className="my-6"/>
        <DocsMenu />
        {/* <p className="opacity-50">
          這裡會放文章目錄<br/>但現在還沒有 👷
        </p> */}
      </aside>
      <div className="w-full overflow-hidden">
        {props.children}
      </div>
    </div>
  </div>;
}

const DocsMenu = () => {

  type NestedsetProps = {
    item?: any | undefined;
    level: any;
  }

  const Nestedset = ({ item, level=0 }: NestedsetProps) => {
    if(item.children) {
      return (<>
        <h4
          className={`${item.index ? 'my-5 text-[1.2rem] font-semibold' : ''}`}
        >
          {item.title}
        </h4>
        { item.children && (<NestedsetUL item={item} level={level} />) }
      </>);
    }
    if(item.path) {
      return (<NestedsetLI item={item} level={level}/>);
    }
    return (<></>);
  };

  const NestedsetUL = ({ item, level=0 }: NestedsetProps) => {
    return (
      <ul className={`${level > 0 ? `level-${level}` : ''} pl-4`}>
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
          my-[18px] text-base text-[#444]`}
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

export default DocsLayout;
