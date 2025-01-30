import React from 'react';

import { TableHeader } from '../TableHeader';
import style from './Table.module.scss';
import { companies } from '../../../common/utils';
import { TableRow } from '../TableRow';
export const Table = () => {
  return (
    <table className={style.table}>
      <TableHeader />
      <tbody>
        {companies.map(({ id, name, address }) => (
          <TableRow key={id} id={id} name={name} address={address} />
        ))}
      </tbody>
    </table>
  );
};
