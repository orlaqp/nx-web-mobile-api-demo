import { Box, Button } from "@mui/material";
import Add from '@mui/icons-material/Add';


/* eslint-disable-next-line */
export interface OrdersProps {}

export function Orders(props: OrdersProps) {
  return (
    <Box display='flex' flexDirection='row-reverse'>
      <Button
        variant="contained"
        startIcon={<Add />}
        sx={{ width: 220 }}
      >
        Place new Order
      </Button>
    </Box>
  );
}

export default Orders;
