import '../styles/globals.css';
import Layout from '../components/Layout';
import { MDXProvider } from '@mdx-js/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import CodeStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import TranslatedBy from '@components/TranslatedBy';
import Pagination from '@components/Pagination';
import Card from '@components/Card';
import * as MDXComponents from '@components/MDXComponents';
import type { AppProps } from 'next/app';

const mdxComponents = {
  Card,
  Pagination,
  TranslatedBy,
  code: ({ className, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || '');
    return match ? <SyntaxHighlighter
      language={match[1]}
      PreTag="div"
      style={CodeStyle}
      {...props}
    >
      {props.children}
    </SyntaxHighlighter> : <code className={className} {...props} />;
  },
  blockquote: (props: any) => <blockquote
    className="bg-gray-100 rounded p-4 my-4 border text-stone-600 mdx-component"
    {...props}
  >
    {props.children}
  </blockquote>,
  ...MDXComponents,
};

function MyApp({
  Component,
  pageProps
}: AppProps) {
  return (
    <MDXProvider components={mdxComponents}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
}

export default MyApp;

