import { FC, ReactElement } from 'react';
import Step from './Step';

interface StepFormProps {
  children: Array<FC<StepProps>>;
}

export interface StepProps {
  children: () => ReactElement;
}

export interface StepForm extends FC<StepFormProps> {
  Step?: FC<StepProps>;
}
