import TopNav from './TopNav';
import { PropsWithChildren } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
function LearnLayout(props: PropsWithChildren<{}>, ) {
  const router = useRouter()
  const currentPath = router.route.split("/")[router.route.split("/").length - 1]

  return <div className="w-screen">
    <TopNav/>
    <div className="mx-auto container docs pb-32 pt-16 z-20 flex">
      <aside className="z-10 w-72 h-screen pt-12 fixed hidden md:block">
        <p className="opacity-50">
          這裡會放學習進度和分數<br/>但現在還沒有 👷
        </p>
      </aside>
      <div className="w-full md:pl-72">
      <div className="mb-12">
        <Link href="/learn/foundations/about-nextjs" passHref>
          <button 
          className={`px-3.5 py-2 ${currentPath === "about-nextjs" ?`text-white bg-[#0070f3] shadow-[rgba(0,118,255,.39)] shadow-lg` : "text-[#0070f3]"} mr-1 text-center transition-all rounded-lg cursor-pointer hover:opacity-90`}>
            1
          </button>
        </Link>
        <Link href="/learn/foundations/about-nextjs/what-is-nextjs" passHref>
          <button 
          className={`px-3.5 py-2 ${currentPath === "what-is-nextjs" ?`text-white bg-[#0070f3] shadow-[rgba(0,118,255,.39)] shadow-lg` : "text-[#0070f3]"} mr-1 text-center transition-all rounded-lg cursor-pointer hover:opacity-90`}>
            2
          </button>
        </Link>
      </div>
        {props.children}
      </div>
    </div>
  </div>;
}

export default LearnLayout;
