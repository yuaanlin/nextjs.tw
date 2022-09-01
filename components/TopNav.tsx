import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import NextLogo from "./NextLogo";
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

function TopNav() {
	const [ menuToggle, setMenuToggle ] = useState(false);

	useEffect(() => {
		menuToggle ? disablePageScroll() : enablePageScroll();
		return () => enablePageScroll();
	}, [ menuToggle ])

    return (
        <div className="fixed bg-white top-0 w-screen z-50">
            <div className="mx-auto container bg-white h-[80px] flex justify-between items-center">
				<nav className="py-4 flex flex-1 flex-wrap justify-between items-center">
					<Link href="/" passHref>
						<a><NextLogo /></a>
					</Link>
					<div className="flex">
						<div className="flex flex-row items-center justify-center space-x-8">
							<div className="fixed z-[-1] top-[80px] bottom-0 left-0 right-0 px-4 bg-white invisible data-active:visible md:relative md:z-[0] md:top-[0] md:data-active:top-[0] md:px-0 md:visible md:border-0 md:space-x-8 md:transition-none" data-active={menuToggle}>
								<NavbarItem href="/docs/getting-started" path="docs">官方文件</NavbarItem>
								<NavbarItem href="/examples" path="examples">使用案例</NavbarItem>
								<a href="https://nextjs.org" className="flex py-[10px] px-[8px] md:inline-flex md:py-0 md:px-0 opacity-50 transition-opacity hover:opacity-100">
									英文官網
								</a>
							</div>
							<Link href="/learn/foundations/about-nextjs" passHref>
								<button className="bg-[#0070f3] text-white text-center py-2 px-6 transition-all rounded-lg hover:bg-[#0080f6]">
									學習
								</button>
							</Link>
						</div>
						<button
							type="button"
							className="w-[36px] h-[36px] ml-[5px] flex items-center justify-center md:hidden focus:outline-none"
							onClick={() => setMenuToggle(!menuToggle)}
						>
							<div>
								<span className={`block w-[22px] h-[1px] translate-y-[-4px] transition-all duration-300 bg-gray-900 rotate-[0deg] data-active:rotate-[-45deg] data-active:translate-y-[1px] `} data-active={menuToggle}></span>
								<span className={`block w-[22px] h-[1px] translate-y-[4px] transition-all duration-300 bg-gray-900 rotate-[0deg] data-active:rotate-45 data-active:translate-y-0`} data-active={menuToggle}></span>
							</div>

						</button>
					</div>
				</nav>
            </div>
        </div>
    );
}

type ItemProps = {
	href: string;
	path: string;
	children: string,
};

const NavbarItem = ({ href, path, children }: ItemProps) => {
	const { pathname } = useRouter();

	const active = pathname.split("/")[1] === path;

	return (
		<Link href={href} passHref>
			<a className="flex py-[10px] px-[8px] transition-opacity opacity-50 hover:opacity-100 data-active:text-black data-active:opacity-100 hover:data-active:opacity-100 md:inline-flex md:py-0 md:px-0 md:data-active:text-[#0070f3]" data-active={active}>
				{ children }
			</a>
		</Link>
	)
}

export default TopNav;
