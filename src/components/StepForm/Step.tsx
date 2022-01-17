import { FC } from 'react';
import { StepProps } from './types';

const Step: FC<StepProps> = ({ children }) => {
  return <div>{children()}</div>;
};

export default Step;
