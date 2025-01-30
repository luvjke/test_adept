import React from 'react';

import style from './TableHeader.module.scss';
import { MyCheckbox } from '../MyCheckbox/MyCheckbox';

export const TableHeader = () => {
  return (
    <thead className={style.container}>
      <tr className={style.box_tr}>
        <th>Компании</th>
        <th>
          <MyCheckbox inputId={'0'} name={'ваыва'} text={'Выделить все '} colorCheckbox={''} />
        </th>
      </tr>
    </thead>
  );
};
