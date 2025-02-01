import React, { useState } from 'react';

import style from './TableHeader.module.scss';
import { selectAllCompany } from '../../../redux/Slice/companySlice';
import { MyCheckbox } from '../../ui/MyCheckbox/MyCheckbox';
import { useAppDispatch } from '../../../redux/hooks';

export const TableHeader = () => {
  const [selectAll, setSelectAll] = useState(false);
  const dispatch = useAppDispatch();
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    dispatch(selectAllCompany(!selectAll));
  };
  return (
    <thead className={style.container}>
      <tr className={style.box_tr}>
        <th>Компании</th>
        <th>
          <MyCheckbox
            name={'Выделить все '}
            text={'Выделить все '}
            colorCheckbox={''}
            handleSelectAll={handleSelectAll}
          />
        </th>
      </tr>
    </thead>
  );
};
