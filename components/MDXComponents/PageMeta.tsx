import Head from 'next/head';

interface Props {
  title?: string;
  image?: string;
  keywords?: string;

  // MDX will wrap the text into a <p> tag, so we need to extract from it
  children?: {
    props: {
      children: string;
    }
  };
}

function PageMeta(props: Props) {
  return <Head>
    {props.title && <title>{props.title} | Next.js 繁體中文官方文件</title>}
    {props.children && <>
      <meta name="description" content={props.children?.props.children} />
      <meta name="og:description" content={props.children?.props.children} />
    </>}
    {props.image && <meta property="og:image" content={props.image} />}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="robots" content="index, follow" />
    {props.keywords && <meta name="keyword" content={props.keywords} />}
  </Head>;
}

export default PageMeta;
