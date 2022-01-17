import { atom } from 'recoil';
import { CatValues } from './types';

export const catFormValuesState = atom<CatValues>({
  key: 'catFormValuesState',
  default: {
    catType: null,
    catAge: null,
    goodBoyGrade: 7,
    catName: null,
  },
});
