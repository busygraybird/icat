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
import { PartialCatValues } from './types';

const CatForm = () => {
  const [, setCatFormValues] = useRecoilState(catFormValuesState);
  const catFormPrimaryValues = useRecoilValue(catFormPrimaryValuesState);
  const catFormSecondaryValues = useRecoilValue(catFormSecondaryValuesState);

  const handleSubmit: SubmitHandler<PartialCatValues> = (data) => {
    setCatFormValues((values) => ({ ...values, ...data }));
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
