import TopNav from './TopNav';
import { PropsWithChildren } from 'react';
import Footer from '@components/Footer';

function DocsLayout(props: PropsWithChildren<{}>) {
  return <div className="w-screen">
    <TopNav/>
    <div className="mx-auto container docs pb-32 pt-16">
      {props.children}
    </div>
    <Footer/>
  </div>;
}

export default DocsLayout;
