import { Box, Button, List, ListItem, ListItemText, Modal, Stack, TextField } from '@mui/material';
import {
  customerActions,
  fetchCustomers,
  selectAllCustomers,
  selectShowCustomerForm,
} from '@nx-web-mobile-api-demo/customer/data-access';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Add from '@mui/icons-material/Add';
import CustomerForm from '../customer-form/customer-form';
import { UiModal } from '@nx-web-mobile-api-demo/shared/ui/web';

/* eslint-disable-next-line */
export interface CustomersProps {}

export function Customers(props: CustomersProps) {
  const dispatch = useDispatch();
  const customers = useSelector(selectAllCustomers);
  const showForm = useSelector(selectShowCustomerForm);

  useEffect(() => {
    dispatch(fetchCustomers() as any);
  }, [dispatch]);

  return (
    <Box sx={{ position: 'relative' }}>
      <List>
        {customers?.map((c) => (
          <ListItem>
            <ListItemText
              primary={`${c.firstName} ${c.lastName}`}
              secondary={c.emailAddress}
            />
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        startIcon={<Add />}
        sx={{ position: 'sticky', bottom: 0, left: 300, width: 80 }}
        onClick={() => dispatch(customerActions.showCustomerForm())}
      >
        Add
      </Button>
      <UiModal open={showForm}>
          <CustomerForm  />
      </UiModal>
    </Box>
  );
}

export default Customers;
