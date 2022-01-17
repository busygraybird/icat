import { ChangeEventHandler, FC } from 'react';
import { Radio } from '@vechaiui/react';

type StepDrops = {
  count: number;
  handleChange: (value: number) => void;
};

const StepDrops: FC<StepDrops> = ({ count, handleChange }) => {
  const onChange: ChangeEventHandler<HTMLFormElement> = (event) =>
    handleChange(event.target.value);

  const drops = [...new Array<number>(count)].map((_, index) => index);

  return (
    <form onChange={onChange}>
      {Boolean(count) &&
        drops.map((index) => (
          <Radio name="currentStep" key={index} value={index} />
        ))}
    </form>
  );
};

export default StepDrops;
