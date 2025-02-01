import React from 'react';
import classNames from 'classnames';
import { selectCompany } from 'src/redux/Slice/companySlice';
import { MyCheckbox } from 'src/components/ui/MyCheckbox/MyCheckbox';
import { useAppDispatch } from 'src/redux/hooks';

import style from './TableRow.module.scss';
import { TableRowProps } from './TableRow.props';
import { TableCell } from '../TableCell';

export const TableRow = React.memo(({ id, name, address, isSelected }: TableRowProps) => {
  const dispatch = useAppDispatch();
  const handleSelect = () => {
    dispatch(selectCompany(id));
  };

  return (
    <tr className={classNames(style.tablerow, isSelected && style.selected)}>
      <td className={style.tablecell}>
        <MyCheckbox name={'Выделить'} isSelected={isSelected} handleSelect={handleSelect} />
      </td>
      <TableCell id={id} value={name} />
      <TableCell id={id} value={address} />
    </tr>
  );
});
