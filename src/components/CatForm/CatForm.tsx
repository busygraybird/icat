import StepForm from '../StepForm';
import SecondaryInfoForm from './SecondaryInfoForm';
import PrimaryInfoForm from './PrimaryInfoForm';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  catFormPhotosState,
  catFormPrimaryValuesState,
  catFormSecondaryValuesState,
  catFormValuesState,
} from './state';
import { SubmitHandler } from 'react-hook-form';
import { PartialCatValues } from './types';
import PhotoForm from './PhotoForm';

const CatForm = () => {
  const [, setCatFormValues] = useRecoilState(catFormValuesState);
  const catFormPrimaryValues = useRecoilValue(catFormPrimaryValuesState);
  const catFormSecondaryValues = useRecoilValue(catFormSecondaryValuesState);
  const photoValues = useRecoilValue(catFormPhotosState);

  const handleSubmit: SubmitHandler<PartialCatValues> = (data) => {
    setCatFormValues((values) => ({ ...values, ...data }));
  };

  return (
    <StepForm>
      <StepForm.Step>
        {(props) => (
          <PhotoForm
            initialValues={photoValues}
            handleSubmit={handleSubmit}
            {...props}
          />
        )}
      </StepForm.Step>
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
