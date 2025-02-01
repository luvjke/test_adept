import React from 'react';

import { Table } from '../../components/common/Table';
import { FormAddCompany } from '../../components/common/FormAddCompany';

export const TablePage = () => {
  return (
    <main>
      <Table />

      <FormAddCompany />
    </main>
  );
};
