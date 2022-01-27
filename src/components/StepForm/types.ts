import { FC, ReactElement } from 'react';

type StepProps = {
  children?: (props: Required<StepFormContext>) => ReactElement;
};

export type Step = FC<StepProps>;

export type StepForm = FC & {
  Step: Step;
};

export type StepFormContext = {
  currentStep?: number;
  hasPrev?: boolean;
  hasNext?: boolean;
  prevStep?: VoidFunction;
  nextStep?: VoidFunction;
};
