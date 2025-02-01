import React, { useState } from 'react';

import styles from './FormAddCompany.module.scss';
import { useAppDispatch } from '../../../redux/hooks';
import { addCompany } from '../../../redux/Slice/companySlice';

export const FormAddCompany = () => {
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');

  const dispatch = useAppDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (companyName && companyAddress) {
      dispatch(addCompany({ name: companyName, address: companyAddress, isSelected: false }));
    }
  };
  return (
    <form className={styles.form_box} onSubmit={handleSubmit}>
      <input
        placeholder="Название компании"
        type="text"
        value={companyName}
        onChange={(element) => setCompanyName(element.target.value)}
        required
      />
      <input
        placeholder="Адрес компании"
        type="text"
        value={companyAddress}
        onChange={(element) => setCompanyAddress(element.target.value)}
        required
      />
      <button type="submit">Создать компанию</button>
    </form>
  );
};
