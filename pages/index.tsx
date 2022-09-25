import Footer from '@components/Footer';
import Link from 'next/link';
import Head from 'next/head';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (<>
    <Head>
      <title>Next.js - React 開發框架 | Next.js 繁體中文官方文件</title>
      <meta
        content="生產級且能夠規模化開發的 React 應用程式開發框架。
        世界的領先企業使用由 Vercel 開發的 Next.js 來開發靜態渲染與動態渲染的網站和網頁應用程式。"
        name="description"
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
    <div className="mx-auto container py-32 mt-24">
      <h1
        className="text-center font-extrabold text-4xl md:text-7xl lg:text-8xl
       leading-tight">
        一款
        <br className="md:hidden"/>
        適用於生產環境 <br/>
        的 React 框架
      </h1>
      <p
        className="text-center text-stone-500 text-lg
        md:text-xl mt-12 leading-relaxed font-light">
        Next.js 提供你最佳的開發體驗，同時帶給你所有你在生產環境中需要的功能：靜態渲染、伺服器端渲染、
        Typescript 語法支援、智能打包、路由預先載入 ... 及更多，而且不需要任何手動設定。
      </p>
      <div className="text-center mt-16">
        <Link href="/learn/foundations/about-nextjs" passHref>
          <button
            className="bg-[#0070f3] text-white text-center w-48 py-3
          transition-all rounded-lg shadow-[rgba(0,118,255,.39)]
          shadow-lg hover:bg-[#0080f6] mx-4"
          >
            開始學習
          </button>
        </Link>
        <Link href="/docs/getting-started" passHref>
          <button
            className="w-48 py-3 rounded-lg shadow-xl shadow-lg mx-4
        transition-all hover:shadow-xl mt-6 md:mt-0">
            官方文件
          </button>
        </Link>
      </div>
    </div>
    <Footer/>
  </>);
};

export default Home;
