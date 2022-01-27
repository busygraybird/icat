// TODO: rename types
export type PrimaryCatValues = {
  catName: string;
  catBreed: string;
  catSex: 'm' | 'f';
  catBirthdate: Date;
};

export type SecondaryCatValues = {
  catType: string;
  goodBoyGrade: number;
};

export type CatValues = PrimaryCatValues & SecondaryCatValues;

export type PartialCatValues = PrimaryCatValues | SecondaryCatValues;

export interface PartialCatForm<T extends PartialCatValues> {
  readonly handleSubmit: (data: T) => void;
  readonly initialValues?: T;
}
