import { atom, selector } from 'recoil';
import { CatValues, PrimaryCatValues, SecondaryCatValues } from './types';

export const catFormValuesState = atom<CatValues>({
  key: 'catFormValuesState',
  default: {
    catType: null,
    goodBoyGrade: 7,
    catName: null,
    catBreed: null,
    catSex: 'm',
    catBirthdate: new Date(),
  },
  // TODO: remove effects
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((catValues) => {
        console.debug('cat form values: ', catValues);
      });
    },
  ],
});

export const catFormPrimaryValuesState = selector<PrimaryCatValues>({
  key: 'catFormPrimaryValuesState',
  get: ({ get }) => {
    const catFormValues = get(catFormValuesState);

    return {
      catName: catFormValues.catName,
      catBirthdate: catFormValues.catBirthdate,
      catSex: catFormValues.catSex,
      catBreed: catFormValues.catBreed,
    };
  },
});

export const catFormSecondaryValuesState = selector<SecondaryCatValues>({
  key: 'catFormSecondaryValuesState',
  get: ({ get }) => {
    const catFormValues = get(catFormValuesState);

    return {
      catType: catFormValues.catType,
      goodBoyGrade: catFormValues.goodBoyGrade,
    };
  },
});
