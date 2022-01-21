import StepForm from '../StepForm';
import SecondaryInfoForm from './SecondaryInfoForm';
import PrimaryInfoForm from './PrimaryInfoForm';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  catFormPrimaryValuesState,
  catFormSecondaryValuesState,
  catFormValuesState,
} from './state';
import { SubmitHandler } from 'react-hook-form';
import {
  CatValues,
  PartialCatValues,
  PrimaryCatValues,
  SecondaryCatValues,
} from './types';

const CatForm = () => {
  const [, setCatFormValues] = useRecoilState<CatValues>(catFormValuesState);
  const catFormPrimaryValues = useRecoilValue<PrimaryCatValues>(
    catFormPrimaryValuesState,
  );
  const catFormSecondaryValues = useRecoilValue<SecondaryCatValues>(
    catFormSecondaryValuesState,
  );

  const handleSubmit: SubmitHandler<PartialCatValues> = (data) => {
    console.log({ submitted: data });
    setCatFormValues((values) => {
      console.log({ ...values, ...data });
      return { ...values, ...data };
    });
  };

  return (
    <StepForm>
      <StepForm.Step>
        {(props) => (
          <PrimaryInfoForm
            initialValues={catFormPrimaryValues}
            handleSubmit={handleSubmit}
            {...props}
          />
        )}
      </StepForm.Step>
      <StepForm.Step>
        {(props) => (
          <SecondaryInfoForm
            initialValues={catFormSecondaryValues}
            handleSubmit={handleSubmit}
            {...props}
          />
        )}
      </StepForm.Step>
    </StepForm>
  );
};

export default CatForm;
