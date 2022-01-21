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

  if (childrenIsNotValid) return undefined;

  const [steps, setSteps] = useState([...children, <Result />]);

  useEffect(() => {
    setSteps([...children, <Result />]);
  }, [children]);

  const { currentStep, prevStep, nextStep } = usePagination(steps.length);

  return (
    <stepFormContext.Provider value={{ currentStep, prevStep, nextStep }}>
      <div className={styles.form}>
        <div>
          <div>{steps[currentStep]}</div>
        </div>
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
