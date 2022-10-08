import { type FC, useState, type ReactNode } from 'react';

const MiniMenu: FC<{
    className?: string
    title: string
    children?: ReactNode
}> = (props) => {
  const { className, title, children } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={`w-full flex flex-col bg-white ${className}`}>
      <button
        className="w-full border-b focus:no-underline focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}>
        <span
          className="w-full h-[56px] flex gap-5 items-center mx-auto container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 transition duration-300
            ${ isOpen && 'rotate-[90deg]' }`}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
          <p>
            {title}
          </p>
        </span>
      </button>
      <div
        className={`w-full overflow-y-scroll flex flex-col 
        bg-white shadow-lg rounded-b-lg`}>
        <div
          className={`w-full mx-auto container transition-all duration-300
          ${ isOpen ? 'h-[500px]' : 'h-0' }`}
          onClick={() => setIsOpen(false)}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MiniMenu;
