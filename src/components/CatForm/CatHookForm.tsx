import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VechaiProvider,
} from '@vechaiui/react';
import {
  catTypesOptions,
  defaultCatFormValues,
  goodBoyRange,
} from './constants';
import StepForm from '../StepForm';

type CatFormValues = {
  catType: string;
  catAge: number;
  goodBoyGrade: number;
};

const onSubmit: SubmitHandler<CatFormValues> = (data) =>
  alert(JSON.stringify(data, null, 2));

const CatHookForm = () => {
  const { control, handleSubmit, register } = useForm<CatFormValues>({
    defaultValues: defaultCatFormValues,
  });

  return (
    <VechaiProvider>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StepForm>
          <StepForm.Step>
            <FormControl>
              <FormLabel>Какой ты котик?</FormLabel>
              <Select
                placeholder="Выбери, что описывает тебя лучше всего"
                {...register('catType')}
              >
                {Boolean(catTypesOptions?.length) &&
                  catTypesOptions.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
              </Select>
            </FormControl>
          </StepForm.Step>
          <StepForm.Step>
            <FormControl>
              <FormLabel>Сколько тебе лет?</FormLabel>
              <Input.Group>
                <Input placeholder="Например, 25" {...register('catAge')} />
                <Input.RightAddon>котолет</Input.RightAddon>
              </Input.Group>
            </FormControl>
          </StepForm.Step>
          <StepForm.Step>
            <Controller
              name="goodBoyGrade"
              control={control}
              render={({ field }) => (
                <FormControl>
                  <FormLabel>Насколько ты молодец?</FormLabel>
                  <input type="range" {...goodBoyRange} {...field} />
                  <span>{field?.value || 'no value'}</span>
                </FormControl>
              )}
            />
            <Button variant="solid">i cat</Button>
          </StepForm.Step>
        </StepForm>
      </form>
    </VechaiProvider>
  );
};

export default CatHookForm;
