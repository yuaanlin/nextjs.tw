import { PropsWithChildren } from 'react';
export default ({children}: PropsWithChildren<{}>) => (
  <button className="inline-block px-8 mt-8 text-white text-center bg-[#0070f3] rounded-lg cursor-pointer shadow-[rgba(0,118,255,.39)] shadow-lg hover:opacity-90">
    {children}
  </button>
)