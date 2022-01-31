import { FC, HTMLAttributes } from 'react';

import styles from './BorderWrapper.module.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

type BorderProps = {
  title?: string;
};

const BorderWrapper: FC<BorderProps & HTMLAttributes<HTMLDivElement>> = ({
  title,
  className,
  children,
  ...restProps
}) => {
  return (
    <div>
      <div
        data-title={title}
        className={cx(styles.border, className)}
        {...restProps}
      >
        <div className={styles.borderContent}>{children}</div>
      </div>
    </div>
  );
};

export default BorderWrapper;
