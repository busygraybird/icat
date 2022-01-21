import { useState } from 'react';

type usePagination = (stepsCount: number) => {
  currentStep: number;
  nextStep: VoidFunction;
  prevStep: VoidFunction;
};

const usePagination: usePagination = (stepsCount) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const nextStep = () =>
    setCurrentStep((step) => (step + 1 <= stepsCount - 1 ? step + 1 : 0));

  const prevStep = () =>
    setCurrentStep((step) => (step - 1 >= 0 ? step - 1 : stepsCount - 1));

  return { currentStep, nextStep, prevStep };
};

export default usePagination;
