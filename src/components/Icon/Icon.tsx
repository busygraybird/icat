import { FC } from 'react';
import { IFontIconProps } from '@fluentui/react';
import styles from './Icon.module.scss';
import { FontIcon } from '@fluentui/react/lib/Icon';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type IconProps = {
  wrapperClassName?: string;
};

const Icon: FC<IFontIconProps & IconProps> = ({
  wrapperClassName,
  className,
  ...iconProps
}) => {
  return (
    <span className={cx(styles.iconWrapper, wrapperClassName)}>
      <FontIcon className={cx(styles.icon, className)} {...iconProps} />
    </span>
  );
};

export default Icon;
