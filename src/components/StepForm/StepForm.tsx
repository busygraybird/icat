import styles from './StepForm.module.scss';
import Step from './Step';
import StepDrops from './StepDrops';

import { StepForm as StepFormType } from './types';
import usePagination from '../../hooks/usePagination';
import { stepFormContext } from './stepFormContext';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { catFormValuesState } from '../CatForm/state';

const StepForm: StepFormType = ({ children }) => {
  const childrenIsNotValid =
    !children || !Array.isArray(children) || children.length <= 1;

  if (childrenIsNotValid) return;

  const [steps, setSteps] = useState([...children, <Result key={-1} />]);

  useEffect(() => {
    setSteps([...children, <Result key={-1} />]);
  }, [children]);

  const { currentStep, hasPrev, hasNext, prevStep, nextStep } = usePagination(
    steps.length,
  );

  const isLastStep = currentStep === steps.length - 1;

  return (
    <stepFormContext.Provider
      value={{ currentStep, hasPrev, hasNext, prevStep, nextStep }}
    >
      <div className={styles.form}>
        <div>
          <div>{steps[currentStep]}</div>
        </div>
        {isLastStep && (
          <div>
            <button onClick={nextStep}>to start page</button>
          </div>
        )}
        <StepDrops count={steps.length - 1} current={currentStep} />
      </div>
    </stepFormContext.Provider>
  );
};

const Result = () => {
  const [catFormValues] = useRecoilState(catFormValuesState);

  return <div>{JSON.stringify(catFormValues, null, 2)}</div>;
};

StepForm.Step = Step;

export default StepForm;
