import { FC, ReactElement } from 'react';

export type StepChildProps = Required<StepFormContext>;

type StepProps = {
  children?: FC<StepChildProps> | ReactElement;
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
