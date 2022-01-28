import { PrimaryCatValues } from './PrimaryInfoForm/types';
import { SecondaryCatValues } from './SecondaryInfoForm/types';

export type CatValues = PrimaryCatValues & SecondaryCatValues;

export type PartialCatValues = PrimaryCatValues | SecondaryCatValues;

export interface PartialCatForm<T extends PartialCatValues> {
  readonly handleSubmit: (data: T) => void;
  readonly initialValues?: T;
}
