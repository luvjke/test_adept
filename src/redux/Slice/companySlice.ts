import { createSlice } from '@reduxjs/toolkit';

import { companies } from '../../common/utils';
import { CompanyInterface } from './types';

const initialState: { companies: CompanyInterface[] } = {
  companies: companies,
};

const companySlice = createSlice({
  name: 'companySlice',
  initialState,
  reducers: {
    addCompany: (state, action) => {
      const newCompany = { ...action.payload, isSelected: false };
      state.companies.unshift(newCompany);
    },
    deleteCompany: (state) => {
      state.companies = state.companies.filter((company) => !company.isSelected);
    },
    selectCompany: (state, action) => {
      const selectedCompany = state.companies.find((company) => company.id === action.payload);
      if (selectedCompany) {
        selectedCompany.isSelected = !selectedCompany.isSelected;
      }
    },
    selectAllCompany: (state, action) => {
      state.companies.forEach((company) => (company.isSelected = action.payload));
    },
    editCompany: (state, action) => {
      const index = state.companies.findIndex((company) => company.id === action.payload.id);
      if (index !== -1) {
        state.companies[index] = action.payload;
      }
    },
  },
});

export const { addCompany, deleteCompany, selectCompany, selectAllCompany, editCompany } =
  companySlice.actions;

export default companySlice.reducer;
