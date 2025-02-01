import React from 'react';
import classNames from 'classnames';

import style from './TableRow.module.scss';
import { TableRowProps } from './TableRow.props';
import { TableCell } from '../TableCell';
import { MyCheckbox } from '../../ui/MyCheckbox/MyCheckbox';
import { useAppDispatch } from '../../../redux/hooks';
import { selectCompany } from '../../../redux/Slice/companySlice';

export const TableRow = ({ id, name, address, isSelected }: TableRowProps) => {
  const dispatch = useAppDispatch();
  const handleSelect = () => {
    dispatch(selectCompany(id));
  };

  return (
    <tr className={classNames(style.tablerow, isSelected && style.selected)}>
      <td className={style.tablecell}>
        <MyCheckbox
          name={'Выделить'}
          colorCheckbox={''}
          isSelected={isSelected}
          handleSelect={handleSelect}
        />
      </td>
      <TableCell id={id} value={name} />
      <TableCell id={id} value={address} />
    </tr>
  );
};
