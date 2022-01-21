import { Step } from './types';
import { useContext } from 'react';
import { stepFormContext } from './stepFormContext';

const Step: Step = ({ children }) => {
  if (!children) return undefined;

  const { currentStep, prevStep, nextStep } = useContext(stepFormContext);

  return <div>{children({ currentStep, prevStep, nextStep })}</div>;
};

export default Step;
