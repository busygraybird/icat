import { PrimaryCatValues } from './PrimaryInfoForm/types';
import { SecondaryCatValues } from './SecondaryInfoForm/types';
import { PhotoValues } from './PhotoForm/types';

export type CatValues = PrimaryCatValues & SecondaryCatValues & PhotoValues;

export type PartialCatValues =
  | PrimaryCatValues
  | SecondaryCatValues
  | PhotoValues;

export interface PartialCatForm<T extends PartialCatValues> {
  readonly handleSubmit: (data: T) => void;
  readonly initialValues?: T;
}
