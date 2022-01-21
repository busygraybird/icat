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
import { PartialCatForm, PrimaryCatValues } from './types';
import { catSexOptions } from './constants';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { getMaxBirthdate, getMinBirthdate } from './utils';

initializeIcons();

type PrimaryInfoFormProps = {
  prevStep: VoidFunction;
  nextStep: VoidFunction;
};

const stackTokens: IStackTokens = { childrenGap: 10 };

// TODO: refactor component
const PrimaryInfoForm: FC<
  PartialCatForm<PrimaryCatValues> & PrimaryInfoFormProps
> = ({ initialValues, handleSubmit, prevStep, nextStep }) => {
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
                    minDate={getMinBirthdate(100)}
                    maxDate={getMaxBirthdate(0)}
                    onSelectDate={input.onChange}
                  />
                )}
              </Field>
              <Stack horizontal>
                <DefaultButton
                  text="previous"
                  type="submit"
                  onClick={() => handlePrevStep(handleSubmit)}
                />
                <DefaultButton
                  text="next"
                  type="submit"
                  onClick={() => handleNextStep(handleSubmit)}
                />
              </Stack>
            </Stack>
          </form>
        )}
      </Form>
    </ThemeProvider>
  );
};

export default PrimaryInfoForm;
