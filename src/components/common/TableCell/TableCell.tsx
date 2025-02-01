import React from 'react';

import style from './TableCell.module.scss';
import { TableCellProps } from './TableCell.props';
import { useAppDispatch } from '../../../redux/hooks';
import { editCompany } from '../../../redux/Slice/companySlice';

export const TableCell = ({ id, value }: TableCellProps) => {
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(editCompany({ id, name: e.target.value }));
  };

  return (
    <td className={style.tablecell}>
      <input type="text" value={value} name={String(value)} onChange={handleChange} />
    </td>
  );
};
