import { IChoiceGroupOption } from '@fluentui/react';

export const catTypesOptions = [
  { value: 1, label: 'веселый' },
  { value: 2, label: 'грустный' },
  { value: 3, label: 'дружелюбный' },
  { value: 4, label: 'осторожный' },
  { value: 5, label: 'любопытный' },
  { value: 6, label: 'серьезный' },
  { value: 7, label: 'мой котик -- молодец' },
];

export const goodBoyOptionKey = 7;

export const catSexOptions: IChoiceGroupOption[] = [
  { key: 'm', text: 'М' },
  { key: 'f', text: 'Ж' },
];

export const goodBoyRange = { min: 1, max: 10 };
