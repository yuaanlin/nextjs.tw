import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  hrefs: string[]
}

function Pagination(props: Props) {
  const router = useRouter();

  const isEnabled = (href: string) => {
    const i = props.hrefs.findIndex(r => r === href);
    const curr = props.hrefs.findIndex(r => r===router.pathname);
    return i === curr;
  };

  return <div className="flex mdx-component">
    {props.hrefs.map((link, i) => <Link
      key={i}
      href={link}
      passHref
    >
      <a className="text-white py-3">
        <div
          className={'w-8 h-8 rounded-lg mr-2 flex justify-center' +
            ' items-center transition-all bg-[#0080f6] '
            + (isEnabled(link)
              ? 'bg-opacity-100 shadow-[rgba(0,118,255,.39)] shadow-lg'
              : 'bg-opacity-0 hover:bg-opacity-10')}
        >
          <p className={isEnabled(link) ? 'text-white' : 'text-[#0080f6]'}>
            {i + 1}
          </p>
        </div>
      </a>
    </Link>)}
  </div>;

}

export default Pagination;
