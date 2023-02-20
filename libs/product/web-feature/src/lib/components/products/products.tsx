import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  selectAllProducts,
} from '@nx-web-mobile-api-demo/product/data-access';
import { useEffect } from 'react';
import { Box, Button, List, ListItem, ListItemText } from '@mui/material';
import Add from '@mui/icons-material/Add';

/* eslint-disable-next-line */
export interface ProductsProps {}

export function Products(props: ProductsProps) {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  useEffect(() => {
    dispatch(fetchProducts() as any);
  }, [dispatch]);

  return (
    <Box sx={{ position: 'relative' }}>
      <List>
        {products?.map((p) => (
          <ListItem>
            <ListItemText
              primary={p.name}
              secondary={`$${p.price.toFixed(2)}`}
            />
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        startIcon={<Add />}
        sx={{ position: 'sticky', bottom: 0, left: 300, width: 80 }}
      >
        Add
      </Button>
    </Box>
  );
}

export default Products;
