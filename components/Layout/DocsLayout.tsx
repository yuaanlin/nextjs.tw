import SearchInput from '../Input/SearchInput';
import routes from '../DocsRoutes.json';
import findTitleInNestedManifest from '../../utils/findTitleInNestedManifest';
import { FC, Key, PropsWithChildren } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import MiniMenu from '@components/Layout/MiniMenu';
import type { NestedsetProps, MiniMenuProps } from './type';

function DocsLayout(props: PropsWithChildren<{}>) {
  const router = useRouter();
  const title = findTitleInNestedManifest(router.pathname, routes);
  return(<>
    <div className="mx-auto container mt-8 pb-32 z-20 flex">
      <Head>
        <title>{title} | Next.js 繁體中文官方文件</title>
        <meta
          content="生產級且能夠規模化開發的 React 應用程式開發框架。
        世界的領先企業使用由 Vercel 開發的 Next.js 來開發靜態渲染與動態渲染的網站和網頁應用程式。"
          name="description"
        />
        <meta
          name="og:description"
          content="Next.js 。"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="og:image" content="/og.jpg"/>
        <meta content="@vercel" name="twitter:site"/>
        <meta name="robots" content="index, follow"/>
        <meta
          name="keyword"
          content="Next.js, React, 開發框架, 靜態渲染, 動態渲染, 網站, 網頁應用程式, 中文, 教學"
        />
      </Head>
      <MiniDocsMenu
        className="block md:hidden fixed z-10 left-0 top-[80px]"
        title={title}
        pathname={router.pathname} />
      <aside
        className="z-10 h-screen sticky hidden
         md:flex md:flex-col md:w-[300px] md:min-w-[300px] md:mr-4 md:pr-5"
      >
        <SearchInput className="my-6"/>
        <DocsMenu />
      </aside>
      <div className="w-full overflow-hidden docs mt-14 md:mt-0">
        {props.children}
      </div>
    </div>
  </>);
}

const Nestedset = ({ item, level, pathname }: NestedsetProps) => {
  if(item.children) {
    return (<>
      <h4
        className={`${item.index ? 'my-5 text-[1.2rem] font-semibold' : ''}`}
      >
        {item.title}
      </h4>
      { item.children && (<NestedsetUL item={item} level={level} pathname={pathname} />) }
    </>);
  }
  if(item.path) {
    return (<NestedsetLI item={item} level={level} pathname={pathname}/>);
  }
  return (<></>);
};

const NestedsetUL = ({ item, level=0, pathname }: NestedsetProps) => {
  return (
    <ul className={`${level > 0 ? `level-${level}` : ''} pl-4`}>
      { item.children.map((item: any, key: Key | null | undefined) => (
        <Nestedset key={key} item={item} level={level + 1} pathname={pathname} />
      )) }
    </ul>
  );
};

const NestedsetLI = ({ item, level=0, pathname }: NestedsetProps) => {
  return (
    <li
      className={`${level > 0 ? `level-${level}` : ''}
          my-[18px] text-base text-[#444]
          ${pathname === item.path ? 'font-semibold' : ''}
        `}
    >
      <Link href={item.path} passHref>
        <a>{item.title}</a>
      </Link>
    </li>
  );
};

const DocsMenu = () => {
  const { pathname } = useRouter();

  return (
    <div className="overflow-y-auto pb-6">
      {
        routes.map((item, key) => (
          <div className="heading" key={key}>
            <Nestedset item={item} level={0} pathname={pathname}/>
          </div>
        ))
      }
    </div>
  );
};

const MiniDocsMenu: FC<MiniMenuProps> = (props) => {
  const { className, title, pathname } = props;
  return (
    <MiniMenu title={title} className={className}>
      {
        routes.map((item, key) => (
          <Nestedset
            key={key}
            item={item}
            level={0}
            pathname={pathname as string} />
        ))
      }
    </MiniMenu>
  );
};

export default DocsLayout;
