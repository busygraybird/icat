import { FC, HTMLAttributes, useEffect, useState } from 'react';

import styles from './StepForm.module.scss';
import Step from './Step';
import StepDrops from './StepDrops';

type StepForm = {
  Step: FC;
};

const StepForm: StepForm & FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  if (!children) return null;

  const [stepsCount, setStepsCount] = useState<number>();
  const [currentStep, setCurrentStep] = useState<number>(0);

  useEffect(() => {
    setStepsCount(Array.isArray(children) ? children.length : 1);
  }, [children]);

  const nextStep = () =>
    setCurrentStep((step) => (step + 1 <= stepsCount - 1 ? step + 1 : 0));

  const prevStep = () =>
    setCurrentStep((step) => (step - 1 >= 0 ? step - 1 : stepsCount - 1));

  if (stepsCount && Array.isArray(children)) {
    return (
      <div className={styles.form}>
        <div>
          <div>{children[currentStep]}</div>
        </div>
        <StepDrops count={stepsCount} handleChange={setCurrentStep} />
      </div>
    );
  }

  return <div className={styles.form}>{children}</div>;
};

StepForm.Step = Step;

export default StepForm;
