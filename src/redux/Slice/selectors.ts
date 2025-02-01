// export const названиеСелектора(начаниется со слова Selector) = (state: RootState) => state.Slice.state

import { RootState } from '../store';

export const companysSelector = (state: RootState) => state.companys.companies;
