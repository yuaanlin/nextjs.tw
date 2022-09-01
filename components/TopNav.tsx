import Link from 'next/link';

function TopNav() {
  return <div
    className="mx-auto container mt-4
      flex justify-between items-center">
    <Link href="/" passHref>
      <a><img src="/nextjs-logo.png" alt="nextjs-logo" className="w-24" /></a>
    </Link>
    <Link href="/docs/getting-started" passHref>
      <a>官方文件</a>
    </Link>
    <Link href="/learn" passHref>
      <a>學習</a>
    </Link>
    <Link href="/examples" passHref>
      <a>使用案例</a>
    </Link>
    <a href="https://nextjs.org">
      <p>英文官網</p>
    </a>
  </div>;
}

export default TopNav;
