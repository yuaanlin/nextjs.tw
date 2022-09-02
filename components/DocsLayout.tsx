import TopNav from './TopNav';
import SearchInput from './Input/SearchInput';
import { PropsWithChildren } from 'react';

function DocsLayout(props: PropsWithChildren<{}>) {
  return <div className="w-screen">
    <TopNav/>
    <div className="mx-auto container docs mt-8 pb-32 z-20 flex">
      <aside
        className="z-10 h-screen sticky hidden
         md:flex md:flex-col md:w-[300px] md:min-w-[300px] md:mr-4 md:pr-5"
      >
        <SearchInput className="my-6"/>
        <p className="opacity-50">
          這裡會放文章目錄<br/>但現在還沒有 👷
        </p>
      </aside>
      <div className="w-full">
        {props.children}
      </div>
    </div>
  </div>;
}

export default DocsLayout;
