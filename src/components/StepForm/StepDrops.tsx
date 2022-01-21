import { FC } from 'react';

import styles from './StepDrop.module.scss';
import classNames from 'classnames';

type StepDrops = {
  count: number;
  current?: number;
};

const StepDrops: FC<StepDrops> = ({ count, current }) => {
  if (count < 0) return undefined;

  const drops = [...new Array<number>(current + 1)].map((_, index) => index);

  const lastStepsCount = count - current - 1;

  // TODO: refactor styles
  return (
    <div>
      {drops.map((drop) => (
        <span
          key={drop}
          className={classNames(styles.drop, {
            [styles.dropSelected]: drop === current,
          })}
        >
          {drop + 1}
        </span>
      ))}
      {Boolean(lastStepsCount) && (
        <span>
          ...and {lastStepsCount} step{lastStepsCount > 1 && 's'}
        </span>
      )}
    </div>
  );
};

export default StepDrops;
