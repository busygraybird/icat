import { FC } from 'react';
import { catTypesOptions, goodBoyOptionKey, goodBoyRange } from './constants';
import { Controller, useForm } from 'react-hook-form';
import { PartialCatForm, SecondaryCatValues } from './types';
import {
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Stack,
} from '@mui/material';

type SecondaryInfoFormProps = {
  prevStep: VoidFunction;
  nextStep: VoidFunction;
};

// TODO: refactor component
const SecondaryInfoForm: FC<
  PartialCatForm<SecondaryCatValues> & SecondaryInfoFormProps
> = ({ initialValues, handleSubmit, prevStep, nextStep }) => {
  const {
    control,
    handleSubmit: onSubmit,
    watch,
  } = useForm<SecondaryCatValues>({
    defaultValues: initialValues,
  });

  const watchCatType = watch('catType');
  const isGoodBoyOptionSelected = +watchCatType === goodBoyOptionKey;

  const handlePrevStep = () => {
    onSubmit(handleSubmit)();
    prevStep();
  };

  const handleNextStep = () => {
    onSubmit(handleSubmit)();
    nextStep();
  };

  return (
    <form onSubmit={onSubmit(handleSubmit)}>
      <Stack spacing={2}>
        <Controller
          name="catType"
          control={control}
          render={({ field }) => (
            <FormControl variant="standard" defaultValue={-1}>
              <InputLabel>Какой твой котик?</InputLabel>
              <Select {...field}>
                <MenuItem value={-1} disabled>
                  Выбери, что описывает твоего котика лучше всего
                </MenuItem>
                {Boolean(catTypesOptions?.length) &&
                  catTypesOptions.map(({ value, label }) => (
                    <MenuItem key={value} value={value}>
                      {label}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          )}
        />
        {isGoodBoyOptionSelected && (
          <Controller
            name="goodBoyGrade"
            control={control}
            render={({ field }) => (
              <Stack spacing={2}>
                <InputLabel>Насколько твой котик молодец?</InputLabel>
                <Stack direction="row" spacing={2}>
                  <Slider {...field} {...goodBoyRange} />
                  <span>{field?.value}</span>
                </Stack>
              </Stack>
            )}
          />
        )}
        <ButtonGroup variant="outlined">
          <Button onClick={handlePrevStep} type="submit">
            previous
          </Button>
          <Button onClick={handleNextStep} type="submit">
            next
          </Button>
        </ButtonGroup>
      </Stack>
    </form>
  );
};

export default SecondaryInfoForm;
