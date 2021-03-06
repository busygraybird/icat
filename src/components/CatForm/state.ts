import { atom, selector } from 'recoil';
import { CatValues } from './types';
import { PrimaryCatValues } from './PrimaryInfoForm/types';
import { SecondaryCatValues } from './SecondaryInfoForm/types';
import { PhotoValues } from './PhotoForm/types';

export const catFormValuesState = atom<Partial<CatValues>>({
  key: 'catFormValuesState',
  default: {
    goodBoyGrade: 7,
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

export const catFormPhotosState = selector<PhotoValues>({
  key: 'catFromPhotosState',
  get: ({ get }) => {
    const catFormValues = get(catFormValuesState);

    return {
      photos: catFormValues.photos,
    };
  },
});
