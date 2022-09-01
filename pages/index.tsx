import TopNav from '../components/TopNav';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return <div className="w-screen">
    <TopNav />
    <div className="mx-auto container pt-32">
      <p className="text-center opacity-60 mb-8">
        👷‍ 繁體中文文檔製作中，敬請期待
      </p>
      <h1 className="text-center font-extrabold text-8xl leading-tight">
        一款適用於生產環境 <br />
        的 React 框架
      </h1>
      <p className="text-center text-stone-500 text-xl mt-12">
        Next.js gives you the best developer experience with all the features
        you need for production: hybrid static & <br/>
        server rendering, TypeScript support, smart bundling,
        route pre-fetching, and more. No config needed.
      </p>
    </div>
  </div>;
};

export default Home;
