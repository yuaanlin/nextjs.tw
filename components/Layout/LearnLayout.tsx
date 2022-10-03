import Nestedset from './Nestedset';
import routes from '../LearnRoutes.json';
import findTitleInNestedManifest from '../../utils/findTitleInNestedManifest';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { type PropsWithChildren, type FC, useState } from 'react';
import type { NestedsetProps } from './type';

function LearnLayout(props: PropsWithChildren<{}>) {
  const router = useRouter();
  const title = findTitleInNestedManifest(router.pathname, routes);
  return (
    <div className="mx-auto container mt-8 pb-32 z-20 flex">
      <Head>
        <title>{title} | Next.js 繁體中文官方教學</title>
        <meta
          name="og:description"
          content="透過互動問答的方式帶你從零開始學習 JavaScrip 、 React 及 Next.js 框架來開發一個完整的網頁前端應用程式。"
        />
        <meta name="keyword" content="Next.js, React, 開發框架, 靜態渲染, 動態渲染, 網站, 網頁應用程式, 中文, 教學" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="og:image" content="/og.jpg"/>
        <meta content="@vercel" name="twitter:site"/>
      </Head>
      <MiniLearnMenu className="block md:hidden fixed z-10 left-0 top-[80px]" title={title} />
      <aside
        className="z-10 h-screen sticky hidden
         md:flex md:flex-col md:w-[300px] md:min-w-[300px] md:mr-4 md:pr-5"
      >
        <LearnMenu />
      </aside>
      <div className="w-full overflow-hidden docs mt-14 md:mt-0">
        {props.children}
      </div>
    </div>
  );
}

const LearnMenu = () => {
  const { pathname } = useRouter();
  return (
    <div className="pb-6">
      {
        routes.map((item, key) => (
          <div className="heading" key={key}>
            <Nestedset item={item} level={0} pathname={pathname} />
          </div>
        ))
      }
    </div>
  );
};

interface MiniLearnProps {
  className?: string
  title: string
}

const MiniLearnMenu: FC<MiniLearnProps> = (props) => {
  const { className, title } = props;
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={`w-full flex flex-col bg-white ${className}`}>
      <button
        className="w-full border-b"
        onClick={() => setIsOpen(!isOpen)}>
        <span className="w-full h-[56px] flex gap-5 items-center mx-auto container">
          {
            isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            )
          }
          <p>
            {title}
          </p>
        </span>
      </button>
      <div
        className={`w-full overflow-y-scroll flex flex-col 
        bg-white shadow-lg rounded-b-lg
        ${isOpen ? 'block' : 'hidden'}`}>
        <div className="`w-full h-[500px] mx-auto container">
          {
            routes.map((item, key) => (
              <Nestedset key={key} item={item} level={0} pathname={pathname} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default LearnLayout;
