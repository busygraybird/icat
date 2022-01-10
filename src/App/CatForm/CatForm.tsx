import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, VechaiProvider } from '@vechaiui/react';

const onSubmit: SubmitHandler<any> = (data) =>
  alert(JSON.stringify(data, null, 2));

const CatForm = () => {
  const { handleSubmit } = useForm();

  return (
    <VechaiProvider>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Button>i cat</Button>
      </form>
    </VechaiProvider>
  );
};

export default CatForm;
