import { PropsWithChildren } from 'react';
import Link from 'next/link';

interface Card {
  title: string;
  description: string;
  url: string;
}

export default function Card(props: PropsWithChildren<Card>) {
  return (
    <Link href={props.url}>
      <div
        className={`
          group rounded mx-1 p-6 text-gray-900 cursor-pointer 
          next-tw-shadow hover:next-tw-hover-shadow 
          transition mdx-component`}
      >
        <a>
          <b className="block mb-2">{props.title}</b>
          <small className="text-gray-500 transition group-hover:text-gray-900">
            {props.description}
          </small>
        </a>
      </div>
    </Link>
  );
}
