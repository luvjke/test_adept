import React, { ChangeEvent } from 'react';
import { useAppDispatch } from 'src/redux/hooks';
import { editCompany } from 'src/redux/Slice/companySlice';
import { Input } from 'src/components/ui/Input';

import style from './TableCell.module.scss';
import { TableCellProps } from './TableCell.props';

export const TableCell = ({ id, value }: TableCellProps) => {
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(editCompany({ id, value: e.target.value }));
  };

  return (
    <td className={style.tablecell}>
      <Input type="text" value={value} onChange={handleChange} version={'custom'} />
    </td>
  );
};
