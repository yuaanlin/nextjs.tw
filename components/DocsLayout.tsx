import TopNav from './TopNav';
import { PropsWithChildren } from 'react';

function DocsLayout(props: PropsWithChildren<{}>) {
  return <div className="w-screen">
    <TopNav/>
    <div className="w-screen fixed">
      <div className="mx-auto container docs pb-32 pt-16">
        <div className="fixed z-10 w-72 h-screen pt-12">
          <p className="opacity-50">
            這裡會放文章目錄<br/>但現在還沒有 👷
          </p>
        </div>
      </div>
    </div>
    <div className="mx-auto container docs pb-32 pt-16 z-20">
      <div className="w-full pl-72">
        {props.children}
      </div>
    </div>
  </div>;
}

export default DocsLayout;
