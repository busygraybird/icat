import { FC, HTMLAttributes } from 'react';

const Step: FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return <div>{children}</div>;
};

export default Step;
