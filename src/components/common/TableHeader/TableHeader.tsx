import React, { useState } from 'react';
import { useAppDispatch } from 'src//redux/hooks';
import { selectAllCompany } from 'src/redux/Slice/companySlice';
import { MyCheckbox } from 'src/components/ui/MyCheckbox/MyCheckbox';

import style from './TableHeader.module.scss';

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
            handleSelectAll={handleSelectAll}
          />
        </th>
      </tr>
    </thead>
  );
};
