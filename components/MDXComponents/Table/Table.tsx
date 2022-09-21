import type {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  TableHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes
} from 'react';

export const MDXTable: FC<
    DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>
  > = ({ children, ...rest }) => {
    return (
      <table
        {...rest}
        className="table-auto border-collapse w-full my-5">
        {children}
      </table>
    );
  };

export const MDXThead: FC<
    DetailedHTMLProps<
        HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement
      >
  > = ({ children, ...rest }) => {
    return (
      <thead {...rest} className="p-2 border">
        {children}
      </thead>
    );
  };

export const MDXTBody: FC<
    DetailedHTMLProps<
        TableHTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement
      >
  > = ({ children, ...rest }) => {
    return (
      <tbody {...rest} className="p-2">
        {children}
      </tbody>
    );
  };

export const MDXTr: FC<
    DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>
  > = ({ children, ...rest }) => {
    return (
      <tr {...rest} className="p-2 border-y">
        {children}
      </tr>
    );
  };

export const MDXTh: FC<
    DetailedHTMLProps<
        ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement
      >
  > = ({ children, ...rest }) => {
    return (
      <th {...rest} className="p-2 text-start">
        {children}
      </th>
    );
  };

export const MDXTd: FC<
    DetailedHTMLProps<
        TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement
      >
  > = ({ children, ...rest }: JSX.IntrinsicElements['td']) => {
    return (
      <td {...rest} className="p-2">
        {children}
      </td>
    );
  };
