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
        className="w-full border-b"
        onClick={() => setIsOpen(!isOpen)}>
        <span className="w-full h-[56px] flex gap-5 items-center mx-auto container">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ?
                'M19.5 8.25l-7.5 7.5-7.5-7.5' :
                'M8.25 4.5l7.5 7.5-7.5 7.5'} />
          </svg>
          <p>
            {title}
          </p>
        </span>
      </button>
      <div
        className={`w-full overflow-y-scroll flex flex-col 
        bg-white shadow-lg rounded-b-lg
        ${isOpen ? 'block' : 'hidden'}`}>
        <div className="`w-full h-[500px] mx-auto container">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MiniMenu;
