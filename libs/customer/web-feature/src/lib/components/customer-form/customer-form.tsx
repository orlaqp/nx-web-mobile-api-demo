import { Button, Stack, TextField } from '@mui/material';
import Check from '@mui/icons-material/Check';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createCustomer } from '@nx-web-mobile-api-demo/customer/data-access';
import { Customer } from '@nx-web-mobile-api-demo/shared/api-client';

type CustomerForm = {
  firstName: string;
  lastName: string;
  emailAddress: string;
};

/* eslint-disable-next-line */
export interface CustomerFormProps {
  onFormResult: (result: boolean) => void;
}

export function CustomerForm(props: CustomerFormProps) {
  const dispatch = useDispatch();

  const { control, handleSubmit } = useForm<CustomerForm>({
    defaultValues: {
      firstName: '',
      lastName: '',
      emailAddress: '',
    },
  });
  const onSubmit = (data: CustomerForm) =>
    dispatch(createCustomer(data as Customer) as any);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column" spacing={2}>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <TextField label="First Name" variant="outlined" {...field} />
          )}
        />

        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <TextField label="Last Name" variant="outlined" {...field} />
          )}
        />

        <Controller
          name="emailAddress"
          control={control}
          render={({ field }) => (
            <TextField label="Email Address" variant="outlined" {...field} />
          )}
        />

        <Stack direction="row-reverse" spacing={4} sx={{ pt: 4 }}>
          <Button type="submit" variant="contained" startIcon={<Check />}>
            Save
          </Button>
          <Button variant="text">Cancel</Button>
        </Stack>
      </Stack>
    </form>
  );
}

export default CustomerForm;
