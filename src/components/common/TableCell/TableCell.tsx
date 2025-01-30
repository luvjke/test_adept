import React from 'react';

import style from './TableCell.module.scss';
import { TableCellProps } from './TableCell.props';

export const TableCell = ({ value }: TableCellProps) => {
  return <td className={style.tablecell}>{value}</td>;
};
