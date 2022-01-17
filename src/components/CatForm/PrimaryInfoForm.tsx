import { FC } from 'react';
import { Field, Form } from 'react-final-form';
import {
  DefaultButton,
  IStackTokens,
  Stack,
  TextField,
  ThemeProvider,
} from '@fluentui/react';
import { PartialCatForm, PrimaryCatValues } from './types';

const stackTokens: IStackTokens = { childrenGap: 10 };

const PrimaryInfoForm: FC<PartialCatForm<PrimaryCatValues>> = ({
  initialValues,
  handleSubmit,
}) => {
  return (
    <ThemeProvider>
      <Form onSubmit={handleSubmit} initialValues={initialValues}>
        {({ handleSubmit }) => (
          <form>
            <Stack tokens={stackTokens}>
              <Field name="catName">
                {({ input }) => (
                  <TextField
                    label="Имя котика"
                    required
                    underlined
                    {...input}
                  />
                )}
              </Field>
              <Field name="catAge">
                {({ input }) => (
                  <TextField
                    label="Возраст котика"
                    placeholder="Например, 5"
                    suffix="котолет"
                    required
                    underlined
                    {...input}
                  />
                )}
              </Field>
              <DefaultButton
                text="i cat"
                type="submit"
                onClick={handleSubmit}
              />
            </Stack>
          </form>
        )}
      </Form>
    </ThemeProvider>
  );
};

export default PrimaryInfoForm;
