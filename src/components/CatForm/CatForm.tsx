import StepForm from '../StepForm';
import SecondaryInfoForm from './SecondaryInfoForm';
import PrimaryInfoForm from './PrimaryInfoForm';
import { useRecoilState } from 'recoil';
import { catFormValuesState } from './state';
import { SubmitHandler } from 'react-hook-form';
import { CatValues, PartialCatValues } from './types';

const CatForm = () => {
  const [catFormValues, setCatFormValues] =
    useRecoilState<CatValues>(catFormValuesState);

  const handleSubmit: SubmitHandler<PartialCatValues> = (data) => {
    alert(JSON.stringify(data, null, 2));
    setCatFormValues((values) => ({ ...values, ...data }));
  };

  return (
    <StepForm>
      <StepForm.Step></StepForm.Step>
      <StepForm.Step>
        {() => (
          <PrimaryInfoForm
            initialValues={catFormValues}
            handleSubmit={handleSubmit}
          />
        )}
      </StepForm.Step>
      <StepForm.Step>
        {() => (
          <SecondaryInfoForm
            initialValues={catFormValues}
            handleSubmit={handleSubmit}
          />
        )}
      </StepForm.Step>
    </StepForm>
  );
};

export default CatForm;
