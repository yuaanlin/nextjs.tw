import DocsLayout from './DocsLayout';
import LearnLayout from './LearnLayout';
import TopNav from '../TopNav';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

function Layout(props: PropsWithChildren<{}>) {
  const { pathname } = useRouter();
  const rootPath = pathname.split('/')[1];

  const getLayout = () => {
    switch (rootPath) {
      case 'docs':
        return (<DocsLayout>{props.children}</DocsLayout>);
      case 'learn':
        return (<LearnLayout>{props.children}</LearnLayout>);
      default:
        return (<>{props.children}</>);
    }
  };

  return (<div className="w-full">
    <TopNav/>
    { getLayout() }
  </div>);
}

export default Layout;
