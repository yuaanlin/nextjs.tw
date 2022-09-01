import Link from 'next/link';

function TopNav() {
  return <div className="fixed bg-white top-0 w-screen">
    <div
      className="mx-auto container mt-4 flex justify-between items-center">
      <Link href="/" passHref>
        <a>
          <img
            src="/nextjs-logo.png"
            alt="nextjs-logo"
            className="w-24 mr-24"
          />
        </a>
      </Link>
      <div className="hidden md:flex flex-grow justify-end items-center">
        <Link href="/docs/getting-started" passHref>
          <a className="mr-8 opacity-50 transition-all hover:opacity-100">
            官方文件
          </a>
        </Link>
        <Link href="/examples" passHref>
          <a className="mr-8 opacity-50 transition-all hover:opacity-100">
            使用案例
          </a>
        </Link>
        <a
          href="https://nextjs.org"
          className="mr-8 opacity-50 transition-all hover:opacity-100"
        >
          英文官網
        </a>
        <Link href="/learn/foundations/about-nextjs" passHref>
          <button
            className="bg-[#0070f3] text-white text-center py-2 px-6
          transition-all rounded-lg hover:bg-[#0080f6]"
          >
            學習
          </button>
        </Link>
      </div>
    </div>
  </div>;
}

export default TopNav;
