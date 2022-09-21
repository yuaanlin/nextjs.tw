import type { FC } from 'react';

export const MDXTable: FC<
  JSX.IntrinsicElements['table']
  > = ({ children, ...rest }: JSX.IntrinsicElements['table']) => {
    return (
      <table
        {...rest}
        className="table-auto border-collapse w-full my-5">
        {children}
      </table>
    );
  };

export const MDXThead: FC<
  JSX.IntrinsicElements['thead']
  > = ({ children, ...rest }: JSX.IntrinsicElements['thead']) => {
    return (
      <thead {...rest} className="p-2 border">
        {children}
      </thead>
    );
  };

export const MDXBody: FC<
  JSX.IntrinsicElements['tbody']
  > = ({ children, ...rest }: JSX.IntrinsicElements['tbody']) => {
    return (
      <tbody {...rest} className="p-2">
        {children}
      </tbody>
    );
  };

export const MDXTr: FC<
  JSX.IntrinsicElements['tr']
  > = ({ children, ...rest }: JSX.IntrinsicElements['tr']) => {
    return (
      <tr {...rest} className="p-2 border-y">
        {children}
      </tr>
    );
  };

export const MDXTh: FC<
  JSX.IntrinsicElements['th']
  > = ({ children, ...rest }: JSX.IntrinsicElements['th']) => {
    return (
      <th {...rest} className="p-2 text-start">
        {children}
      </th>
    );
  };

export const MDXTd: FC<
  JSX.IntrinsicElements['td']
  > = ({ children, ...rest }: JSX.IntrinsicElements['td']) => {
    return (
      <td {...rest} className="p-2">
        {children}
      </td>
    );
  };
