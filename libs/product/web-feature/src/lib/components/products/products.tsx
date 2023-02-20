import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectAllProducts } from "@nx-web-mobile-api-demo/product/data-access";
import { useEffect } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

/* eslint-disable-next-line */
export interface ProductsProps {}

export function Products(props: ProductsProps) {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  useEffect(() => { dispatch(fetchProducts() as any) }, [dispatch]);

  return (
    <List>
      { products?.map(p => (
        <ListItem>
          <ListItemText
            primary={p.name}
            secondary={`$${p.price.toFixed(2)}`}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default Products;
