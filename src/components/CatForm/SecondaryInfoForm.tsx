import { FC } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Select,
  VechaiProvider,
} from '@vechaiui/react';
import { catTypesOptions, goodBoyRange } from './constants';
import { Controller, useForm } from 'react-hook-form';
import { PartialCatForm, SecondaryCatValues } from './types';

const SecondaryInfoForm: FC<PartialCatForm<SecondaryCatValues>> = ({
  initialValues,
  handleSubmit,
}) => {
  const {
    control,
    handleSubmit: onSubmit,
    register,
  } = useForm<SecondaryCatValues>({
    defaultValues: initialValues,
  });

  return (
    <VechaiProvider>
      <form onSubmit={onSubmit(handleSubmit)}>
        <FormControl>
          <FormLabel>Какой твой котик?</FormLabel>
          <Select
            placeholder="Выбери, что описывает твоего котика лучше всего"
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
        <Controller
          name="goodBoyGrade"
          control={control}
          render={({ field }) => (
            <FormControl>
              <FormLabel>Насколько твой котик молодец?</FormLabel>
              <input type="range" {...goodBoyRange} {...field} />
              <span>{field?.value || 'no value'}</span>
            </FormControl>
          )}
        />
        <Button variant="solid">i cat</Button>
      </form>
    </VechaiProvider>
  );
};

export default SecondaryInfoForm;
