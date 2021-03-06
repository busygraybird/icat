import { Step } from '../types';
import { useContext } from 'react';
import { stepFormContext } from '../stepFormContext';

const Step: Step = ({ children }) => {
  if (!children) return undefined;

  const { currentStep, hasPrev, hasNext, prevStep, nextStep } =
    useContext(stepFormContext);

  if (typeof children === 'function') {
    return (
      <div>
        {children({ currentStep, hasPrev, hasNext, prevStep, nextStep })}
      </div>
    );
  }

  return <div>{children}</div>;
};

export default Step;
