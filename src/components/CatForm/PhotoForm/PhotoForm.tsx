import {
  DefaultButton,
  initializeIcons,
  IStackTokens,
  Stack,
  Image,
  ThemeProvider,
  ImageFit,
} from '@fluentui/react';
import BorderWrapper from '../../BorderWrapper';
import FileUpload from '../../FileUpload';
import { FC } from 'react';
import { StepChildProps } from '../../StepForm/types';
import { PartialCatForm } from '../types';
import { Image as ImageType, PhotoValues } from './types';
import { useForm } from 'react-hook-form';

import styles from './PhotoForm.module.scss';

initializeIcons();

const stackTokens: IStackTokens = { childrenGap: 10 };

const imageProps = { width: 200, height: 200, imageFit: ImageFit.contain };

// TODO: remove styles
const PhotoForm: FC<PartialCatForm<PhotoValues> & StepChildProps> = ({
  initialValues,
  handleSubmit,
  prevStep,
  nextStep,
  hasPrev,
  hasNext,
}) => {
  const {
    handleSubmit: onSubmit,
    setValue,
    watch,
  } = useForm<PhotoValues>({
    defaultValues: initialValues,
  });

  const watchPhotos = watch('photos');

  const handlePrevStep = async () => {
    await onSubmit(handleSubmit)();
    prevStep();
  };

  const handleNextStep = async () => {
    await onSubmit(handleSubmit)();
    nextStep();
  };

  const getSetFieldValue =
    (name: keyof PhotoValues) => (value: PhotoValues[keyof PhotoValues]) =>
      setValue(name, value);

  // TODO: remove style props
  return (
    <BorderWrapper title="with FluentUI and React-Hook-Form">
      <ThemeProvider>
        <form style={{ width: '400px' }} onSubmit={onSubmit(handleSubmit)}>
          <Stack tokens={stackTokens}>
            <FileUpload<ImageType>
              value={watchPhotos}
              maxFiles={5}
              maxSize={600_000}
              handleUpload={getSetFieldValue('photos')}
            />
            {Boolean(watchPhotos?.length) && (
              <Stack tokens={stackTokens} horizontal>
                {watchPhotos.map((image) => (
                  <Image
                    key={image.name}
                    src={URL.createObjectURL(image)}
                    className={styles.formPhotoPreview}
                    {...imageProps}
                  />
                ))}
              </Stack>
            )}
            <Stack horizontal>
              {hasPrev && (
                <DefaultButton text="previous" onClick={handlePrevStep} />
              )}
              {hasNext && (
                <DefaultButton text="next" onClick={handleNextStep} />
              )}
            </Stack>
          </Stack>
        </form>
      </ThemeProvider>
    </BorderWrapper>
  );
};

export default PhotoForm;
