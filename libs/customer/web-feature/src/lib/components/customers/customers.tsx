import { List, ListItem, ListItemText } from '@mui/material';
import {
  fetchCustomers,
  selectAllCustomers,
  selectCustomers,
} from '@nx-web-mobile-api-demo/customer/data-access';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* eslint-disable-next-line */
export interface CustomersProps {}

export function Customers(props: CustomersProps) {
  const dispatch = useDispatch();
  const customers = useSelector(selectAllCustomers);
  useEffect(() => { dispatch(fetchCustomers() as any) }, []);

  return (

    <List>
      { customers?.map(c => (
        <ListItem>
          <ListItemText
            primary={`${c.firstName} ${c.lastName}`}
            secondary={c.emailAddress}
          />
        </ListItem>
      ))}
    </List>
    
  );
}

export default Customers;
