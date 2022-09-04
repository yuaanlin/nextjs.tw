import { PropsWithChildren } from 'react';

export default ({ children }: PropsWithChildren<{}>) => (
  <div className="px-4 py-1 my-8 bg-[#f7f7f7]">
    {children}
  </div>
);
