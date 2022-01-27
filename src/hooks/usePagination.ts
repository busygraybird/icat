import { useState } from 'react';

type usePagination = (stepsCount: number) => {
  currentStep: number;
  hasPrev: boolean;
  hasNext: boolean;
  nextStep: VoidFunction;
  prevStep: VoidFunction;
};

const usePagination: usePagination = (stepsCount) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const hasPrev = currentStep > 0;
  const hasNext = currentStep < stepsCount;

  const nextStep = () =>
    setCurrentStep((step) => (step + 1 <= stepsCount - 1 ? step + 1 : 0));

  const prevStep = () =>
    setCurrentStep((step) => (step - 1 >= 0 ? step - 1 : stepsCount - 1));

  return { currentStep, hasPrev, hasNext, nextStep, prevStep };
};

export default usePagination;
