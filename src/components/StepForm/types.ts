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
  prevStep?: VoidFunction;
  nextStep?: VoidFunction;
};
