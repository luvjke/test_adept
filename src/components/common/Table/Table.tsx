import React from 'react';

import { TableHeader } from '../TableHeader';
import style from './Table.module.scss';
import { TableRow } from '../TableRow';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { companysSelector } from '../../../redux/Slice/selectors';
import { deleteCompany } from '../../../redux/Slice/companySlice';

export const Table: React.FC = () => {
  const [visibleCompanies, setVisibleCompanies] = React.useState(30);
  const companies = useAppSelector(companysSelector);
  const dispatch = useAppDispatch();

  const observerRef = React.useRef(null);

  React.useEffect(() => {
    const loadMoreCompanies = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setVisibleCompanies((prev) => prev + 10);
      }
    };

    const observer = new IntersectionObserver(loadMoreCompanies, {
      threshold: 0.5,
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
  }, [companies]);

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
          <div ref={observerRef} className={style.observer} />
        </table>
      </div>
      <button onClick={handleDelete}>Удалить </button>
    </>
  );
};
