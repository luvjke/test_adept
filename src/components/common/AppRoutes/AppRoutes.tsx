import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { RoutesMap } from '../../../common/constans';
import { TablePage } from '../../../pages/TablePage';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path={RoutesMap.MAIN} element={<TablePage />} />
      </Routes>
    </>
  );
};
