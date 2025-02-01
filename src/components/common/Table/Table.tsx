import React from 'react';
import { deleteCompany } from 'src/redux/Slice/companySlice';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { companysSelector } from 'src/redux/Slice/selectors';
import { Button } from 'src/components/ui/Button';
import { useObserver } from 'src/hooks/useObserver';

import { TableHeader } from '../TableHeader';
import style from './Table.module.scss';
import { TableRow } from '../TableRow';

export const Table: React.FC = () => {
  const companies = useAppSelector(companysSelector);
  const dispatch = useAppDispatch();

  const { observerRef, visibleCompanies } = useObserver(companies);
  const handleDelete = () => {
    dispatch(deleteCompany());
  };
  return (
    <>
      <div className={style.container}>
        <table className={style.table_box}>
          <TableHeader />
          <tbody>
            {companies.slice(0, visibleCompanies).map(({ id, name, address, isSelected }) => (
              <TableRow key={id} id={id} name={name} address={address} isSelected={isSelected} />
            ))}
          </tbody>
        </table>
        <div ref={observerRef} className={style.observer} />
      </div>
      <Button version={'remove'} label={'Удалить '} tag="button" onClick={handleDelete} />
    </>
  );
};
