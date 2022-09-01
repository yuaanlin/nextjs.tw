import TopNav from './TopNav';
import { PropsWithChildren } from 'react';

function DocsLayout(props: PropsWithChildren<{}>) {
  return <div className="w-screen">
    <TopNav />
    <div className="mx-auto container docs pb-32 pt-16">
      {props.children}
    </div>
  </div>;
}

export default DocsLayout;
