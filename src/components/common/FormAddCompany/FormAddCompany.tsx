import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from 'src/redux/hooks';
import { addCompany } from 'src/redux/Slice/companySlice';
import { Button } from 'src/components/ui/Button';
import { Input } from 'src/components/ui/Input';

import styles from './FormAddCompany.module.scss';

export const FormAddCompany = () => {
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');

  const dispatch = useAppDispatch();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (companyName && companyAddress) {
      dispatch(addCompany({ name: companyName, address: companyAddress }));
    }
    setCompanyName('');
    setCompanyAddress('');
  };
  return (
    <form className={styles.form_box} onSubmit={handleSubmit}>
      <div className={styles.input_box}>
        <Input
          placeholder="Название компании"
          type="text"
          onChange={({ target }: ChangeEvent<HTMLInputElement>) => setCompanyName(target.value)}
          value={companyName}
          version={'advanced'}
        />
        <Input
          placeholder="Адрес компании"
          type="text"
          onChange={({ target }: ChangeEvent<HTMLInputElement>) => setCompanyAddress(target.value)}
          value={companyAddress}
          version={'advanced'}
        />
      </div>
      <Button label="Добавить компанию" type="submit" version="custom" />
    </form>
  );
};
