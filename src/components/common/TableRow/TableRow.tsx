import React from 'react';

import style from './TableRow.module.scss';
import { TableRowProps } from './TableRow.props';
import { TableCell } from '../TableCell';
import { MyCheckbox } from '../MyCheckbox/MyCheckbox';

export const TableRow = ({ id, name, address }: TableRowProps) => {
  return (
    <tr className={style.tablerow}>
      <MyCheckbox inputId={id} name={'Выделить'} colorCheckbox={''} />
      <TableCell value={name} />
      <TableCell value={address} />
    </tr>
  );
};
