import { DropzoneProps, useDropzone } from 'react-dropzone';
import { useCallback } from 'react';
import {
  IStackTokens,
  List,
  Stack,
  ThemeProvider,
  TooltipHost,
} from '@fluentui/react';

import styles from './FileUpload.module.scss';
import classNames from 'classnames/bind';
import Icon from '../Icon';

const cx = classNames.bind(styles);

const stackTokens: IStackTokens = { childrenGap: 10 };

type FileUploadProps<T> = {
  handleUpload: (files: Array<T>) => void;
  value?: Array<T>;
};

const FileUpload = <T extends { name: string; size: number }>({
  value,
  accept,
  maxFiles,
  maxSize,
  handleUpload,
}: FileUploadProps<T> & DropzoneProps): JSX.Element => {
  const onDrop = useCallback((acceptedFiles) => {
    try {
      handleUpload(acceptedFiles);
    } catch (e) {
      alert(e.toString());
    }
  }, []);

  const validateFileSize = (file: File) => {
    const defaultMaxFileSize = 1_000_000;
    const max = maxSize || defaultMaxFileSize;

    if (file.size > max) {
      return {
        code: 'size-too-large',
        message: `Размер изображения больше ${bitsToKBytes(max)} КБ`,
      };
    }
  };

  const {
    isDragActive,
    getRootProps,
    getInputProps,
    acceptedFiles,
    fileRejections,
  } = useDropzone({
    onDrop,
    accept,
    maxFiles: maxFiles,
    validator: maxSize ? validateFileSize : null,
  });

  const files: Array<T | File> = value || acceptedFiles || null;

  const dropAreaClassNames = cx(styles.uploaderDropArea, {
    [styles.uploaderDropAreaActive]: isDragActive,
  });

  // TODO: remove style prop
  return (
    <ThemeProvider>
      <Stack tokens={stackTokens}>
        <div {...getRootProps({ className: dropAreaClassNames })}>
          <input {...getInputProps()} />
          <Icon
            iconName="Download"
            wrapperClassName={styles.uploaderUploadIconWrapper}
            className={cx(styles.uploaderUploadIcon, styles.darkGreenColor)}
          />
          <p>Перенесите файлы в это поле или кликните для выбора файлов</p>
          {Boolean(maxFiles) && (
            <p>
              <em>(вы можете загрузить только {maxFiles} файлов)</em>
            </p>
          )}
          {Boolean(maxSize) && (
            <p>
              <em>
                (вы можете загрузить файлы размером не более{' '}
                <span className={styles.nowrap}>
                  {bitsToKBytes(maxSize)} КБ)
                </span>
              </em>
            </p>
          )}
        </div>
        {
          <Stack tokens={stackTokens}>
            {Boolean(files?.length) &&
              files.map((file) => (
                <div key={file.name} className={styles.uploaderFileInfo}>
                  <SuccessIcon />
                  <span>{file.name}</span>
                  <span className={cx(styles.fileSize, styles.nowrap)}>
                    {bitsToKBytes(file.size)} КБ
                  </span>
                </div>
              ))}
            {Boolean(fileRejections?.length) &&
              fileRejections.map(({ file, errors }) => (
                <TooltipHost
                  key={file.name}
                  content={
                    <List
                      items={errors}
                      onRenderCell={({ message }) => message}
                    />
                  }
                >
                  <div className={styles.uploaderFileInfo}>
                    <ErrorIcon />
                    <span>{file.name}</span>
                    <span className={cx(styles.fileSize, styles.nowrap)}>
                      {bitsToKBytes(file.size)} КБ
                    </span>
                  </div>
                </TooltipHost>
              ))}
          </Stack>
        }
      </Stack>
    </ThemeProvider>
  );
};

const SuccessIcon = () => (
  <Icon
    iconName="Accept"
    className={cx(styles.uploaderFileResultIcon, styles.whiteColor)}
    wrapperClassName={cx(
      styles.uploaderFileResultIconWrapper,
      styles.successBackground,
    )}
  />
);

const ErrorIcon = () => (
  <Icon
    iconName="Cancel"
    className={cx(styles.uploaderFileResultIcon, styles.whiteColor)}
    wrapperClassName={cx(
      styles.uploaderFileResultIconWrapper,
      styles.errorBackground,
    )}
  />
);

// TODO: move to utils
const bitsToKBytes = (bitSize: number): number => {
  const bitsInByte = 1024;

  return Math.round(bitSize / bitsInByte);
};

export default FileUpload;
