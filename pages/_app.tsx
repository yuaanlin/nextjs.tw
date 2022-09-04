import '../styles/globals.css';
import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from 'mdx/types';
import type { AppProps } from 'next/app';

const components = {
  h1: (props) => (<h1 id="p" style={{ color: 'red' }} {...props} />)
} as MDXComponents;
function MyApp({
  Component,
  pageProps
}: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />;
    </MDXProvider>
  );
}

export default MyApp;

