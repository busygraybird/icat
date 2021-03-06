import { FC } from 'react';
import { Field, Form } from 'react-final-form';
import {
  ChoiceGroup,
  DatePicker,
  DefaultButton,
  IStackTokens,
  Stack,
  TextField,
  ThemeProvider,
} from '@fluentui/react';
import { PartialCatForm } from '../types';
import { catSexOptions } from '../constants';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { getMaxBirthdate, getMinBirthdate } from '../utils';
import BorderWrapper from '../../BorderWrapper';
import { StepChildProps } from '../../StepForm/types';
import { PrimaryCatValues } from './types';
import styles from './PrimaryInfo.module.scss';
import { DEFAULT_MAX_AGE, DEFAULT_MIN_AGE } from './constants';

initializeIcons();

const stackTokens: IStackTokens = { childrenGap: 10 };

// TODO: refactor component
/**
 * Cat registration form with primary information
 * (implemented using FluentUI and React-Final-Form).
 */
const PrimaryInfoForm: FC<
  PartialCatForm<PrimaryCatValues> & StepChildProps
> = ({ initialValues, hasPrev, hasNext, handleSubmit, prevStep, nextStep }) => {
  const handlePrevStep = (handleSubmit: VoidFunction) => {
    handleSubmit();
    prevStep();
  };

  const handleNextStep = (handleSubmit: VoidFunction) => {
    handleSubmit();
    nextStep();
  };

  return (
    <ThemeProvider>
      <BorderWrapper title="with FluentUI & React-Final-Form">
        <Form onSubmit={handleSubmit} initialValues={initialValues}>
          {({ handleSubmit }) => (
            <form>
              <Stack tokens={stackTokens}>
                <Field name="catName">
                  {({ input }) => (
                    <TextField label="Кличка" required underlined {...input} />
                  )}
                </Field>
                <Field name="catBreed">
                  {({ input }) => (
                    <TextField
                      label="Порода"
                      placeholder="Например, Мейн-кун"
                      underlined
                      {...input}
                    />
                  )}
                </Field>
                <Field name="catSex">
                  {({ input }) => (
                    <ChoiceGroup
                      label="Пол"
                      selectedKey={input.value}
                      options={catSexOptions}
                      onChange={(_, option) => input.onChange(option.key)}
                    />
                  )}
                </Field>
                <Field name="catBirthdate">
                  {({ input }) => (
                    <DatePicker
                      {...input}
                      label="Дата рождения"
                      minDate={getMinBirthdate(DEFAULT_MAX_AGE)}
                      maxDate={getMaxBirthdate(DEFAULT_MIN_AGE)}
                      onSelectDate={input.onChange}
                      isRequired
                    />
                  )}
                </Field>
                <Stack horizontal>
                  {hasPrev && (
                    <DefaultButton
                      text="Назад"
                      type="submit"
                      className={styles.formButton}
                      onClick={() => handlePrevStep(handleSubmit)}
                    />
                  )}
                  {hasNext && (
                    <DefaultButton
                      text="Далее"
                      type="submit"
                      className={styles.formButton}
                      onClick={() => handleNextStep(handleSubmit)}
                    />
                  )}
                </Stack>
              </Stack>
            </form>
          )}
        </Form>
      </BorderWrapper>
    </ThemeProvider>
  );
};

export default PrimaryInfoForm;
