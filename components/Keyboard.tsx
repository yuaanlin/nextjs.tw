import { PropsWithChildren } from 'react';

export default ({ children }: PropsWithChildren<{}>) => (
  // eslint-disable-next-line max-len
  <span className="p-1 text-[#666666] bg-[#fafafa] border border-[#eaeaea] rounded-[5px]">
    {children}
  </span>
);
